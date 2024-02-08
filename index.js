const message = document.querySelector("#message")

const addMovie = (event) => {
    console.log(`hi`)
    event.preventDefault()
    let inputField = document.querySelector("input")
    // accesses the input in HTML
    let movie = document.createElement("li")
    // makes list item
    let movieTitle = document.createElement("span")
    // makes the span(bootleg div)
    movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField.value
    // sets text inside of span
    movie.appendChild(movieTitle)
    // puts span in list item
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    // accesses the ul in HTML, puts movie element inside
    // <ul>
    //     <li> ///movie
    //         <span>My Fav Movie</span> ///movieTitle
    //     </li>
    // </ul>
    inputField.value = ""
    // resets text in input
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) {
        message.textContent = "Movie Done Seen"
    } else {
        message.textContent = "Movie Done Been Unseen"
    }
}

const form = document.querySelector("form")
form.addEventListener("submit", addMovie)
