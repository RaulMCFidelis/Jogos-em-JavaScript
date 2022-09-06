// Arrays bidimensionais

let estado = [['parado', 'pulo'], //primeira linha
                ['esquerda', 'direita']]; //segunda linha

console.log(estado);

//Acessando a posição pulo
console.log(estado[0][1]);

//Acessando a posição direita
console.log(estado[1][1]);

estado[0][0] = "qualquer coisa";
console.log(estado);

estado.pop(); //exclui a linha inteira "1"
console.log(estado);

estado.push('Raul', 'Maria'); //adiciona uma nova linha (Maria vira uma nova linha (2))
console.log(estado);
