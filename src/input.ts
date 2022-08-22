export default class inputHandler{
    lastKey: string;

    constructor(){
        this.lastKey = ""
        window.addEventListener('keydown', (event: KeyboardEvent) =>{
            switch(event.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left"
                    break;
                case "ArrowRight":
                    this.lastKey = "PRESS right"
                    break;
            }
        })

        window.addEventListener('keyup', (event: KeyboardEvent) =>{
            switch(event.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left"
                    break;
                case "ArrowRight":
                    this.lastKey = "RELEASE right"
                    break;
            }
        })
    }
}