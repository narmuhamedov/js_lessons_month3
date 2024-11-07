//fetch api





// //Hell Callback
//
// //Promise
//
// const promise = new Promise((resolve, reject) => {
//     //throw new Error()
//     setTimeout(() => {
//         const product = {
//             name: 'Milk',
//             price: '3$'
//         }
//         console.log(product, '1step')
//         resolve(product)
//         reject()
//     }, 2000)
// })

// const resolveData = (product)=>{
//     setTimeout(()=>{
//         product.price = '4$'
//         console.log(product, '2 step')
//     },1500)
// }
//
// const rejectData = ()=>{
//     setTimeout(()=>{
//         console.log('Error Promice')
//     }, 3000)
// }
//
// promise.then(resolveData, rejectData)
//
// rejectData()
//
// promise.then((product) => {
//         setTimeout(() => {
//             product.price = '4$'
//             console.log(product, '2 step')
//             }, 1500)
//     }, () => {
//         setTimeout(() => {
//             console.log('Error Promice')
//         }, 3000)
//     }
// )


// setTimeout(() => {
//     const product = {
//         name: 'Milk',
//         price: '3$'
//     }
//     setTimeout(() => {
//         product.price = '4$'
//         console.log(product)
//     }, 3000)
//     console.log(product)
//     setTimeout(() => {
//         product.price = '5$'
//         console.log(product)
//     }, 1500)
//     console.log(product)
//
// }, 2000)

//https://jsonplaceholder.typicode.com/todos
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
    .then((data)=>console.log(data))


//
// const request = new XMLHttpRequest()
// request.open("GET", "https://jsonplaceholder.typicode.com/todos")
// request.setRequestHeader('Content-type', 'application/json')
// request.send()
//
// request.onload = () =>{
//     console.log(request.response)
// }