import Player from "./Player";

export enum states{
    STADING_LEFT =  0,
    STADING_RIGHT = 1,
}

class State{
    state: string;

    constructor(state: string){
        this.state = state;
    }
}

export interface IAnimate{
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
        if(input === "PRESS right") this.player.setState(states.STADING_RIGHT);
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
        if(input === "PRESS left") this.player.setState(states.STADING_LEFT);
    }
}