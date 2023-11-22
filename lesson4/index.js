//JSON

// const person = {
//     name: "Radomir",
//     age: 26
// }
//
// //stringify - из js object превращает в json
// const data = JSON.stringify(person)
// console.log(data)
//
// //parse - из JSON   в JS объект
// const dataJson = JSON.parse(data)
// console.log(dataJson)
//
// console.log(JSON)

const getBtn = document.querySelector('#btn-get')
getBtn.addEventListener('click',()=>{
    const request = new XMLHttpRequest() //1 запрос создания
    request.open('GET','data1.json') // 2 объявление метода запроса и указание пути на json файл
    request.setRequestHeader('Content-type', 'application/json')// 3 указание заголовка запросов
    request.send() // Отправка запроса


    request.addEventListener("load", ()=>{
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age

    })
})