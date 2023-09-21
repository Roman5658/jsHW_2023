// Функція конструктор для User
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// Створення масиву користувачів
let users = [];

let names = ["Іван", "Марія", "Олександр", "Юлія", "Петро", "Анна", "Олег", "Наталія", "Віталій", "Оксана"];
let surnames = ["Петров", "Іванов", "Сидоров", "Смирнов", "Козлов", "Морозов", "Лисенко", "Коваленко", "Ткаченко", "Шевченко"];
let emails = ["ivan@example.com", "maria@example.com", "alex@example.com", "julia@example.com", "petro@example.com", "anna@example.com", "oleg@example.com", "natalia@example.com", "vitaliy@example.com", "oksana@example.com"];
let phones = ["123-456-7890", "987-654-3210", "555-123-4567", "321-987-6540", "777-888-9999", "111-222-3333", "444-555-6666", "888-777-6666", "999-888-7777", "555-555-5555"];

for (let i = 0; i < 10; i++) {
    let newUser = new User(i + 1, names[i], surnames[i], emails[i], phones[i]);
    users.push(newUser);
}

console.log(users);

// Фільтрація користувачів за парним id
let userFilterId = users.filter(function(user) {
    return user.id % 2 === 0;
});

console.log(userFilterId);

// Сортування користувачів по id
users.sort((a, b) => a.id - b.id);
console.log(users);

// Клас Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order || [];
    }
}

// Створення масиву клієнтів
const clients = [];

for (let i = 1; i <= 10; i++) {
    const client = new Client(i, `Ім'я${i}`, `Прізвище${i}`, `email${i}@example.com`, `123-456-${i}`, []);
    clients.push(client);
}

console.log(clients);

// Сортування клієнтів за кількістю товарів в полі order
clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients);

// Клас Car
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Приклад створення об'єкту car і виклик методів
const myCar = new Car('Civic', 'Honda', 2022, 200, 1.5);
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2023);
myCar.addDriver({ name: 'John', age: 30 });

myCar.info();




//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// Клас "Попелюшка"
class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

// Створення масиву попелюшок
const cinderellas = [
    new Cinderella("Анна", 20, 37),
    new Cinderella("Марія", 22, 36),
    new Cinderella("Ольга", 25, 38),
    new Cinderella("Ірина", 19, 35),
    new Cinderella("Наталя", 24, 39),
    new Cinderella("Оксана", 21, 37),
    new Cinderella("Юлія", 23, 36),
    new Cinderella("Вікторія", 26, 38),
    new Cinderella("Софія", 18, 35),
    new Cinderella("Емма", 27, 39)
];

// Клас "Принц"
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        for (let i = 0; i < cinderellas.length; i++) {
            if (cinderellas[i].shoeSize === this.foundShoeSize) {
                return cinderellas[i];
            }
        }
        return null; // Якщо не знайдено відповідної попелюшки
    }
}

// Створення об'єкту "Принц"
const princeCharming = new Prince("Принц", 30, 36);

// Знаходження попелюшки за допомогою циклу
const foundCinderella = princeCharming.findCinderella(cinderellas);

if (foundCinderella) {
    console.log(`Принц ${princeCharming.name} знайшов попелюшку ${foundCinderella.name}`);
} else {
    console.log(`Попелюшку для принца ${princeCharming.name} не знайдено`);
}

// Знаходження попелюшки за допомогою функції масиву find
const foundCinderellaFind = cinderellas.find(cinderella => cinderella.shoeSize === princeCharming.foundShoeSize);

if (foundCinderellaFind) {
    console.log(`Принц ${princeCharming.name} знайшов попелюшку ${foundCinderellaFind.name} за допомогою функції масиву find`);
} else {
    console.log(`Попелюшку для принца ${princeCharming.name} не знайдено за допомогою функції масиву find`);
}
