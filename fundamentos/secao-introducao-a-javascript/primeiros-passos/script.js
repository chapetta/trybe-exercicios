let nota = 85

if (nota > 80) {
  console.log("parabens, voce foi aprovado")
}
else if (nota < 80 && nota > 60 ) {
  console.log('Você está na nossa lista de espera')
}
else {
  console.log('infelizmente voce reprovou')
}

let currentHour = 8
let message = ''

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
}
else if ( currentHour >= 18 && currentHour <= 22) {
  message = 'Rango da noite, vamos jantar :D'
}
else if (currentHour >= 14 && currentHour <= 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
}
else if (currentHour >= 11 && currentHour <= 14) {
  message = 'Hora do almoço!!!'
}
else {
  message = 'Hmmm, cheiro de café recém-passado'
}

console.log(message)

let statusPessoa = 'reprovado'

switch (statusPessoa) {

  case 'aprovada':
    console.log('Parabéns, você está no grupo de pessoas aprovadas!');

    break

  case 'lista':
    console.log('Você está na nossa lista de espera.')
    break
  case 'reprovado':
    console.log('Infelizmente, você reprovou.')
    break

  default:
    console.log('Informação incorreta.')

}

console.log()