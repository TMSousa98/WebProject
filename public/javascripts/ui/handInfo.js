class HandInfo{

    static cards = [];

    static selectedCard = null;

    static battleCard1 = null;
    static battleCard2 = null;

    static trumpCard = null;

    static trumpCardData = null;

    static selectedIndex = null;

    static draw() {
        this.drawHand();
        this.drawBattle();
        this.drawTrump();
       

    }

    static drawHand() {
        if (this.cards != undefined) {
            for (let i = 0;i<this.cards.length;i++) {
                this.cards[i].x = this.getCardX(i);
                this.cards[i].y = this.getCardY();

                this.cards[i].draw()

            }
        }
    }

    static drawBattle() {

        if (this.battleCard1 != null) {
            this.battleCard1.x = this.GetBattleX();
            this.battleCard1.y = this.GetBattleY();
            this.battleCard1.draw();
        } 
        if (this.battleCard2 != null) {
            this.battleCard2.x = this.GetBattleX();
            this.battleCard2.y = this.GetBattleY()+ 170 ;

            this.battleCard2.draw();
        } 
    }

    static drawTrump() {
        if (this.trumpCard != null && this.trumpCardData != null) {
            
            fill(180);
            image(this.trumpCardData.card_img,100,250,CardInfo.cardwidth,CardInfo.cardheight);
            text("Trump",126,240);

            //image()
        }
    }

    static GetBattleX(){

        return GameInfo.width-(GameInfo.width/1.85);
    }

    static GetBattleY(){
         return GameInfo.height-(((GameInfo.height/1.7))+180);
    }



    static processclick() {
        if (this.cards != undefined) {
            for (let i = 0;i<this.cards.length;i++) {

                let x = this.cards[i].x
                let y = this.cards[i].y;
                let cardWidth = CardInfo.cardwidth + x;
                let cardHeight = CardInfo.cardheight + y;

                if (mouseX >= x && mouseY >= y && mouseX <= cardWidth && mouseY <= cardHeight) {
                    this.selectedCard = this.cards[i];
                    this.selectedIndex = i;
                    this.cards[i].onclick();
                }
            }
        }
    }

    static getCardX(x) {
        let cardOffset = 10;

        return (GameInfo.width-539)-((CardInfo.cardwidth + cardOffset)*x);
    }

    static getCardY() {
        return GameInfo.height-180;
    }

}