// timer files 
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secodElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')


// Buttons
const startButton = document.querySelector('.start') 
const pauseButton = document.querySelector('.pause') 
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new') 

//listeners
startButton.addEventListener('click', () => {
  
    interval = setInterval(startTimer, 1)

})

pauseButton.addEventListener('click', () =>{
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
   clearInterval(interval)
   clearFields()
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    const korsatkichlar = document.querySelector('.korsatkichlar')
    const block = document.createElement('div')
    block.innerText = `Result: ${hour} : ${minute} : ${second} : ${millisecond}`
    korsatkichlar.append(block)

})


// Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval







function startTimer() {
    millisecond++
    if(millisecond < 9){
        millisecondElement.innerText = "0" + millisecond
    }
    if(millisecond > 9){
        millisecondElement.innerText = millisecond
    }

    if(millisecond > 99){
        second++
        secodElement.innerText = "0" + second
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond
    }

    //seconds 
    if(second < 9) {
        secodElement.innerText = "0" + second
    
        }    
        if(second > 9){
        secodElement.innerText = second
    }
    
        if(second > 59){
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
       secodElement.innerText = "0" + second
    }
    
    //minutes
        if(minute < 9) {
        minuteElement.innerText = "0" + minute
    
    }   
        if(minute > 9){
        minuteElement.innerText = minute
    }
    
     //hour
     if(hour < 9) {
        hourElement.innerText = "0" + hour
    
    }   
        if(minute > 9){
        hourElement.innerText = hour
    }
    
        if(hour > 24){
        hour++
        hourElement.innerText = "0" + minute
        minute = 0
        minutElement.innerText = "0" + hour
    }
    
    
}

function clearFields() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secodElement.textContent = "00"
    millisecondElement.textContent = "00"
}



