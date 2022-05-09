var sec = 00
var min =0
var interval
function start () {
    interval= setInterval(contador, 100)
}

function pause() {
   clearInterval(interval) 
}

function stop() {
   clearInterval(interval)
   sec=0
   min=0
   document.getElementById('contador').innerHTML='00:00'
}
function contador() {
 sec++
 if (sec==60)
    min++
    sec=0
 document.getElementById('contado').innerHTML=min+':'+sec   
}