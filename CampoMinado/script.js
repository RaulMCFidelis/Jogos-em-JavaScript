/* Campo Minado:
a) Crie uma matriz bidimensional 4x4 que armazenará o tabuleiro do jogo, espaço em branco será representado pelo 0 e bomba será 1, distribua 0 e 1 pelas posições da matriz.
b) Utilize variáveis para armazenar algumas posições específicas da matriz, a sua escolha.
Exemplo jogador1 = campo[0][0].
c) Armazene todas as jogadas em um array chamado jogo.
d) Utilize um loop a sua escolha para percorrer todas as posições do array jogo, se pelo menos uma das posições tiver uma bomba, a mensagem "você predeu" deverá ser exibida, se todo o vetor for percorrido e nenhuma bomba for encontrada, a mensagem "você vendeu" deverá ser exibida como alerta. */

cm = [[0,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,1,1]]
console.log(cm)

let jogada1 = cm[0][0]
console.log(cm[0][0])

let jogada2 = cm[1][0]

let jogada3 = cm[0][1]

jogadas = []
jogadas.push(jogada1)
jogadas.push(jogada2)
jogadas.push(jogada3)
console.log(jogadas)

for(let i=0; i<jogadas.length; i++){
    if(jogadas[i] == 1){
        alert("Voce perdeu!")
    }
    else if(i == jogadas.length - 1){
        alert("Voce venceu!")
    }
}