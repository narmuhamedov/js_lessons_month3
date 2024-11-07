//async await try catch

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=10"

const fetchDataAsync = async () => {
    try {

        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }finally {
        console.log('finally')
    }
}

fetchDataAsync()

const fetchDataThen = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

fetchDataThen()