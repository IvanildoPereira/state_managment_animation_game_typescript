export default class Player{
    gameWidth: number;
    gameHeight: number;
    states: any[];
    currentState: any;
    image: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
    frameX: number;
    frameY: number;

    constructor(gameWidth: number, gameHeight: number){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById("dogImage")! as HTMLImageElement;
        this.width = 200; // Width of each tile
        this.height = 181.83; // Height of each tile
        this.x = this.gameWidth/2 - this.width/2; // Putting the player in the middle - horizontally
        this.y = this.gameHeight - this.height; // Putting player down - vertically
        this.frameX = 0;
        this.frameY = 0;
    }

    draw(context: CanvasRenderingContext2D){
        context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}