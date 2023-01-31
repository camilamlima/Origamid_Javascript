// 7 tipos de Dados
// Todos são primitivos exceto os objetos.
// Primitivos são dados imutáveis.

var nome = "André"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

var sobrenome = "Lima";
var nomeCompleto = nome + sobrenome;

var gols = 1000;
var frase = "Romario fez " + gols + " gols";

//Template String
var gols = 2000;
var frase2 = `Romario fez ${gols} gols`;
var frase3 = `Romario fez ${gols * 3} gols`;
