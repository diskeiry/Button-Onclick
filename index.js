//javascript
// Usaré querySelector() porque es más moderno y más rápido. 
//También usaré const para declarar nuestras variables en lugar de let y var, porque con const, 
//las cosas son más seguras ya que la variable se vuelve de solo lectura.
const name = document.querySelector(".name");
// Ahora que tenemos el texto seleccionado, escribamos nuestra función. 
//En JavaScript, la sintaxis de la función se ve así:
function changeColor(color) {
   name.style.color = color;
}