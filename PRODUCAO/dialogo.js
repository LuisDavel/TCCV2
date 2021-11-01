    
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
  


  /* Outra solução.
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
      setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
    }
 } */ 



  /* CSS

  h1::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  */