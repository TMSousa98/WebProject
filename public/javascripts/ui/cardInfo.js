const Cardtype = {

    solar: "solar",
    vortex: "vortex",
    nebula: "nebula",
    stardust: "stardust"
}


class CardInfo {
    cardnum = 0;
    cardtype = "";
    cardimg = null;
    cardlink = "";
    static cardheight = 150;
    static cardwidth = 100;

    draw(x){
        fill(180);

        rect(this.getCardX(x), this.getCardY(),CardInfo.cardwidth,CardInfo.cardheight);
       // rect(GameInfo.width-250, GameInfo.height-150, 100, 100);
        
    }

    clickcard(){
        
    }


    getCardX(x) {
        let cardOffset = 10;

        return (GameInfo.width-250)-((CardInfo.cardwidth + cardOffset)*x);
    }

    getCardY() {
        return GameInfo.height-150;
    }

}