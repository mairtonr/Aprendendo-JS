const hoursHand = document.querySelector('.hand.hours')
const minutesHand = document.querySelector('.hand.minutes')
const secondsHand = document.querySelector('.hand.seconds')

function setRotation(element, rotationPercentage){
    element.style.setProperty('--rotation', rotationPercentage*360
)}

const setClock = ()=>{
    const currentDate = new Date()

    const secondspercentage = currentDate.getSeconds()/60
    const minutespercentage = (secondspercentage + currentDate.getMinutes())/60
    const hourspercentage = (minutespercentage + currentDate.getHours())/12
    
    setRotation(secondsHand, secondspercentage)
    setRotation(minutesHand, minutespercentage)
    setRotation(hoursHand, hourspercentage)
}

setClock()

setInterval(setClock, 1000)

