const Cardtype = {

    solar: "solar",
    vortex: "vortex",
    nebula: "nebula",
    stardust: "stardust"
}


class CardInfo {
    cardid = 0
    cardnum = 0;
    cardtype = "";
    cardimg = null;
    static cardheight = 150;
    static cardwidth = 100;

    constructor(cardid,cardnum,cardtype) {
        this.cardid = cardid;
        this.cardnum = cardnum;

    }

    draw(i){
        fill(180);
        let x = this.getCardX(i)
        let y = this.getCardY()
        
        rect(x, y,CardInfo.cardwidth,CardInfo.cardheight);
       // rect(GameInfo.width-250, GameInfo.height-150, 100, 100);
        if (this.cardimg != null) {
            image(this.cardimg,x,y,CardInfo.cardwidth,CardInfo.cardheight);
        }
    }

    loadAsset(cardlink) {
        this.cardimg = loadImage(cardlink)
    }


    getCardX(x) {
        let cardOffset = 10;

        return (GameInfo.width-250)-((CardInfo.cardwidth + cardOffset)*x);
    }

    getCardY() {
        return GameInfo.height-150;
    }

}