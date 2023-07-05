class CardData {
    card_id;
    card_num;
    card_type;
    card_img;


    constructor(id,num,img) {
        this.card_id = id;
        this.card_num = num;
        this.card_img = img;
    }

    loadAsset(img) {
        console.log("loading img "+img);
        this.card_img = loadImage(img);
    }
}