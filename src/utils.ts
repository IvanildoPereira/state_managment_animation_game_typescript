import inputHandler from "./input";
import Player from "./Player";

export const drawStatusText = (context: CanvasRenderingContext2D, input: inputHandler, player: Player) => {
    context.font = "28px Helvetica";
    context.fillText("Last Input: " + input.lastKey, 20, 40)
    context.fillText("Active state: " + player.currentState.state, 20, 80)
}