// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let str: string[];
str = ['hello','owu','com', 'ua']
console.log(str)

let num: number[];
num = [1, 10, -999, 123, 3.14, 2.7, 16]
console.log(num)

let bool: boolean[];
bool = [true, false]
console.log(bool)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let obj:  {name: string, firstname: string, middleName: string}
obj = {
    name : 'Roman',
    middleName: 'Nikolajewich',
    firstname: 'Pysanyi'
}
console.log(obj)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a: number = 100;
let b: string = '100';
let c: boolean = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName1: string | null = prompt('Enter your name');

let lastName1: string | null = prompt('Enter your lastName');

let ageInput: string | null = prompt('Enter your age');
let age: number | null = null;

if (ageInput !== null) {
    age = +ageInput;
}

console.log(`Name: ${firstName1}, Lastname: ${lastName1}, Age: ${age}`);






