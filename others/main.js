// Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

function add (a, b) {
    return a + b
}
let add1 = add (5, 5)
console.log(add1)

// Попробуйте создать функцию, которая принимает два аргумента (числа) и возвращает их разность с помощью оператора -.

function add2 (a, b) {
    return a - b
}
let add3 = add2 (7, 3)
console.log(add3)

// Вам нужно написать функцию, которая умножает два числа (аргументы) с использованием оператора *.

function add4 (a, b) {
    return a * b
}
let add5 = add4 (7, 3)
console.log(add5)


// Создайте функцию, которая делит одно число на другое, используя оператор /.

function add6 (a, b) {
    return a * b
}
let add7 = add6 (7, 3)
console.log(add7)

// Создайте простой калькулятор, который принимает два числа и оператор (+, -, *, /) в качестве аргументов и выполняет соответствующую операцию.

function calc (a, b) {
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let divisionResult = a / b;

    console.log(`sum: ${sum}`);
    console.log(`difference ${difference}`)
    console.log(`product ${product}`)
    console.log(`divisionResult ${divisionResult}`)

    return sum
}
let calc1 = calc (25, 56)
console.log(calc1)

// Напишите функцию, которая принимает длину и ширину прямоугольника и возвращает его площадь.

function rectangle (a, b, c, d) {
    let sum = a + b;
    let sum1 = c + d;

    console.log(`sum ${sum}`)
    console.log(`sum1 ${sum1}`)
    return sum * sum1;

}
let rec1 = rectangle (10,10, 5, 5)
console.log(rec1)

// Создайте функцию, которая принимает число и проверяет, является ли оно четным. Функция должна вернуть true для четных чисел и false для нечетных.

function isEven(number) {
    return number % 2 === 0;
}

// Примеры вызова функции
console.log(isEven(4)); // Выведет: true, так как 4 - четное число
console.log(isEven(7)); // Выведет: false, так как 7 - нечетное число

// 8. Генератор случайных чисел:
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Примеры вызова функции
let randomNum = getRandomNumber(1, 100); // Генерирует случайное число от 1 до 100
console.log(randomNum);

// 9. Подсчет факториала:
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Примеры вызова функции
console.log(factorial(5)); // Выведет: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Выведет: 1 (факториал 0 по определению равен 1)

// 10. Перевод градусов Цельсия в градусы Фаренгейта:
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Примеры вызова функции
console.log(celsiusToFahrenheit(25)); // Выведет: 77 (градусы Фаренгейта)
console.log(celsiusToFahrenheit(0));  // Выведет: 32 (градусы Фаренгейта)

// Поиск максимального числа: Используйте цикл или метод массива reduce, чтобы найти максимальное число в массиве.


function sum (a, b) {
    return a + b;
}

const sum1 = sum(10, 10);
console.log(sum1)

function sum2 (a, b) {
    return a + b;
}

const sum3 = sum2(10, 10);
console.log(sum3)


// Создайте массив fruits, содержащий несколько названий фруктов.

    // Напишите функцию getFirstElement, которая принимает массив в качестве аргумента и возвращает первый элемент этого массива.

    // Напишите функцию getLastElement, которая принимает массив в качестве аргумента и возвращает последний элемент этого массива.


const fruits = ['banana', 'apple', 'fig', 'date', 'kiwi'];
function getFirstElement (fruits) {
    return fruits;
}
const fruits1 = getFirstElement(fruits[0])
console.log(fruits1)

const fruits2 = ['banana', 'apple', 'fig', 'date', 'kiwi'];
function getLastElement (fruits) {
    return fruits;
}
const fruits3 = getLastElement(fruits2[4])
console.log(fruits3)









