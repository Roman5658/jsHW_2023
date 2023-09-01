// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(str.map(value => value.length))


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
    .map(arr => arr.toUpperCase())
console.log(arr)



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arr1 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
    .map(arr1 => arr1.toLowerCase())
console.log(arr1)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   '

console.log(str1.trim())

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';

let str2 = 'Ревуть воли як ясла повні';
console.log(str2.split(' '))
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr2 = [10,8,-7,55,987,-1011,0,1050,0]
console.log(arr2.map((numbers) => numbers.toString()))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.


function sortNums(direction) {
    let nums = [11, 21, 3];

    if (direction === 'descending') {
         nums.sort((a, b) => b - a);
    } else {
         nums.sort((a, b) => a - b);
    }

    console.log(nums);
}

sortNums('ascending');
sortNums('descending');

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let arr4 = coursesAndDurationArray.sort((s1, s2) => s2.monthDuration - s1.monthDuration)
console.log(arr4)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let arr5 = coursesAndDurationArray.filter((item) => item.monthDuration > 5)
console.log(arr5)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let arr6 = coursesAndDurationArray.map((item, index) => ({ id: index + 1, ...item}))
console.log(arr6)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)


function createDeck() {
    const deck = [];
    const suits = ['♥️', '♦️','♠️', '♣️'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    for (const suit of suits) {
        for (const value of values) {
            let color;

            if (suit === '♥️' || suit === '♦️') {
                color = 'red';
            } else {
                color = 'black';
            }

            deck.push({ suit, value, color });
        }
    }

    return deck;
}

const deck = createDeck();
console.log(deck);



// - знайти піковий туз

const aceOfSpades = deck.find(card => card.suit === '♠️' && card.value === 'ace');
console.log(aceOfSpades)
// - всі шістки
const aceofnumbers = deck.filter((card) => card.value === '6')
console.log(aceofnumbers)
// - всі червоні карти

const aceColor = deck.filter((card) => card.color === 'red')
console.log(aceColor)

// - всі буби

const diamond = deck.filter((card) => card.suit === '♦️')
console.log(diamond)

// - всі трефи від 9 та більше

const tref = deck.filter(card => card.suit === '♣️' && (card.value) > ('8'));
console.log(tref)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const arrs = deck.reduce((accum, card) => {
    switch (card.suit) {
        case '♠️':
            accum.spades.push(card);
            break;
        case '♦️':
            accum.diamonds.push(card);
            break;
        case '♥️':
            accum.hearts.push(card);
            break;
        case '♣️':
            accum.clubs.push(card);
            break;
        default:
            break;
    }
    return accum;
}, {spades: [], diamonds: [], hearts: [], clubs: [],
});

console.log(arrs);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass

let arr7 = coursesArray.filter(course => course.modules.includes('sass'));
console.log(arr7)

// --написати пошук всіх об'єктів, в який в modules є docker

let arr8 = coursesArray.filter((course) => course.modules.includes('docker'))
console.log(arr8)
