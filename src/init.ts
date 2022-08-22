import inputHandler from "./input";
import Player from "./Player";

window.addEventListener('load', () =>{
    const loading = document.getElementById('loading')!;
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    
    const input = new inputHandler();
    

    const animate = () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean canvas between each frames
        player.draw(ctx);
        requestAnimationFrame(animate)
    }

    animate();
})