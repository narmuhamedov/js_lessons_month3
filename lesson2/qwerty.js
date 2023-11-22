//синхронность и асинхроность

//forEach()


// //простой пример
// const peoples = [
//     {
//     name:'Radomir',
//     age:26
//     },
//     {
//     name:'Andrew',
//     age:21
//     },
//     {
//     name:'John',
//     age:21
//     },
// ]
//
// //выведение массива по очередно
// peoples.forEach((item)=>{
//     console.log(peoples)
// })
// //получение items по index
// peoples.forEach((item, itemIndex)=>{
//     console.log(peoples, itemIndex)
// })
//
// //общирный пример
// const personsBlock =document.querySelector('.persons')
//
// peoples.forEach((person, personIndex)=>{
//     const personBlock = document.createElement('div')
//
//     personBlock.innerHTML =`
//     <p>Name:${person.name}</p>
//     <span>Age:${person.age}</span>
//     <span>ID: ${personIndex}</span>
// `
//     personsBlock.append(personBlock)
// })

//dom elements - нажимая на кнопку ждет пока кликнет это асинхрон
// const btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log(123)
// })
//

//clear interval - до поры до времени обратка асинхроности
// const interval = setInterval(()=>{
//     console.log('test')
// },1000)
//
// setTimeout(()=>{
//     clearInterval(interval)
// }, 5000)


//брат близнец setTimeOut

//set Interval - работает бесконечно интервалами


// //счетчик пример
// const h1 = document.querySelector('h1')
// let num = 0
// setInterval(()=>{
//     num++
//     h1.innerHTML = num
// }, 1000)

//
// let num = 0
// setInterval(()=>{
//     num++
//     console.log(num)
//     document.writeln(num)
// }, 1000)

//
// setInterval(()=>{
//     console.log('Hello')
// },1000)


//общирные примеры - это асинхроность

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },1000)
//
// console.log(3)
//
// setTimeout(()=>{
//     console.log(4)
// },1000)


//такое действие называется синхроность код написан в порядке и выполнения в браузере
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)


//открытая функция принимающая какой то параметр - если мы посмотрим в браузере то тут слово hello
// //появиться через 1 секунду . Функция помогает делать задержку
// setTimeout(()=>{
//     console.log('Hello')
// }, 1000)
//
// //2вариант
// const logger = ()=>{
//     console.log('Logger')
// }
// setTimeout(logger,3000);



const defaultUserPhoto = 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg'

const personsBlock = document.querySelector('.persons')


const humans = [
    {
        name: 'Anna',
        age: 26,
        photo: 'images/219969.png'
    },

    {
        name: 'Anton',
        age: 23,
        photo: 'images/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.webp'
    },

    {
        name: 'Egor',
        age: 21
    },

    {
        name: 'Julia',
        age: 29
    },

    {
        name: 'Jin',
        age: 29
    },

     {
        name: 'Roboto',
        age: 29
    }
]

humans.forEach((item,personIndex)=>{

    const personBlock = document.createElement('div')
    personBlock.setAttribute('class', 'personCard')
    personBlock.innerHTML = `
        
        <div class="userPhoto">
            <img src="${item.photo ? item.photo: defaultUserPhoto}" alt="">
        </div>
        <p>Name: ${item.name}</p>
        <span>Age: ${item.age}</span>
        <span>ID: ${personIndex}</span>
        
    `
    personsBlock.append(personBlock)



})



