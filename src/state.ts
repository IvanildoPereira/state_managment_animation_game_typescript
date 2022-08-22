import Player from "./Player";

export enum states{
    STADING_LEFT =  0,
    STADING_RIGHT = 1,
    SITTING_LEFT = 2,
    SITTING_RIGHT = 3,
    RUNNING_LEFT = 4,
    RUNNING_RIGHT = 5,
    JUMPING_LEFT = 6,
    JUMPING_RIGHT = 7,
    FALLING_LEFT = 8,
    FALLING_RIGHT = 9
}

class State{
    state: string;

    constructor(state: string){
        this.state = state;
    }
}

export interface IAnimate{
    state: string;
    player: Player;
    enter(): void;
    handleInput(input: string): void
}

export class StandingLeft extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("STANDING_LEFT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 1;
        this.player.speed = 0;
    }

    handleInput(input: string): void {
        if(input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_LEFT);
        else if(input === "PRESS up") this.player.setState(states.JUMPING_LEFT);
    }
}

export class StandingRight extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("STANDING_RIGHT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 0;
        this.player.speed = 0;
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
        else if(input === "PRESS up") this.player.setState(states.JUMPING_RIGHT);
    }
}

export class SittingLeft extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("SITTING LEFT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 9;
    }

    handleInput(input: string): void {
        if(input === "PRESS right") this.player.setState(states.SITTING_RIGHT);
        //else if(input === "PRESS up") this.player.setState(states.STADING_LEFT);
        else if(input === "RELEASE down") this.player.setState(states.STADING_LEFT);
    }
}

export class SittingRight extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("SITTING RIGHT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 8;
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.SITTING_LEFT);
        //else if(input === "PRESS up") this.player.setState(states.STADING_RIGHT);
        else if(input === "RELEASE down") this.player.setState(states.STADING_RIGHT);
    }
}

export class RunningLeft extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("RUNNING_LEFT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 7;
        this.player.speed = -this.player.maxSpeed;
    }

    handleInput(input: string): void {
        if(input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if(input === "RELEASE left") this.player.setState(states.STADING_LEFT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_LEFT);
    }
}

export class RunningRight extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("RUNNING_RIGHT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 6;
        this.player.speed = this.player.maxSpeed;
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "RELEASE right") this.player.setState(states.STADING_RIGHT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
    }
}

export class JumpingLeft extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("JUMPING LEFT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 3;
        if(this.player.onGround()) this.player.vy -= 40;
        this.player.speed = -this.player.maxSpeed * 0.5;  
    }

    handleInput(input: string): void {
       if(input === "PRESS right") this.player.setState(states.JUMPING_RIGHT);
       else if(this.player.onGround()) this.player.setState(states.STADING_LEFT);
       else if(this.player.vy > 0) this.player.setState(states.FALLING_LEFT);
    }
}

export class JumpingRight extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("JUMPING RIGHT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 2;
        if(this.player.onGround()) this.player.vy -= 40;
        this.player.speed = this.player.maxSpeed * 0.5;  
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.JUMPING_LEFT);
        else if(this.player.onGround()) this.player.setState(states.STADING_RIGHT);
        else if(this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
    }
}

export class FallingLeft extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("FALLING LEFT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 5;
    }

    handleInput(input: string): void {
       if(input === "PRESS right") this.player.setState(states.FALLING_RIGHT);
       else if(this.player.onGround()) this.player.setState(states.STADING_LEFT);
    }
}

export class FallingRight extends State implements IAnimate{
    player: Player;

    constructor(player: Player){
        super("FALLING RIGHT");
        this.player = player;
    }

    enter(): void {
        this.player.frameY = 4;
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.FALLING_LEFT);
        else if(this.player.onGround()) this.player.setState(states.STADING_RIGHT);
    }
}