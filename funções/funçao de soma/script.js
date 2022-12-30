function soma() {
  var n1 = document.querySelector("#input-1").value
  var n2 = document.querySelector("#input-2").value

  var total = parseInt(n1) + parseInt(n2)
  document.querySelector("#resultado").value = total
}