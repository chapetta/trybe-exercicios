let cars = ['Saab', 'Volvo', 'BMW'];


for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index])
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index =0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
}

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name)
}

let counter = 0;

while (counter !== 5) {
  counter += 1
}