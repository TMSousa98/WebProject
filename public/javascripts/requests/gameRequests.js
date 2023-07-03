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

        console.log(data);
        
        let game = data.game;

        HandInfo.cards = [];
        for (let i = 0;i<game.length;i++) {
            console.log(game[i].crd_id)
            let crd = new CardInfo(game[i].crd_id,game[i].crd_type,game[i].crd_value);
          //  crd.loadAsset(game[i].crd_img);
            HandInfo.cards.push(crd);
            
        }


    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}
