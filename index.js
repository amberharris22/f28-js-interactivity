console.log('Hello World')
const message = document.querySelector('#message')

const addMovie = (event) => {
    let inputField = document.querySelector('input')
    console.log(inputField.value)
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    movie.appendChild(deleteBtn)
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    const ul = document.querySelector('ul')
    ul.appendChild(movie)
    inputField.value = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    console.log(event.target.parentNode)
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`
    revealMessage()
}
const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched`
    }else {
    message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage () {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

