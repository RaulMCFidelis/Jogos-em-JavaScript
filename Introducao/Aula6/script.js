// Funções

// f(x) = 2*x
// f(2) = 4
// f(10) = 20

/*function nomedaduncao(parametro1, parametro2){
    corpo da função
    return valorderetorno;
}*/

function htm(horas){
    let resultado = horas * 60;
    return resultado;
}

let a = htm(10);
alert(a);

function estado(vel){
    if(vel == 0){
        alert("parado");
    }
    else if(vel>0 && vel<100){
        alert("andando");
    }
    else if(vel>100){
        alert("correndo");
    }
}

estado(380);

function recebebonus(tempo, vidas){
    if(tempo>1000 && vidas<2){
        alert("Recebe bonus!");
    }
}
recebebonus(2000, 1);

/* Implemente uma função que vai controlar a loja de um jogo, ela recebe o dinheiro que o player possui(número), e o item que o player quer comprar(string), se o player puder fazer a compra a quantidade daquele item recebe +1, caso contrário o programa deve retornar "moedas não suficientes para efetuar a compra", são 3 itens disponíveis: (A função deverá ser executada no console e não no código).
Espada (100 moedas)
Escudo (200 moedas)
Adaga (300 moedas) */

let moedas = 1000;
let qtdespada = 0;
let qtdescudo = 0;
let qtdadaga = 0;

function loja(moedas, item){
    if(item == 'espada' && moedas >= 100){
        moedas -= 100;
        qtdespada += 1;
        console.log("Espada comprada");
    }
    else if(item == 'espada' && moedas < 100){
        console.log("Moedas nao sufientes para efetuar a compra da espada");
    }
    if(item == 'escudo' && moedas >= 200){
        moedas -= 200;
        qtdescudo += 1;
        console.log("Escudo comprado");
    }
    else if(item == 'escudo' && moedas < 200){
        console.log("Moedas nao suficietes para efetuar a compra do escudo");
    }
    if(item == 'adaga' && moedas >= 300){
        moedas -= 300;
        qtdadaga += 1;
        console.log("Adaga comprada");
    }
    else if(item == 'adaga' && moedas < 300){
        console,log("Moedas nao suficientes para efetuar a compra da adaga");
    }
}