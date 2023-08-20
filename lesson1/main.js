// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a1 = 'hello'
console.log(a1)
let a2 = 'owu'
console.log(a2)
let a3 = 'com'
console.log(a3)
let a4 = 'ua'
console.log(a4)
let a5 = 1
console.log(a5)
let a6 = 10
console.log(a6)
let a7 = -999
console.log(a7)
let a8 = 3.14
console.log(a8)
let a10 = 2.7
console.log(a10)
let a11 = 16
console.log(a11)
let a12 = true
console.log(a12)
let a13 = false
console.log(a13)


//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Roman';
let middleName = 'Mykolaevich';
let lastName = 'Pysanyi';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person)

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName1 = prompt('enter your name' )

let lastName1 = prompt('enter your lastName')

let age = +prompt('enter your age')

console.log(`Name: ${firstName1}, Lastname: ${lastName1}, Age: ${age}`)