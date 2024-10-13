const ENDPOINT = 'http://localhost:3000/dogs'

//get
const getDogs = async () => {
    try {
        let response = await fetch(ENDPOINT);
        let data = await response.json();
        console.log(data)
        showDogs(data)
        
    } catch (error) {
        console.log(error);
    }
}

getDogs()

function showDogs(data) {
    let container = document.getElementById('showData')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    for(let dog of data){
        let li = document.createElement('li')
        li.innerText = dog.breed + " Name:" + dog.name
        ul.appendChild(li)
    }
    div.appendChild(ul)
    container.appendChild(div)
}
