
let bg;


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
    AudioStorage.loadAudios();
}
function createCard(id,imgLink) {
    crd = new CardInfo();
    crd.cardid = id
    crd.loadAsset(imgLink);
    return crd;
}


async function setup() {
    let canvas = createCanvas(GameInfo.width, GameInfo.height);
    bg = loadImage('./images/board.png');
    canvas.parent('game');
    canvas.position(GameInfo.width/7,GameInfo.height/6);
    // preload  images
    
    await  getGameInfo();
    setInterval(refresh,1000);

    //buttons (create a separated function if they are many)
    GameInfo.endturnButton = createButton('End Turn');
    GameInfo.endturnButton.parent('game');
    GameInfo.endturnButton.position(GameInfo.width-20,GameInfo.height+50);
    GameInfo.endturnButton.mousePressed(endturnAction);
    GameInfo.endturnButton.addClass('game')


    GameInfo.prepareUI();

    GameInfo.loading = false;


    setInterval(()=> {
        fetchBoard();
        fetchMatchStatus();

    },1000)
}

function draw() {
    background(bg);
    if (CardStorage.isLoaded) {
        HandInfo.draw();

    }

    if (GameInfo.loading) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill('black');
    } else if (GameInfo.game.state == "Finished" && GameInfo.scoreWindow) {
        GameInfo.scoreWindow.draw();
    } else  {
        GameInfo.scoreBoard.draw();
    }
    

}

async function mouseClicked() {
    HandInfo.processclick()
  
}