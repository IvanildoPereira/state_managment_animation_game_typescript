import inputHandler from "./input";
import Player from "./Player";
import { drawStatusText } from "./utils";

window.addEventListener('load', () =>{
    const loading = document.getElementById('loading')!;
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    
    const input = new inputHandler();

    let lastTime = 0;
    

    const animate = (timeStamp: number) =>{
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean canvas between each frames
        player.update(input.lastKey)
        player.draw(ctx, deltaTime);
        drawStatusText(ctx, input, player)
        requestAnimationFrame(animate)
    }

    animate(0);
})