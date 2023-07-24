const pool = require("../config/database");

// auxiliary function to check if the game ended 
async function checkEndGame(game) {
    return game.turn >= Play.maxNumberTurns;
}

class Play {
    // At this moment I do not need to store information so we have no constructor

    // Just a to have a way to determine end of game
    static maxNumberTurns = 10;


    // we consider all verifications were made
    static async startGame(game) {
        try {
            // Randomly determines who starts    
            let myTurn = (Math.random() < 0.5);
            let p1Id = myTurn ? game.player.id : game.opponents[0].id;
            let p2Id = myTurn ? game.opponents[0].id : game.player.id;

            let user1 = myTurn ? game.player.userId : game.opponents[0].userId;
            let user2 = myTurn ? game.opponents[0].userId : game.player.userId;

            // Player that start changes to the state Playing and order 1 
            await pool.query(`Update user_game set ug_state_id=?,ug_order=? where ug_id = ?`, [2, 1, p1Id]);
            // Player that is second changes to order 2
            await pool.query(`Update user_game set ug_order=? where ug_id = ?`, [2, p2Id]);

            // Changing the game state to start
            await pool.query(`Update game set gm_state_id=? where gm_id = ?`, [2, game.id]);

            await pool.query("INSERT INTO scoreboard (sb_user_game_id,sb_state_id,sb_points) VALUES (?,?,?)",[game.player.id,1,0])
            await pool.query("INSERT INTO scoreboard (sb_user_game_id,sb_state_id,sb_points) VALUES (?,?,?)",[game.opponents[0].id,1,0])


            /*
            sb_user_game_id,sb_state_id,sb_points) values (?,?,?)`;
            await pool.query(sqlScore, [game.player.id,1,1]);
            await pool.query(sqlScore, [game.opponents[0].id,1,1]);
            */

            // ---- Specific rules for each game start bellow
            this.populateCards(user1,user2,game)
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }


    static async populateCards(p1,p2,game) {
   
        await pool.query("INSERT hand (hnd_usr,hnd_gm) values (?, ?)",[null,game.id]).then((data)=>{
            let handId = data[0].insertId;
            
           pool.query("SELECT * FROM cards").then(async (result)=>{

                let cards = result[0];

                for (let i = 0;i<cards.length;i++) {

                    await pool.query("INSERT hand_cards (hc_hand_id,hc_card_id) values (?, ?)",[handId,cards[i].crd_id]);
                }

        
                await pool.query("INSERT hand (hnd_usr,hnd_gm) values (?, ?)",[p1,game.id]).then(async (hand)=>{
                    await this.distributeCards(p1,hand[0].insertId,game)
                    
                    await pool.query("INSERT hand (hnd_usr,hnd_gm) values (?, ?)",[p2,game.id]).then(async (hand2)=>{
                        await this.distributeCards(p2,hand2[0].insertId,game);
    
                    });


                });
                

                

            }); 
        });

        


    }

    static async distributeCards(userId,handId,game) {
       await pool.query("SELECT * FROM hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id where hnd_gm = ? AND hand.hnd_usr is null",[game.id]).then(async (data)=>{

            if (data[0].length > 0) {
                for (let i = 0;i<3;i++) {
                    let index = Math.floor(Math.random() * data[0].length);
                    //if (data[0][i] != undefined) {

                    await pool.query("UPDATE hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id SET hc_hand_id = ? WHERE hnd_gm = ? AND hc_card_id = ? ",[handId,game.id,data[0][index].hc_card_id]);
                    data[0].splice(index,1);
                   // }
                }
            }

        });
    }


    static async distributeCard(handId,game) {
        let data = await pool.query("SELECT * FROM hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id where hnd_gm = ? AND hand.hnd_usr is null",[game.id]);
 
        if (data[0].length > 0) {
            let index = Math.floor(Math.random() * data[0].length);
                //if (data[0][i] != undefined) {

            await pool.query("UPDATE hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id SET hc_hand_id = ? WHERE hnd_gm = ? AND hc_card_id = ? ",[handId,game.id,data[0][index].hc_card_id]);
        }
 
     }


    static async getCards(userId,game,onResult) {
        pool.query("SELECT * FROM hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id JOIN cards ON cards.crd_id = hand_cards.hc_card_id where hnd_gm = ? AND hand.hnd_usr = ?",[game.id,userId]).then((data)=>{
            onResult(data[0]);
        })
    }

    static async getHandCards(game,player) {
        return await pool.query("SELECT * FROM hand_cards JOIN hand ON hand_cards.hc_hand_id = hand.hnd_id WHERE hnd_usr = ? AND hnd_gm = ?",[player.userId,game.id])
    }

    static async getGameCards() {
        return await pool.query("SELECT * FROM cards");
    }

    static async getBattleCards(game,onResult) {
        return await pool.query("SELECT user_game.*, battle.*,game.gm_turn_timestamp FROM battle JOIN user_game ON user_game.ug_id = battle.bat_ug_id JOIN game ON user_game.ug_game_id = game.gm_id WHERE ug_game_id = ? and (battle.bat_turn = ? or (battle.bat_turn = ? - 1 and game.gm_turn_timestamp BETWEEN current_timestamp() - interval 2 second and current_timestamp())) ORDER BY bat_id DESC LIMIT 2",[game.id,game.turn,game.turn]);
    }


    // This considers that only one player plays at each moment, 
    // so ending my turn starts the other players turn
    // We consider the following verifications were already made:
    // - The user is authenticated
    // - The user has a game running
    // NOTE: This might be the place to check for victory, but it depends on the game
    static async endTurn(game,crd_id) {
        try {

           // await pool.query("UPDATE game SET gm_next_user = ? WHERE gm_id = ?",[game.opponents[0].id,game.id])
            // Change player state to waiting (1)
            await pool.query(`Update user_game set ug_state_id=? where ug_id = ?`,
                [1, game.player.id]);
            // Change opponent state to playing (2)
            await pool.query(`Update user_game set ug_state_id=? where ug_id = ?`,
                [2, game.opponents[0].id]);

                await this.finishTurn(game,crd_id)

            // Both players played
            if (game.player.order == 2) {
                await this.battle(game);
                await this.finishBattle(game);
                
                await pool.query("UPDATE game SET gm_next_user = ? WHERE gm_id = ?",[game.opponents[0].id,game.id])
                await pool.query(`Update user_game set ug_state_id=? where ug_game_id = ?`,[1,game.id]);
                // Criteria to check if game ended
                if (await checkEndGame(game)) {
                    return await Play.endGame(game);
                } else {


                    // Increase the number of turns and continue 
                    await pool.query(`Update game set gm_turn=gm_turn+1 where gm_id = ?`,
                        [game.id]);
                }
            }



            return { status: 200, result: { msg: "Your turn ended." } };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async finishTurn(game,cardPlayed) {
        let result = await pool.query("select gm_turn from game where gm_id = ?",[game.id]);
      // await pool.query("Insert into turns (gm_id,crd_id,usr_id) VALUES (?,?,?)",[game.id,cardPlayed,game.player.userId]);
       await pool.query("Insert into battle (bat_ug_id,bat_cardid,bat_turn) VALUES (?,?,?)",[game.player.id,cardPlayed,result[0][0].gm_turn]);

       let hnd = await pool.query("DELETE hand_cards FROM hand_cards JOIN hand ON hand.hnd_id = hand_cards.hc_hand_id WHERE hand_cards.hc_card_id = ? AND hand.hnd_usr = ?",[cardPlayed,game.player.userId]);


    }
    
    static async battle(game) {
        let result = await pool.query("SELECT * FROM battle JOIN cards ON bat_cardid = crd_id JOIN user_game ON ug_id = bat_ug_id WHERE ug_game_id = ? ORDER BY bat_turn DESC LIMIT 2",[game.id])
        
        let p1Card = result[0][0];
        let p2Card = result[0][1];
        
        let winner = null;

        if(p1Card.crd_value > p2Card.crd_value){
            winner = p1Card;
        } else if (p1Card.crd_value < p2Card.crd_value) {
            winner = p2Card;
        }

        await pool.query("UPDATE game set gm_turn_timestamp = CURRENT_TIMESTAMP() where gm_id = ?",[game.id])

        if (winner != null) {
            pool.query("UPDATE scoreboard SET sb_points = sb_points + 1 WHERE sb_user_game_id = ?",[winner.bat_ug_id]);
            
        }
        
    }

    static async finishBattle(game) {

       let res = await pool.query("SELECT * FROM hand WHERE hnd_gm = ?",[game.id]);
       let hands = res[0];
        for (let i = 0;i<hands.length;i++) {
            await this.distributeCard(hands[i].hnd_id,game);
        }
    }

    // Makes all the calculation needed to end and score the game
    static async endGame(game) {
        try {
            // Both players go to score phase (id = 3)
            let sqlPlayer = `Update user_game set ug_state_id = ? where ug_id = ?`;
            await pool.query(sqlPlayer, [3, game.player.id]);
            await pool.query(sqlPlayer, [3, game.opponents[0].id]);
            // Set game to finished (id = 3)
            await pool.query(`Update game set gm_state_id=? where gm_id = ?`, [3, game.id]);

            // Insert score lines with the state and points.
            // For this template both are  tied (id = 1) and with one point 
            
            let p1Score = await pool.query("SELECT * FROM scoreboard WHERE sb_user_game_id = ?",[game.player.id])
            let p2Score =await pool.query("SELECT * FROM scoreboard WHERE sb_user_game_id = ?",[game.opponents[0].id])

            if (p1Score[0][0].sb_points < p2Score[0][0].sb_points) {
                await pool.query("UPDATE scoreboard SET sb_state_id = ? WHERE sb_user_game_id = ?",[2,p1Score[0][0].sb_user_game_id])
            }

            if (p1Score[0][0].sb_points > p2Score[0][0].sb_points) {
                await pool.query("UPDATE scoreboard SET sb_state_id = ? WHERE sb_user_game_id = ?",[3,p1Score[0][0].sb_user_game_id])
            }

            if (p2Score[0][0].sb_points < p1Score[0][0].sb_points) {
                await pool.query("UPDATE scoreboard SET sb_state_id = ? WHERE sb_user_game_id = ?",[2,p2Score[0][0].sb_user_game_id])
            }

            if (p2Score[0][0].sb_points > p1Score[0][0].sb_points) {
                await pool.query("UPDATE scoreboard SET sb_state_id = ? WHERE sb_user_game_id = ?",[3,p2Score[0][0].sb_user_game_id])
            }


          /*  let sqlScore = `Insert into scoreboard (sb_user_game_id,sb_state_id,sb_points) values (?,?,?)`;
            await pool.query(sqlScore, [game.player.id,1,1]);
            await pool.query(sqlScore, [game.opponents[0].id,1,1]);*/

            return { status: 200, result: { msg: "Game ended. Check scores." } };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async getMatchStatus(game) {
        let gm = await pool.query("SELECT * FROM game WHERE gm_id = ? AND (gm_turn_timestamp + 2) < CURRENT_TIMESTAMP() AND gm_next_user IS NOT NULL",[game.id]);
        if (gm[0].length > 0) {
            await pool.query("UPDATE user_game SET ug_state_id = 2 WHERE ug_game_id = ? AND ug_id = ?",[game.id,gm[0][0].gm_next_user]);
            await pool.query("UPDATE game SET gm_next_user = NULL WHERE gm_id = ? ",[game.id])

        }
        
    }
}

module.exports = Play;