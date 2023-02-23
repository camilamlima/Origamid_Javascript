// Objetos

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// Propriedades e métodos consistem em nome (chave) e valor

// ----------------------------------------------------------------------------------

// Métodos

// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// ----------------------------------------------------------------------------------

// Métodos

// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

// ----------------------------------------------------------------------------------
// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// ----------------------------------------------------------------------------------

// Criar um Objeto

// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// ----------------------------------------------------------------------------------
// Dot Notation Get

// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'

// ----------------------------------------------------------------------------------
// Dot Notation Set

// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'

// ----------------------------------------------------------------------------------
// Adicionar Propriedades e Métodos

// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";

// ----------------------------------------------------------------------------------
// Palavra-chave this

// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60

// this irá retornar o próprio objeto

// ----------------------------------------------------------------------------------
// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false

// hasOwnProperty é um método de Object
