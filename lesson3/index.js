//DOM ELEMENT -document object model

//window - объект глобальный но такой же как document, alert-принадлежит window
// window.alert()
// console.log(console)

//getElementsByClassName - создан чисто для определения классов в div

////array реальный массив
// const mass = [1,2,3,4,5]
// console.log(mass)

//const buttons = document.getElementsByClassName('btn')
// //это коллекция прототипа псевдомасив
// console.log(buttons)
// console.log(buttons[0])

//get Element by id получение по id
//const buttonId = document.getElementById('btn4')

// //html collection по поиску тегов
// const but = document.getElementsByTagName('button')

//поиск по селектору он ограничен и отправлен на точечный поиск элементов находит первый попавшиеся класс и он гибкий
//можно указывать через него как и id tags class
//const buttonClassName =  document.querySelector('.btn')

//находит все виды селекторов
//const buttonClassName =  document.querySelectorAll('.btn')
//--------------------------------------------------

//classList add() contains()-boolean значения remove()
const yellowButtons = document.querySelectorAll('button')
//если перейдем в консоль то увидим что через class List  у нас добавился элемент
//console.dir(yellowButton[0].classList)

//тут если мы не указываем в html class то тут мы можем принудительно добавить
// yellowButton[0].classList.add('red')
// //remove удалять красный класс из button
// yellowButton[0].classList.remove('red')

//красим кнопки в красный при обработке событий через click используя forEach
yellowButtons.forEach((yellowButton)=>{
    yellowButton.addEventListener('click', (event)=>{
        if (event.target.classList.contains('red')){
            event.target.classList.remove('red')
        }else {
            event.target.classList.add('red')
        }
    })
})
const buttonParent = document.querySelector('.btn-block')
//добавление нового тега через js - но на нее не накладывается обработчик событий
const newYellowButton = document.createElement('button')
buttonParent.append(newYellowButton)
