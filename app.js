let playerPaddle=document.getElementById("playerPaddle");
let computerPaddle=document.getElementById("computerPaddle");
let ball=document.getElementById("ball");

//movement
let up=false;
let down=false;

//adding event listener
document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

function keyDownHandler(e){//pressed key
    if(e.key=="ArrowDown"){
        down=true;

    }
    else if(e.key=="ArrowUp"){
        up=true;

    }
}

function keyUpHandler(e){//released key
    if(e.key=="ArrowDown"){
        down=false;

    }
    else if(e.key=="ArrowUp"){
        up=false;

    }
}

//ball
let Vx=-2;
let Vy=-3;
let V=Math.sqrt(Vx*Vx + Vy*Vy);

function reset(){
    ball.style.left="50%";
    ball.style.top="50%";
    Vx=-2;
    Vy=-3;
    V=Math.sqrt(Vx*Vx + Vy*Vy);


}


//paddle function
//when up==true paddle moves upwards when down==true
//paddle moves downwards

function gameLoop(){

    if(ball.offsetLeft<0){
        reset();
    }

    if(ball.offsetLeft>375){
        reset();
    }

    if(ball.offsetTop<0){
        Vy=-Vy;
    }
    if(ball.offsetTop>635){
        Vy=-Vy;
    }

    ball.style.left=ball.offsetLeft + Vx+ "px";
    ball.style.top=ball.offsetTop + Vy + "px";


    if(up==true && playerPaddle.offsetTop>50){
            playerPaddle.style.top=playerPaddle.offsetTop-5+"px";
    }
    if(down==true && playerPaddle.offsetTop<590){
        playerPaddle.style.top=playerPaddle.offsetTop+5+"px";


    }

    requestAnimationFrame(gameLoop);
}

gameLoop();