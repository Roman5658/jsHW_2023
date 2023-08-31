// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let triangle = (a, b) => a * b

console.log(triangle(2, 10))
console.log(triangle(10, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let radius = (r) => Math.PI *  r * r

console.log(radius(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let a1 = (h, r) => Math.PI * 2 * h * r

console.log(a1(3, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [123, 'gtr', 25, 'fkjgk']

let array = (arr) => {
    for (let item of arr){
        console.log(`item: ${item}`)
    }
}

array(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let foo = (text, esad) => {
    document.write(`<${esad}>${text}</${esad}>`)
}

foo('Hello', 'h1')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul1 =(text) => {
    document.write(`
<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
</ul>
    `);
};
ul1('KUKU')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul2 = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
       document.write(`<li>${text}</li>`)
        
    }
    document.write(`</ul>`)
}

ul2('Hello', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr2 = [123,'hhh',true,333]

let foo1 = (arr3) => {
    document.write(`<ul>`)
    for (let item of arr3){
        document.write(`<li>${item}</li>`)

        
    }
    document.write(`</ul>`)
}

foo1(arr2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

let users1 = (arr) => {
    for (let users of arr){
        document.write(`<div>id: ${users.id} - name: ${users.name} - age: ${users.age}</div>`)
    }
}
users1(users)

// - створити функцію яка повертає найменьше число з масиву

let numbers = [654, 678, 567, 25, 365];

let arrnumbers = (arr) => {
    let result = arr [0];
    for (let i = 1; i < arr.length; i++) {
        if (result > arr [i]) {
            result = arr[i];
        }

    }
    return result;
}

console.log(arrnumbers(numbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum =(arr) => {
    let result = 0;
    for (let number of arr){
        result += number;
    }
    return result;
}

console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let value = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = value;
    return arr;
}

console.log(swap([11,22,33,44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency)
            return sumUAH / item.value;
    }

}
let result = exchange(
    10000,
    [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
    'USD'

)
console.log(result)