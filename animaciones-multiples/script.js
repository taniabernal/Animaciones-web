const $cuadrado = document.getElementById('cuadrado');
$cuadrado.addEventListener("animationend", (event) => {
  // $cuadrado.addEventListener("animationstart", (event) => {
  // $cuadrado.addEventListener("animationiteration", (event) => {
  // console.log(event.animationName);
  if (event.animationName === "rebote"){
    $cuadrado.style.animationName = "cuadrado escalera";
    $cuadrado.style.animationDuration = "3s";
  }
});
