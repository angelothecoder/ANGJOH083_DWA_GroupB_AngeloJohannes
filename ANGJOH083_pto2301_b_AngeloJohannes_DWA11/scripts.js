class counter {
    value = 0;

    increase(){
        this.value = this.value + 1;
    }

    decrease(){
        this.value = this.value - 1;  
    }

    return(){
        return this.value
    }
}

const instance = new counter()

//instance.increase()
//instance.increase()
//instance.decrease()
//instance.log()

document.querySelector('[data-input]').value = instance.return()

document.querySelector('[data-subtract]').addEventListener('click',
() => {
    instance.decrease()
    document.querySelector('[data-input]').value = instance.return()
})

document.querySelector('[data-add]').addEventListener('click',
() => {
    instance.increase()
    document.querySelector('[data-input]').value = instance.return()
})
