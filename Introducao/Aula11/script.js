// FOR

let populacao = 100;
// Declaraçao

for(let i = 0; i < 100; i++){
    populacao = populacao + populacao*0.05;
}
console.log(populacao);

/* let total = 0;
for(let i = 0; i<100; i++){
    total = total + i;
}
console.log(total);*/

/*Criar um algoritmo que imprima a tablea de conversao de graus Celsius-Fahrenheit para o intervalo desejado pelo usuáro.
O algoritmo deve solicitar ao usuário o limite superior, o limite inferior do intervalo.
Fórmula de converção: C=5*(F-32)/9. */

function fpc(linf, lisup){
    var c
    for(let i = linf; i < lisup; i++){
        c = (5*((i - 32)/9));
        console.log(c);
    }
}
