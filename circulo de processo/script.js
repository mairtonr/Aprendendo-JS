function go(){
    var circle = document.querySelector('#circleProgess')
    var number = document.querySelector('#numberProgress').value
    document.querySelector('.number').innerHTML = number + '%'
    circle.style.strokeDashoffset = 440 - ( 440 * number ) / 100
}