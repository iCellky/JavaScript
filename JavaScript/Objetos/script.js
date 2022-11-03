//Objetos
//Conjunto de variaveis e funções, que são chamadas 
//de propriedades e Metodos.


var pessoa = {
    nome: 'Grazil',
    idade: 20,
    profissão: 'Monitora de professor bonitão',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objeto com funções ou metodos

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },

    area: function(lado,altura){
        return lado * altura
    }
}

//Arrays

//É um grupo de valores geralmente relacionados.
//servem para guardarmos diferentes valores em uma unica variavel.

var videoGames = ['ps4', 'Xbox','switch']

console.log(videoGames.length)