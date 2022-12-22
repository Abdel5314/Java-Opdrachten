var Mycanvas = document.getElementById("MyCanvas") // koppeling nr canvas
var ctx = MyCanvas.getContext("2d"); //ctx is 2d canvas
// variabelen voor beweging
var SpritePositiionX = 10;
var SpritePositiionY = 10;
var speed = 10;
tekenSprite();
document.addEventListener("keydown", (event) => {
    let keypressed = event.key;
    console.log(keypressed);
    switch (keypressed) {
        case "ArrowUp":
        SpritePositiionY -= speed;
        tekenSprite();
        break;
        case "ArrowDown":
            SpritePositiionY += speed;
            tekenSprite();
            break;
        case "ArrowLeft":
            SpritePositiionX -= speed;
                tekenSprite();
                break;    
         case "ArrowRight":
         SpritePositiionX += speed;
                        tekenSprite();
                        break;            
    }

})

function tekenSprite() {
    ctx.clearRect(0,0, MyCanvas.offsetWidth, MyCanvas.offsetHeight);
    ctx.fillStyle = "blue"
    ctx.fillRect(SpritePositiionX, SpritePositiionY, 20, 20);
}