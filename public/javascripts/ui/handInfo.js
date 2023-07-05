class HandInfo{

    static cards = [];
    //static deck = undefined;


    static selectedCard = null;

    static battleCard1 = null;
    static battleCard2 = null;

    static draw() {
        
        if (this.cards != undefined) {
            for (let i = 0;i<this.cards.length;i++) {
                this.cards[i].x = this.getCardX(i);
                this.cards[i].y = this.getCardY();

                this.cards[i].draw()

            }
        }

    }

    static drawBattle() {
        let cardOffset = CardInfo.cardheight + 10;

        if (this.battleCard1 != null) {
            this.battleCard1.x = this.GetBattleX();
            this.battleCard1.y = this.GetBattleY();
            this.battleCard1.draw();
        } 
        if (this.battleCard2 != null) {
            this.battleCard2.x = this.GetBattleX();
            this.battleCard2.y = this.GetBattleY() + cardOffset;

            this.battleCard2.draw();
        } 
    }

    static GetBattleX(){

        return GameInfo.width-(GameInfo.width/2);
    }

    static GetBattleY(){
         return GameInfo.height-(((GameInfo.height/2))+140);
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
                }
            }
        }
    }

    static getCardX(x) {
        let cardOffset = 10;

        return (GameInfo.width-250)-((CardInfo.cardwidth + cardOffset)*x);
    }

    static getCardY() {
        return GameInfo.height-150;
    }

}