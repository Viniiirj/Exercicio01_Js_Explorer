let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt("Digite o segundo número"))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if(rest = 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
}
if(numberOne == numberTwo) {
  alert("Os dois números inseridos são iguais")
} else {
  alert("Os dois números inseridos são diferentes")
}