//Boolean
//Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;

// ----------------------------------------------------------------------------------
// Condicionais If e Else

// Verificar se uma expressão é verdadeira com if,
//caso contrário o else será ativado.
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else

// ----------------------------------------------------------------------------------
//Condicionais Else If
//Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

// ----------------------------------------------------------------------------------
//Truthy e Falsy

//Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

//Ex.: Truthy
var nome = "Camila";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

//Ex.: Falsy
var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

// Outros casos de Falsy
//if (false)
//if (0)
//if (NaN)
//if (null)
//if (undefined)
// ou -0
//if (''); // ou "" ou ``

// Casos de Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// ----------------------------------------------------------------------------------
//Operador Lógico de Negação !

//O operador !, nega uma operação booleana. Ou seja, !true é igual a false

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

// Truthy
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!''); // false

//obs: Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// ----------------------------------------------------------------------------------
//Operadores de comparação

//Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
