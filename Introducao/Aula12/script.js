// Arrays
let arrayvazio = [];

let estado = ['ganhou', 'andando', 'correndo', 'parado'];
let noyas = [10, 20, 30, 40];
let bl = [true, true, false];

console.log("Array: ", estado);
console.log("Tamanho: ", estado.length); //Tamanho do array

console.log("Primeiro elemento: ", estado[0]);
console.log("Ultimo elemento: ", estado[estado.length - 1]);

estado[estado.length - 1] = 'andando';
console.log("Ultimo elemento novo: ", estado[estado.length - 1]);

estado.push('elemento novo'); //adicionando um novo elemento no fim do array
console.log(estado);

estado.pop(); //deleta o último elemento do array
console.log(estado);

/* Crie um array chamado mapa, que armazenará as vilas de um jogo RPG.
a) Adicione nele as seguintes vilas: Fire, State, PeopleFear, JF.
b) Adicione mais duas ao final da lista: Jungle, Orquidea.
c) Remova a vila Orquidea.
d) Altere o nome da vila 'Fire' para 'CaveMens'. */

let mapa = ['Fire', 'State', 'PeopleFear', 'JF'];
console.log(mapa);

mapa.push('Jungle');
mapa.push('Orquidea');
console.log(mapa);

mapa.pop();
console.log(mapa);

mapa[0] = 'CaveMens';
console.log(mapa);
