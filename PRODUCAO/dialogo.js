    
  const titulo = document.querySelector('.p1');
  const titulo2 = document.querySelector('.p2');
  
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      console.log(letra)
      
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
  typeWriter(titulo);
  