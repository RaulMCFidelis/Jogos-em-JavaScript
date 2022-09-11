document.addEventListener('DOMContentLoaded', () => {

    //Carregamento dos cards
    const cardArray = [
    {
        name: 'ganhou',
        img: 'images/ganhou.png'
    },
    {
        name: 'ganhou',
        img: 'images/ganhou.png'
    },
    {
        name: 'direita',
        img: 'images/direita.png'
    },
    {
        name: 'direita',
        img: 'images/direita.png'
    },
    {
        name: 'tras',
        img: 'images/tras.png'
    },
    {
        name: 'tras',
        img: 'images/tras.png'
    },
    {
        name: 'correndo',
        img: 'images/correndo.png'
    },
    {
        name: 'correndo',
        img: 'images/correndo.png'
    },
    {
        name: 'pulo',
        img: 'images/pulo.png'
    }, 
    {
        name: 'pulo',
        img: 'images/pulo.png'
    },
    {
        name: 'esquerda',
        img: 'images/esquerda.png'
    },
    {
        name: 'esquerda',
        img: 'images/esquerda.png'
    }
       
    ]

    const grid = document.querySelector('.grid')

    //Criando a tela
    function createBoard(){
        for(let i=0; i<cardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('data-id',i)
            //card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()


})