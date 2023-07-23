class CardStorage {
    static cards = [];

    static isLoaded = false;

    static async loadCards() {

        CardInfo.cardbackimg = loadImage("./images/cardback.png");

        try {
            let response = await fetch("/api/plays/cardsdata", {
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
             let res = game[0]
     
             this.cards = [];
             for (let i = 0;i<res.length;i++) {
                 let crd = new CardData(res[i].crd_id,res[i].crd_value);
                 crd.loadAsset(res[i].crd_img);
                 this.cards.push(crd);
                 
             }
             this.isLoaded = true;
     
         } catch (err) {
             console.log(err);
             return {err: err};
         }
    }

    static getCardById(id) {
        for (let i = 0;i<this.cards.length;i++) {
            let card = this.cards[i];

            if (card != undefined && card != null) {
                if (card.card_id == id) {
                    return card;
                }
            }
        }

        return null;
    }
}