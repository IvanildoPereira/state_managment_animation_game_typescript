import { FallingLeft, FallingRight, IAnimate, JumpingLeft, JumpingRight, RunningLeft, RunningRight, SittingLeft, SittingRight, StandingLeft, StandingRight } from "./state";

export default class Player{
    gameWidth: number;
    gameHeight: number;
    states: IAnimate[];
    currentState: IAnimate;
    image: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
    frameX: number;
    frameY: number;
    speed: number;
    maxSpeed: number;
    vy: number;
    weight: number;
    maxFrame: number;
    fps: number;
    frameTimer: number;
    frameInterval: number;

    constructor(gameWidth: number, gameHeight: number){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [
            new StandingLeft(this), 
            new StandingRight(this), 
            new SittingLeft(this), 
            new SittingRight(this),
            new RunningLeft(this),
            new RunningRight(this),
            new JumpingLeft(this),
            new JumpingRight(this),
            new FallingLeft(this),
            new FallingRight(this)
        ];
        this.currentState = this.states[1];
        this.image = document.getElementById("dogImage")! as HTMLImageElement;
        this.width = 200; // Width of each tile
        this.height = 181.83; // Height of each tile
        this.x = this.gameWidth/2 - this.width/2; // Putting the player in the middle - horizontally
        this.y = this.gameHeight - this.height; // Putting player down - vertically
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.vy = 0;
        this.weight = 1.5;
        this.maxFrame = 6;
        this.fps = 30;
        this.frameTimer = 0;
        this.frameInterval = 1000/this.fps;
    }

    draw(context: CanvasRenderingContext2D, deltaTime: number){
        if(this.frameTimer > this.frameInterval){
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0;
            this.frameTimer = 0;
        } else{
            this.frameTimer += deltaTime;
        }
        
        context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update(input: string){
        this.currentState.handleInput(input)
        // Horizontal Movement
        this.x += this.speed;
        if(this.x <=0) this.x = 0;
        else if(this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width; 

        // Vertical movement
        this.y += this.vy;
        if(!this.onGround()){
            this.vy += this.weight;
        } else{
            this.vy = 0;
        }

        if(this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height // prevent to player moving below ground level

    }

    setState(state: number){
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    onGround(): boolean{
        return this.y >= this.gameHeight -this.height;
    }
}