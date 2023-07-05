let cards_UpdateTimer = 2;
let current_cards_UpdateTimer = 0;

async function refresh() {
    if (GameInfo.game.player.state == "Waiting") { 
        // Every time we are waiting
        await  getGameInfo();       
        if (GameInfo.game.player.state != "Waiting") {
            // The moment we pass from waiting to play
            GameInfo.prepareUI();
        }
    } 
    // Nothing to do when we are playing since we control all that happens 
    // so no update is needed from the server
}

function preload() {
    CardStorage.loadCards();
}
function createCard(id,imgLink) {
    crd = new CardInfo();
    crd.cardid = id
    crd.loadAsset(imgLink);
    return crd;
}


async function setup() {
    let canvas = createCanvas(GameInfo.width, GameInfo.height);
    canvas.parent('game');
    // preload  images
    
    await  getGameInfo();
    setInterval(refresh,1000);

    //buttons (create a separated function if they are many)
    GameInfo.endturnButton = createButton('End Turn');
    GameInfo.endturnButton.parent('game');
    GameInfo.endturnButton.position(GameInfo.width-150,GameInfo.height-50);
    GameInfo.endturnButton.mousePressed(endturnAction);
    GameInfo.endturnButton.addClass('game')


    GameInfo.prepareUI();
   /* HandInfo.cards.push(createCard(1,"images/nebula.png"))
    HandInfo.cards.push(createCard(2,"images/solar.jpg"))
    HandInfo.cards.push(createCard(3,"images/stardust.png"))*/

    GameInfo.loading = false;
}

function draw() {
    background(220);

    if (CardStorage.isLoaded) {
        HandInfo.draw();
        HandInfo.drawBattle();


        if (current_cards_UpdateTimer <= 0) {
            current_cards_UpdateTimer = cards_UpdateTimer;
            fetchCards();
            fetchBattle();
        } else {
            current_cards_UpdateTimer -= deltaTime;
        }
    }

    if (GameInfo.loading) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill('black');
        text('Loading...', GameInfo.width/2, GameInfo.height/2);
    } else if (GameInfo.game.state == "Finished" && GameInfo.scoreWindow) {
        GameInfo.scoreWindow.draw();
    } else  {
        GameInfo.scoreBoard.draw();
    }
    

}

async function mouseClicked() {
    HandInfo.processclick()
  
}