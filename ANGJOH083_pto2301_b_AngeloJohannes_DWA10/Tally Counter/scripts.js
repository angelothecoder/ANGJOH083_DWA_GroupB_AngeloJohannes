document.querySelector('[data-input]').value = 0

document.querySelector('[data-subtract]').addEventListener('click',
(number) => {
    number = parseInt(document.querySelector('[data-input]').value) - 1
    document.querySelector('[data-input]').value = number
})

document.querySelector('[data-add]').addEventListener('click',
(number) => {
    number = parseInt(document.querySelector('[data-input]').value) + 1
    document.querySelector('[data-input]').value = number
})

document.querySelector('[data-reset]').addEventListener('click',
(number) => {
    number = 0
    document.querySelector('[data-input]').value = number
})
