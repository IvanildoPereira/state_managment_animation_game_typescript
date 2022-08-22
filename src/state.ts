import Player from "./Player";

export enum states{
    STADING_LEFT =  0,
    STADING_RIGHT = 1,
    SITTING_LEFT = 2,
    SITTING_RIGHT = 3,
    RUNNING_LEFT = 4,
    RUNNING_RIGHT = 5
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
    }

    handleInput(input: string): void {
        if(input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_LEFT);
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
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
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
    }

    handleInput(input: string): void {
        if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if(input === "RELEASE right") this.player.setState(states.STADING_RIGHT);
        else if(input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
    }
}