window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // variáveis
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    //Chamada da função jogo a cada 100 milisegundos
    setInterval(jogo, 100)

    //Controles
    document.addEventListener("keydown", function(e){
        switch(e.keyCode){
            //Seta direita = 39
            case 39:
                velX = 1;
                velY = 0;
                break;
            //seta esquerda = 37
            case 37:
                velX = -1;
                velY = 0;
                break;
            //seta cima = 38
            case 38:
                velX = 0;
                velY = -1;
                break;
            //seta baixo = 40
            case 40:
                velX = 0;
                velY = 1;
                break;
        }
    })

}

function jogo(){
    //Configuração da tela
    //Cores htmlcolorcodes.com
    ctx.fillStyle = "#2980B9"

    //Distancia da borada h, distancia da borda vertical, largura, altura
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //Deskicamento da cobra
    positionX += velX;
    positionY += velY;

    //Espelhamento
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})

    //Configurar a cobra
    ctx.fillStyle = "#00f102";
    for(let i=0; i<snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
    }

    //Apagando
    while(snake.length > tam){
        snake.shift();
    }
}