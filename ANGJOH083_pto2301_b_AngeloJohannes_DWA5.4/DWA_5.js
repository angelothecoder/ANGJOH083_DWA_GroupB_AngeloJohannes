let dividend = 0
let divider = 0
let correctDataEntered = 'true'

const calculation = () => {
    return Math.floor(dividend / divider)
  }

document.getElementsByTagName("button")[0].addEventListener('click',
() => {

    correctDataEntered = 'true'

    //check if inputs are empty
    if ( (document.getElementsByTagName("input")[0].value === '') || (document.getElementsByTagName("input")[1].value === '')){
        document.getElementsByTagName("div")[0].innerHTML = 'Division not performed. Both values are required in inputs. Try again.'
        correctDataEntered = 'false'
        throw new Error("Can't leave inputs empty.")
    }

    //check if numbers are valid
    if ( (document.getElementsByTagName("input")[0].value < 0) || (document.getElementsByTagName("input")[1].value < 0)){
        document.getElementsByTagName("div")[0].innerHTML = 'Division not performed. Invalid number provided. Try again.'
        correctDataEntered = 'false'
        throw new Error("Can't use negative numbers.")
    }

    //check if dividend is less the divider
    if (parseInt(document.getElementsByTagName("input")[0].value) < parseInt(document.getElementsByTagName("input")[1].value)){
        document.getElementsByTagName("div")[0].innerHTML = "Dividend can't be less then divider."
        correctDataEntered = 'false'
        throw new Error("Dividend can't be less the divider.")
    }

    //check if you only entered numbers
    if ( (document.getElementsByTagName("input")[0].value / document.getElementsByTagName("input")[0].value != '1') || 
    (document.getElementsByTagName("input")[1].value / document.getElementsByTagName("input")[1].value != '1')){
        document.getElementsByTagName("div")[0].innerHTML = 'Something critical went wrong. Please reload the page.'
        correctDataEntered = 'false'
        throw new Error('Something critical went wrong. Please reload the page.')
    }

    if (correctDataEntered === 'true'){
        dividend = parseInt(document.getElementsByTagName("input")[0].value)
        divider = parseInt(document.getElementsByTagName("input")[1].value)
        document.getElementsByTagName("div")[0].innerHTML = calculation()
    }

})