import { books, authors, genres, BOOKS_PER_PAGE, book_details } from 'data.js'

export const createHtml = () => {
    let value = 0
    while (value < BOOKS_PER_PAGE) {
    book_details.appendChild(document.createElement("tbody"))
    book_details.getElementsByTagName("tbody")[value].classList.add("preview")
    document.getElementsByTagName("tbody")[value].appendChild(document.createElement("img"))
    book_details.getElementsByTagName("img")[value].classList.add("preview__image")
    document.getElementsByTagName("tbody")[value].appendChild(document.createElement("h1"))
    document.getElementsByTagName("tbody")[value].appendChild(document.createElement("h2"))
    value = value + 1
    }
}

export const createOutput = () => {
    let value2 = 0
    while (value2 < BOOKS_PER_PAGE){
    book_details.getElementsByTagName("img")[value2].src = books[value2].image
    book_details.getElementsByTagName("h1")[value2].innerHTML = books[value2].title
    book_details.getElementsByTagName("h2")[value2].innerHTML = authors[books[value2].author]
    value2 = value2 + 1
    }
}

