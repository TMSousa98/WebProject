const express = require('express');
const router = express.Router();
const Play = require("../models/playsModel");
const auth = require("../middleware/auth");

// End the turn
router.patch('/endturn/:cardId', auth.verifyAuth, async function (req, res, next) {
    try {
        console.log("Play End Turn");
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game, please create or join a game"});
        } else if (req.game.player.state.name != "Playing") {
            // Do not need to check if there are two players since in that case
            // the player will not be on Playing state
            res.status(400).send({msg: 
                "You cannot end turn since you are not currently on your turn"});
        }else {
            let result = await Play.endTurn(req.game,parseInt(req.params.cardId));
            res.status(result.status).send(result.result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/cards", auth.verifyAuth,async function(req, res, next) {
    try {
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game, no cards available"});
        } else {
            
            await Play.getCards(req.game.player.userId,req.game,(result)=>{
                res.status(200).send(result);

            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


});

router.get("/cardsdata", auth.verifyAuth,async function(req, res, next) {
    try {
      let result = await Play.getGameCards();
      res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


});

router.get("/battle", auth.verifyAuth,async function(req, res, next) {
    try {
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game, no cards available"});
        } else {
            
           let result = await Play.getBattleCards(req.game);
           res.status(200).send(result);

        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


});

router.get("/board", auth.verifyAuth,async function(req, res, next) {
    try {
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game, no cards available"});
        } else {
            let battleRes = await Play.getBattleCards(req.game);
            let handRes = await Play.getHandCards(req.game,req.game.player);
            res.status(200).json({hand:handRes[0],battle:battleRes[0]});
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


});

router.get("/matchstatus", auth.verifyAuth,async function(req, res, next) {
    try {
        if (!req.game) {
            res.status(400).send({msg:"You are not at a game"});
        } else {
            
            await Play.getMatchStatus(req.game);
            res.status(200).send({state:"success"});

        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


});

module.exports = router;