class CardData {
    card_id;
    card_num;
    card_type;
    card_img;


    constructor(id,num) {
        this.card_id = id;
        this.card_num = num;
    }

    loadAsset(img) {
        this.card_img = loadImage(img);
    }
}