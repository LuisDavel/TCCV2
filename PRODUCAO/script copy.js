const conteudos = document.querySelectorAll('.drag')
const dropzones = document.querySelectorAll('.droped')
const mouses = document.querySelectorAll('.demo')


mouses.forEach(mouse =>{
    mouse.addEventListener('mouseOver', mouseOver)
    mouse.addEventListener('mouseOut', mouseOut)
});

//document.getElementById("demo").addEventListener("mouseover", mouseOver);
//document.getElementById("demo").addEventListener("mouseout", mouseOut);


function mouseOver() {
    mouses.forEach(mouse => mouse.setAttribute('src', '../HOMOLOGA/img/fechada.png'))
    log('aaaaaaa')
  }
  
  function mouseOut() {
    document.getElementById("demo").setAttribute('src', '../HOMOLOGA/img/embalagem-de-entrega-em-caixa-aberta-e-fechada_106065-100.png')
  }

/* LOGS */
function log(message) {
    console.log('> ME DIGA:  ' + message)
}


// Da movimento pros componentes 
conteudos.forEach(conteudo => {
    conteudo.addEventListener('dragstart', dragstart)
    conteudo.addEventListener('drag', drag)
    conteudo.addEventListener('dragend', dragend)
})

function dragstart() {
    n = this.getAttribute('value')
    log('conteudos: Começou o dragging IRRAAAAA  : ' )
    //dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    // this = conteudo
   
    this.classList.add('is-dragging')
}

function drag() {
   log('conteudos: Ta draggingzado: ' + n)
   
}

function dragend() {
    log('conteudos: Soltei a parada drag ')
    //dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    // this = conteudo
    
        this.classList.remove('is-dragging')
}

/** ONDE EU vo tacar os drops */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

/*dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})*/

function dragenter() {
    mouseOut();
    log('DROPZONE: Enter in zone ')
}

function dragover() {
    
    // this = dropzone
   //this.classList.add('over')
   //log('DROPZONE: N SEI ')
    // get dragging card

    const cardBeingDragged = document.querySelector('.is-dragging')
    //normalImg();
    // this = dropzone
    this.appendChild(cardBeingDragged)
    this.classList.remove('is-dragging')

}

function dragleave() {
    mouseOut();
    
    
     log('DROPZONE: Leave ')
    // this = dropzone
   // this.classList.remove('over')

}

function drop() {
     log('DROPZONE: dropped ')
    //this.classList.remove('over')
}
