import inputHandler from "./input";

export const drawStatusText = (context: CanvasRenderingContext2D, input: inputHandler) => {
    context.font = "30px Helvetica";
    context.fillText("Last Input: " + input.lastKey, 20, 40)
}