//tipos de dados//


//Todos são primituvos exceto os objetos.
var nome = "João" // string
var idade = 16 // number
var verdadeiroOuFalso = true // Boolean
var time; // Underfined
var comida = null // null
var novoObjeto = {} // Objeto

//objetos
const Alunos = {
    NomeDoAluno: 'Erick',
    IdadeDoAluno: 16,
    TimeDoAluno: false,
}

    console.log(Alunos.NomeDoAluno)

//verificar os tipos de dados
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof verdadeiroOuFalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

//Você pode somar string e assim concatenar as palavras

var nome2 = "Matheus"
var sobrenome = "Vaz"
var nomeCompleto = nome2 + " " + sobrenome;
console.log(nomeCompleto)

//Você pode somar numeros com strings, o resultado final será sempre uma String



var gols = 1000;
var frase = 'Pelé fez ' + gols + ' gols'
console.log(frase)

//template String
var golacos = 1000;
var frase2 = `Matheus Vaz fez mais de $(golacos) gols`
console.log(frase2);

var nome = "julius"
console.log(nome);

var empregos = 2;
var frase = "Julius tem 2 " +'empregos'
console.log(frase);

var idade = "17"
console.log(idade);

var nome = "Maciel"
var sobrenome = "Souza"
var nomecompleto = nome + " " + sobrenome
console.log(nomecompleto);

var frase = "it s time"
console.log(frase);

console.log(typeof nome);

//var numero = prompt("Digite um valor: ");
//console.log(numero)

//Faça um programa que peça dois numeros para o usuârio. imprima a soma desses dois numeros.

//criar dois prompt  dentro de variaveis

let x = parseInt(prompt("Digite o 1º valor: "));
let y = parseInt(prompt("Digite o 2º valor: "));

//somar os resultados
let soma = x + y
 console.log(soma)