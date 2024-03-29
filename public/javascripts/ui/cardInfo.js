
class CardInfo {
    cardid = 0
    cardnum = 0;
    cardtype = "";
    cardimg = null;
    static cardheight = 150;
    static cardwidth = 100;
    highlight = "green";
    static clicksound = "mouse click"

    isSelected = false;

    x = 0;
    y = 0;

    isFlipped = true;

    static cardbackimg;

    constructor(cardid,cardnum,cardtype) {
        this.cardid = cardid;
        this.cardnum = cardnum;

    }

    static create(crdData) 
    {
        let crd = new CardInfo(crdData.card_id,crdData.card_num,null);
        crd.cardimg = crdData.card_img;
        return crd;
    }

    draw(){
        fill(180);
        rect(this.x, this.y,CardInfo.cardwidth,CardInfo.cardheight);
        if (this.isFlipped) {
            if (this.cardimg != null) {
                if (this.isSelected) {
                    tint(this.highlight);
                }
                image(this.cardimg,this.x,this.y,CardInfo.cardwidth,CardInfo.cardheight);
                tint(255);
            }   
        } else {
            image(CardInfo.cardbackimg,this.x,this.y,CardInfo.cardwidth,CardInfo.cardheight);
        }
    }

    loadAsset(cardlink) {
        this.cardimg = loadImage(cardlink)
    }

    onclick() {
        AudioStorage.playSound(CardInfo.clicksound)
    }

}