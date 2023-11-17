//регулярные выражения
//flags - помогают обрабатывать регулярные выражени

//const  string = prompt('Enter your name');


//указывание по поиску буквы буква - i регистро не зависимый поиск. g- глобальный поиск
//const reqExp = /R/ig
//console.dir(reqExp)

//второй способ
//New - обращение к конструктору
//const reqExp = new RegExp('r','ig');


//match - регулярное выражение ищет
//console.log(string.match(reqExp));
//console.log(string)


//const symbols = 'AaBbCcc';
//либо большое либо маленькое
//const reqExp = /[C,c]/g

// const number = '123123123'
// //Поиск цифр в радиусе от 0 до 10 и если она есть то любую найдет
// const  reqExp = /[0-9]/g
// console.log(number.match(reqExp));
// //replace принимает 2 выражения либо строку либо регулярные выражения(мы можем сделать звездочки)
// console.log(number.replace(reqExp,'*'))
//



//reqursion
let num = 0;
const countFunc = ()=>{
    num++;
    console.log(num)
    //рекурсия ограничена - ограничение рекурсии всегда должна быть ограничена
    //countFunc()
}
countFunc();