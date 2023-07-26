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


    if (cards!=undefined){

    
    // No cards are in battle
    if (cards.length == 0) {
        HandInfo.battleCard1 = null;
        HandInfo.battleCard2 = null;

    }

    //Draw the first card on the array
    if (cards[0] != undefined) {
        let crd = CardInfo.create(CardStorage.getCardById(cards[0].bat_cardid));
        crd.isFlipped = false;
        HandInfo.battleCard1 = crd;
    }

    //Draw the second card
    if (cards[1] != undefined) {
        let crd = CardInfo.create(CardStorage.getCardById(cards[1].bat_cardid));
        crd.isFlipped = false;
        HandInfo.battleCard2 = crd;
    }

    //flips both carsds when both are played
   if (HandInfo.battleCard1 != null && HandInfo.battleCard2 != null) {
        HandInfo.battleCard1.isFlipped = true;
        HandInfo.battleCard2.isFlipped = true;

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
           HandInfo.cards.push(crd);
       }
       
   }
    }
}