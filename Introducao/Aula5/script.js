//Lógica Booleana

// ! NÃO

let magico = !true;

if(magico){
    alert("Magico!");
}
else{
    alert("Nao e magico!");
}

// && E

let pontos = 1000;
let horasjogo = 3;

if(pontos == 100 && horasjogo>2){
    alert("Toma Bonus!");
}
else{
    alert("Nao recebe bonus");
}
// 1 * 1 = 1
// 1 * 0 = 0

// || OU

let vidas = 3;

if(pontos<1000 || vidas<2){
    alert("Toma bonus!");
}

// 0 + 1 = 1
// 0 + 0 = 0
// 1 + 0 = 1
// 1 + 1 = 1

/* Crie um sistema que dará ao player diferentes tipos de chaves, o programa deverá emitir um alerta com qual 
chave o player ganhará:
Se ele tem 3 vidas e mais de 1000 pontos = chave azul
Se ele tem menos de 3 vidas ou menos de 1000 pontos = chave verde
Se ele tem 1000 pontos e não é mágico = chave laranja */

/* let vidas = 2;
let pontos = 1000;
let magico = true;

if(vidas>3 && pontos<1000){
    alert("azul");
}
if(vidas<3 || pontos<1000){
    alert("verde");
}
if(pontos == 1000 && magico == false){
    alert("laranja");
}
*/