// Métodos

let player = {
    saude: 100,
    felicidade: 50,
    play: function(){
        this.felicidade += 30;
    },
    eat: function(comida){
        if(comida == 'laranja'){
            this.saude += 10;
        }
        if(comida == 'uva'){
            this.saude += 20;
        }
    }
}

// Antes da execução
console.log(player);

// Execução
//player.play();
player.eat('laranja');

// Depois da execução
console.log(player);

/* Crie duas propriedades para o objeto da aula 8:
moedas (inicial = 20)
roupa (inicial = 'não')
Crie um método compraroupa() para comprar uma roupa padrão que custe 20 moedas, se tiver o suficiente em moedas, você compra e a propriedade roupa ficará com o valor 'sim'. Caso contrário, uma mensagem de erro deverá aparecer na tela. */

/* let player = {
    saude: 100,
    felicidade: 50,
    moedas: 20,
    roupa: 'não',
    play: function(){
        this.felicidade += 30;
    },
    eat: function(comida){
        if(comida == 'laranja'){
            this.saude += 10;
        }
        if(comida == 'uva'){
            this.saude += 20;
        }
    },
    compraroupa: function(){
        if(this.moedas >= 20){
            this.moedas -= 20;
            this.roupa = 'sim';
        }
        else if(this.moedas < 20){
            console.log("Moedas insuficientes!");
        }
    }
} 
// Antes da execução
console.log(player);

// Execução
player.compraroupa();
player.compraroupa();

// Depois da execução
console.log(player);

*/

