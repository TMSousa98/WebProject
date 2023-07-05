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

    x = 0;
    y = 0;

    isFlipped = true;

    constructor(cardid,cardnum,cardtype) {
        this.cardid = cardid;
        this.cardnum = cardnum;

    }

    static create(crdData) 
    {
        return new CardInfo(crdData.card_id,crdData.card_num,crdData.card_img);
    }

    draw(){
        fill(180);
        rect(this.x, this.y,this.cardwidth,this.cardheight);
       // rect(GameInfo.width-250, GameInfo.height-150, 100, 100);
        if (this.isFlipped) {
            if (this.cardimg != null) {
                image(this.cardimg,this.x,this.y,this.cardwidth,this.cardheight);
            }
        }
    }

    loadAsset(cardlink) {
        this.cardimg = loadImage(cardlink)
        console.log("loading img "+this.cardimg);
    }

}