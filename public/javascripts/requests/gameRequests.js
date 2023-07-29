// Actions
async function requestEndTurn(crd_id) {
    try {
        const response = await fetch(`/api/plays/endturn/`+crd_id, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "PATCH"
      });
      return {successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function requestCloseScore() {
    try {
        const response = await fetch(`/api/scores/auth/close`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "PATCH"
      });
      return {successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function fetchMatchStatus() {
    try {
       let response = await fetch("/api/plays/matchstatus", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "GET"
      })
      let result = await response.json();
      let data = { successful: response.status == 200,
        unauthenticated: response.status == 401,
        game: result}; 
        

    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function fetchScore() {
    try {
        let response = await fetch("/api/plays/scores", {
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
           method: "GET"
       })
       let result = await response.json();
       let data = { successful: response.status == 200,
         unauthenticated: response.status == 401,
         game: result}; 
        
        console.log(data.game);

        scorePlayers = data.game.score;
 
     } catch (err) {
         // Treat 500 errors here
         console.log(err);
         return {err: err};
     }
}

//obtaian the cards on hand and arena

async function fetchBoard() {
    let response = await fetch("/api/plays/board", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
      method: "GET"
  })
  let result = await response.json();
  let data = { successful: response.status == 200,
    unauthenticated: response.status == 401,
    game: result}; 
   
    let cards = data.game.battle;
    let pId = data.game.playerId;

    if (cards!=undefined){

    
    // No cards are in battle
    if (cards.length == 0) {
        HandInfo.battleCard1 = null;
        HandInfo.battleCard2 = null;

    } else {
        for (let i = 0;i<cards.length;i++) {
            if (cards[i] != undefined) {

                let crd = CardInfo.create(CardStorage.getCardById(cards[i].bat_cardid));
                crd.isFlipped = true;
                if (cards[i].bat_ug_id == pId) {
                    HandInfo.battleCard2 = crd;
                } else {
                    HandInfo.battleCard1 = crd;
                }
            }
        }   

    }
  
}

   let hand_cards = data.game.hand;


   HandInfo.cards = [];

    if(hand_cards!=undefined){

    //Clears the array and adds all current on hand
   for (let i = 0;i<hand_cards.length;i++) {
       let crdData = CardStorage.getCardById(hand_cards[i].hc_card_id);
       if (crdData != null) {
           let crd = CardInfo.create(crdData);

            if (HandInfo.selectedIndex == i) {
                crd.isSelected = true;
            }

           HandInfo.cards.push(crd);
       }
       
   }

    }

    
    if (data.game.board_last_card != undefined) {
        HandInfo.trumpCard = data.game.board_last_card;
        if (HandInfo.trumpCard != undefined) {
            HandInfo.trumpCardData = CardStorage.getCardById(HandInfo.trumpCard.hc_card_id);
        } else {
            HandInfo.trumpCardData = null;
        }
    }
}