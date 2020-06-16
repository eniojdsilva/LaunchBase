/*
OPERADORES DE COMPARAÇÃO

>       Maior
<       Menor
>=      Maior igual a 
<=      Menor igual a
==      Igual a 
===     Igual e do mesmo tipo
!=      Diferente de 
!==     Diferente, inclusive do tipo

===================================================

OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.
    ! "NÃO" Nega uma condição

*/

console.log(5 > 4) // true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true

console.log( 4 == "4") // true, olhando apenas o valor então a resposta é true
console.log(4 === "4") // false, Verificando se é igual ou mesmo tipo, false pois temos tipo number e string
console.log(4 != "5")  // true é diferente
console.log(4 !== "5") // true ele é diferente inclusive do tipo

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 5)) //true
console.log(!(5 < 6 )) //false


// DESAFIO 1

const idade = 18
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos 
// avisar para voltar quando fizer 18 anos

if(!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}