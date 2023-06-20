class HandInfo{

    static cards = [];
    static deck = undefined;

    static draw() {

        if (this.cards != undefined) {
            for (let i = 0;i<this.cards.length;i++) {
                this.cards[i].draw(i)
            }
        }

    }

    static processclick() {
        if (this.cards != undefined) {
            for (let i = 0;i<this.cards.length;i++) {

                let x = this.cards[i].getCardX(i)
                let y = this.cards[i].getCardY()
                let cardWidth = CardInfo.cardwidth + x;
                let cardHeight = CardInfo.cardheight + y;

                if (mouseX >= x && mouseY >= y && mouseX <= cardWidth && mouseY <= cardHeight) {
                    this.cards[i].clickcard()
                }
            }
        }
    }

}