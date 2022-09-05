// Continue e Break

//Break

let itens = 0;
let colidindoitens = true;

while(colidindoitens){
    itens += 1;
    // itens ++
    // itens = itens + 1
    console.log(itens);
    if(itens >= 10){
        break;
    }
}

// Continue

let castigo = true; //false
let colidiu = true;
let moedas = 0;

console.log(moedas);

while(colidiu){
    if(castigo == true){
        continue;
    }

    moedas++;

    if(moedas == 10){
        break;
    }
}

console.log(moedas);

/* Um determinado computador antigo consegue armazenar números até o 9999, sua missão é criar um loop infinito que soma número de 1 em 1, e criar uma condição que interrompa o ciclo caso o número chegue a 9999. */

