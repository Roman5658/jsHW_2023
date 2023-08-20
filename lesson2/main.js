// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let user = ['Roman', 'Vasya', 'Anya', 'Olga', 'Petya', 'Alina', 'Denis', 'Ira', 'Deniil', 'Robert'

]
console.log(user)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book = {
    title: 'Tenet', pageCount: 111, genre: 'Action',
}
console.log(book)

const book1 = {
    title: 'Sherlock', pageCount: 123, genre: 'Detective',
}
console.log(book1)

const book2 = {
    title: 'Spider-man', pageCount: 345, genre: 'Action',
}
console.log(book2)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books = {
    title: 'book',
    pageCount: 234,
    genre: 'horror',
    author: [
        {name: 'Petro', age: 13},
        {name: 'Stepan', age: 12}
    ]
}
console.log(books)

let books1 = {
    title: 'Other',
    pageCount: 555,
    genre: 'horror',
    author: [
        {name: 'Ivan', age: 65},
        {name: 'Stepan', age: 44}
    ]
}
console.log(books1)

let books2 = {
    title: 'book',
    pageCount: 456,
    genre: 'Action',
    author: [
        {name: 'Galya', age: 55},
        {name: 'Masha', age: 22}
    ]
}
console.log(books2)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Roman', username: 'Lol', password: 123},
    {name: 'Olya', username: 'Kuzmina', password: 122},
    {name: 'Stepan', username: 'Huliaj', password: 444},
    {name: 'Max', username: 'Fedir', password: 'kim34'},
    {name: 'Zina', username: 'Mymra', password: 'mymra123'},
    {name: 'Alex', username: 'Baran', password: 'baran123'},
    {name: 'Alina', username: 'Jakas', password: 123456},
    {name: 'Daun', username: 'Baranovic', password: 12356789},
    {name: 'Vitalij', username: 'HHH', password: 'yjkhh'},
    {name: 'Kim', username: 'Mim', password: '1g2f3'}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3



// let x = 7;
//
// if (x !== 0)
// {
//     console.log('Вірно')
// }
// else if (x === 1){
//     console.log(true)
// }
// else if (x === 0){
//     console.log(false)
// }else if (x === -3){
//     console.log(true)
// }






// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 14;
if (time >= 0 && time < 15)
{
    console.log('первая четверть')
}
else if (time >= 15 && time < 30)
{
    console.log('вторая четверть')
}
else if (time >= 30 && time < 45)
{
    console.log('третья четверть')
}
else if (time >= 45 && time <60){
    console.log('четвертая четверть')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
if (day >= 1 && day < 11)
{
    console.log('1 Decade')}
else if (day >=11 && day < 21)
{
    console.log('2 Decade')}
else if (day >= 21 && day <32)
{
    console.log('3 Decade')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let aWeek = +prompt('Select Day')
switch (aWeek){
    case 1:
        console.log('Работать')
        break;
    case 2:
        console.log('Работать')
        break;
    case 3:
        console.log('Работать')
        break;
    case 4:
        console.log('Работать')
        break
    case 5:
        console.log('Работать')
        break;
    case 6:
        console.log('Спать')
        break;
    case 7:
        console.log('Спать')
        break;
    default:
        console.log('НЕ ТУДАААААА');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let numb1 = 10;
let numb2 = 20;
if (numb1 < numb2){
    console.log(numb2)
}else if (numb1 > numb2){
    console.log(numb1)
}else {
    console.log('введені рівні числа')}


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = ''
if ( x === '' || x === null || x === undefined || x === 1 ){
    x = 'default';
}
console.log(x)

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if ( coursesAndDurationArray [0].monthDuration > 5){
    console.log('Супер')
}
if ( coursesAndDurationArray [1].monthDuration > 5){
    console.log('Супер')
}
if ( coursesAndDurationArray [2].monthDuration > 5){
    console.log('Супер')
}
if ( coursesAndDurationArray [3].monthDuration > 5){
    console.log('Супер')
}
if ( coursesAndDurationArray [4].monthDuration > 5){
    console.log('Супер')
}
if ( coursesAndDurationArray [5].monthDuration > 5){
    console.log('Супер')
}