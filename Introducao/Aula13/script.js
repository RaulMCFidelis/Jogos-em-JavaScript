// Operações com Arrays (while, for, forEach)

let notas = [40, 20, 50, 43, 56, 22, 34, 43, 44];

console.log("Notas antes da correcao: ", notas);

let i = 0; /*Fazendo com o for: for(let i = 0; i < notas.length; i++){
    notas[i] += 20;
}*/
while(i < notas.length){
    notas[i] += 20
    i++
}

/* Usando forEach: notas.forEach(function(entry, index, scores){
    notas[index] += 20
}) */

console.log("Notas depois da correcao: ", notas);

/* Suponha que em um jogo de RPG, o seu inventário é um array com 4 posições, e uma determinada poção é
armazenada no inventário como o número1, sua missão é criar um programa que percorra o seu array inventário
em busca do número1, se encontar o número 1, deverá mostra na tela: "Poção encontrada!" */

inventario = [0, 0, 0, 1]

for(let i=0; i<inventario.length; i++){
    if(inventario[i] == 1){
        alert("Pocao encontrada!")
    }
}

