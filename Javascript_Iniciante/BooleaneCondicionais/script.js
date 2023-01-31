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
