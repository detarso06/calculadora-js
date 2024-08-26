let number1 = 10 
let number2 = 5
let operador = "+"
let adicao = 0
let subtraçao = 0
let multi = 0
let div = 0 
if (number2 === 0) {
    console.log("Número invalido.")
}
 else {
   div = number1 / number2
 }
switch (operador) {
    case '+':
        adicao = number1 + number2
        console.log('Adição: ', adicao)
     break
    case '-':
        subtraçao = number1 - number2
        console.log('Subtração: ', subtraçao)
     break
    case '*':
        multi = number1 * number2
        console.log('Multiplicação: ', multi)
     break
    case '/':
    if (number2 === 0) {
        console.log("Não é possível fazer a divisão")
    } else {
        div = number1 / number2
        console.log('Divisão: ',div)
    }
    break
    default:
        console.log("Operador inválido")
}















