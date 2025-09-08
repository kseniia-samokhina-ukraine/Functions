'use strict';

// Minimum
// 1 Напиши всі можливі варіанти створення функцій.

// 1) function declaration
function greet(name) {
    return "Привіт, " + name + "!";
}

console.log(greet("Олександр"));

// 2) function expression

const userName = function (name) {
    return "Привіт, " + name + "!";
}

console.log(userName('Людмила'));

// 3) Arrow function

const greetUser = (name) => {
    return `Привіт, ${name}!`;
};

// або
const square = (x) => x * x;

console.log(greet("Валентина"));
console.log(square(6));

// 4) Function Constructor

const add = new Function('a', 'b', 'return a + b');

console.log(add(2, 3)); 

// Minimum
// 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.

function amountArguments() {
    return arguments.length;
}

console.log(amountArguments(100, "i am here", false)); 

// Minimum
// 3 
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function twoNumbers(x, y) {
    if (x < y) {
        console.log(-1);
    } else if (x > y) {
        console.log(1);
    } else {
        console.log(0);
    }
}

twoNumbers(8, 4);

// 4 Напиши функцію, яка обчислює факторіал переданого їй числа.

// ФУНКЦІЯ факторіал(n):
//   ЯКЩО n < 0, ПОВЕРНУТИ "Невизначено"
//   ЯКЩО n == 0, ПОВЕРНУТИ 1
//   ЗМІННА результат = 1
//   ДЛЯ i ВІД 1 ДО n:
//     результат = результат * i
//   ПОВЕРНУТИ результат

function factorial(n) {
    let result = 1;
    if (n < 0) {
        console.log('Число має бути більше 0');
    } else if (n == 0) {
        console.log (1);
    } else {
        for(let i = 1; i <= n; i++) {
            result = result * i;
            console.log(result);
        }
    }
}

factorial(5);

// 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let arg1 = prompt('Введи перше число');
let arg2 = prompt('Введи друге число');
let arg3 = prompt('Введи третє число');

function threeNumb(num1, num2, num3) {
    let resultThreeNumb = num1 + num2 + num3;
    let resultOneNumb = Number(resultThreeNumb);
    console.log(resultOneNumb);
    console.log(typeof resultOneNumb);
}
threeNumb(arg1, arg2, arg3); 

// 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function squreFigure(x, y) {
    if (y === undefined) {
        console.log(x * x);
    } else {
        console.log(x * y);
    }
}

squreFigure(7);

// Norma
// 1 
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumb(n) {
    if (n < 0) {
        return false;
    };

    let sumDividers = 0;

    for (let i = 1; i < n; i++) {
        if( n % i === 0) {
            sumDividers += i;
        }
    }

    return sumDividers === n;
}

console.log(perfectNumb(27));

// 2
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerfectNumbs(x, y) {
    let arrFindPerfectNumbs = [];

    for (let i = x; i <= y; i++) {
        if (perfectNumb(i)) {
            arrFindPerfectNumbs.push(i);
        }
    }

    if (arrFindPerfectNumbs.length === 0) {
        console.log('Досконалих чисел у цьому діапазону немає');
    } else {
        console.log(`Досконалі числа ${arrFindPerfectNumbs}`);
    }
}

findPerfectNumbs(2, 2000);