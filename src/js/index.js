// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


console.log('Hola')
console.log(6*7)
//console.log ('Hello World!') - комментарий

/*
многострочный комментарий

может занимать несколько строк
*/
/*/переменные.
Переменная в JavaScript — именованная область памяти, которая используется для хранения данных.
нельзя объявить переменную больше одного раза.
let age = 35;
let age = 6;
но можно изменить значение переменной без let
*/
let age = 35;
age = 44;

console.log(age) //  вывод значения переменной age в консоли

let x = 80;
let y = 100;

console.log(x, y); // 80 y 100
console.log(x + y); // 180

//переменная Age и переменная age - это две разные переменные.

// копирование значений из одной переменной в другую

let name = 'Lena';
let surname;
surname = name ;

console.log(name);
console.log(surname);

/*Константа
тип переменной, ее значение нельзя изменить после ее определения.

отличие константы от обычной переменной:
нельзя изменять значение константы, const

const num = 222;
num = 111; (ОШИБКА)
*/

const myName = "Elena";
console.log(myName);

/*
Создайте переменную age и присвойте ей значение 96
Выведите переменную age
Выведите сообщение «Прошел год»
Присвойте переменной age значение 97
Выведите переменную age

let age = 96;
console.log(age);
console.log('Прошел год');
age = 97;
console.log(age); 


Создайте две переменные source и destination.
Присвойте переменной source значение "sigma".
Затем скопируйте значение переменной source в переменную destination. Измените значение source на "delta".
Выведите значениe source, a затем значение destination с новой строки.

let source = 'sigma';
let destination = source;
source = 'delta';
console.log(source);
console.log(destination);
*/

//prompt() - это функция, которая используется для получения информации от пользователя.
let username = prompt('как вас зовут?')
console.log (username)
//Когда вы запустите этот код в браузере, он покажет диалоговое окно с вопросом "Как вас зовут?". После того как пользователь введет своё имя и нажмет "ОК", введенное значение будет сохранено в переменной username, которую вы можете использовать как обычную переменную. 

const yourName = prompt("Как вас зовут?");
const yourAge = prompt("Сколько вам лет?");

// для того что бы ввести номер нужно вначале ввести Number() и потом уже prompt.
const thisYear = Number(prompt("Введите текущий год"));

/*const readline = require('readline').createInterface({

input: process.stdin,

output: process.stdout

});

readline.question('Как вас зовут?', name => {

console.log(name);

readline.close();

});
*/

//Операторы

let xx = 2 ** 3; // 2 возводится в степень 3

console.log(xx); // Выводит: 8

//Взятие остатка от деления %:
console.log(19 % 5); // Выводит значение 4

console.log(10 % 3); // Выводит значение 1

console.log(2 % 3); // Выводит значение 2

//Конкатенация строк
//Конкатенация — это процесс объединения или склеивания строк в программировании. В результате конкатенации мы получаем новую строку, состоящую из объединенных строк.
//Для конкатенации строк используется оператор +.

console.log("инь" + "ян"); // Выведет: "иньян"

let s = "12" + "15"

console.log(s); // Выведет: "1215"

let age = 30;

let message = "Мой возраст: " + age; // значение age преобразуется в строку

console.log(message); // Выведет: "Мой возраст: 30"