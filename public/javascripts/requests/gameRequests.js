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

async function fetchCards() {
    try {
       let response = await fetch("/api/plays/cards", {
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
        
        let game = data.game;

        HandInfo.cards = [];
        for (let i = 0;i<game.length;i++) {
            let crdData = CardStorage.getCardById(game[i].crd_id);
            if (crdData != null) {
                let crd = CardInfo.create(crdData);
//            crd.loadAsset(game[i].crd_img);
                HandInfo.cards.push(crd);
            }
            
        }


    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function fetchBattle() {
    try {
       let response = await fetch("/api/plays/battle", {
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
       
        let cards = data.game;

        if (cards.length == 0) {
            HandInfo.battleCard1 = null;
            HandInfo.battleCard2 = null;

        }

        if (cards[0] != undefined) {
            let crd = CardInfo.create(CardStorage.getCardById(cards[0].bat_cardid));
            crd.isFlipped = false;
            HandInfo.battleCard1 = crd;
        }

        if (cards[1] != undefined) {
            let crd = CardInfo.create(CardStorage.getCardById(cards[1].bat_cardid));
            crd.isFlipped = false;
            HandInfo.battleCard2 = crd;
        }

       if (HandInfo.battleCard1 != null && HandInfo.battleCard2 != null) {
            HandInfo.battleCard1.isFlipped = true;
            HandInfo.battleCard2.isFlipped = true;

       }


    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}
