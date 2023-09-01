// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
var str;
str = ['hello', 'owu', 'com', 'ua'];
console.log(str);
var num;
num = [1, 10, -999, 123, 3.14, 2.7, 16];
console.log(num);
var bool;
bool = [true, false];
console.log(bool);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var obj;
obj = {
    name: 'Roman',
    middleName: 'Nikolajewich',
    firstname: 'Pysanyi'
};
console.log(obj);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
var a = 100;
var b = '100';
var c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var firstName1 = prompt('Enter your name');
var lastName1 = prompt('Enter your lastName');
var ageInput = prompt('Enter your age');
var age = null;
if (ageInput !== null) {
    age = +ageInput;
}
console.log("Name: ".concat(firstName1, ", Lastname: ").concat(lastName1, ", Age: ").concat(age));
