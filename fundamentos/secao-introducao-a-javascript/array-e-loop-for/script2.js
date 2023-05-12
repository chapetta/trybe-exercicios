let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (number of numbers) {
  console.log(number)
}

for (number of numbers) {
  sum += number
}
console.log(`a soma de sum é ${sum}`)

let mediaAritimetica = sum / numbers.length
console.log(`a media aritimetica do array é: ${mediaAritimetica}`)

if (mediaAritimetica > 20) {
  console.log('O valor da média aritmética é maior que 20')
}
else {
  console.log('O valor da média aritmética é menor ou igual a 20')
}
let maiorNum = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= maiorNum) {
      maiorNum = numbers[index]
    }
}
console.log(maiorNum)

let count = 0

for (let index =0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    count += 1
  }
  if (count === 0) {
    console.log('Nenhum valor ímpar encontrado')
  }
}
console.log(`o valor de numeors impares é de ${count}`)