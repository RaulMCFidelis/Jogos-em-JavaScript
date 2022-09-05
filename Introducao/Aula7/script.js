// Objetos
let player = {
    vidas: 3,
    nome: 'Codi',
    pontos: 99,
    vivo: true,
    roupa: {
        cor: 'green',
        tamanho: 'M',
        custo: 100,
        nova: true
    }
};

console.log(player.nome);
console.log(player.roupa.cor);

player.vidas = 4;
console.log(player.vidas);

player.roupa.cor = 'Blue';
console.log(player.roupa.cor);

player.armadura = true;
console.log(player);

delete player.roupa;
console.log(player);

/* Sua missão é criar um game do ripo RPG , para isso você precisa configurar o player com os seguintes atributos:
nome, vidas, pontos, emagico(booleano), espada(booleano) e magia(número).
Este player vai ter um objeto chamado mapa dentro de si, com os atributos: nome, cidades, cidadesvisitadas, objetosencontrados.
Em seguida, crie uma nova propriedade para o player chamada temcalice(booleano) e delete-a. */

/* let player = {
    vidas: 3,
    nome: 'Codi',
    pontos: 99,
    emagico: true,
    espada: true,
    magia: 100,
    mapa: {
        nome: 'Mapa central',
        cidades: [],
        cidadesvisitadas: [],
        objetosencontrados: []
    }
};

player.temcalice = true;

delete player.temcalice; */