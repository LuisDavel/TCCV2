    
  const titulo = document.querySelector('.p1');
  //const titulo2 = document.querySelector('.p2');
  
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      console.log(letra)
      
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
 
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
  typeWriter(titulo);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  