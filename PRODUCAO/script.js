const conteudos = document.querySelectorAll('.drag')
const dropzones = document.querySelectorAll('.droped')
const video = document.getElementById('video');

let once = false;
let valor = 0;

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
    
    valor_item = this.getAttribute('value')
    log('conteudos: Começou o dragging IRRAAAAA  : ' )

    // this = conteudo
   
    this.classList.add('is-dragging')
}

function drag() {
  // log('conteudos: Ta draggingzado: ' + valor_item)
   
}

function dragend() {
    //log('conteudos: Soltei a parada drag ')
    

    // this = conteudo
    
        this.classList.remove('is-dragging')
}

/** ONDE EU vo tacar os drops */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', once_dragleave)
    dropzone.addEventListener('drop', drope)
})

function dragenter() {
    //log('DROPZONE: Enter in zone ')
    

}

function dragover() {
    // this = dropzone
   //this.classList.add('over')
   log('DROPZONE: N SEI ' + valor)
    // get dragging card

    if(valor == 2){
        console.log('aaaa')
    }

    const cardBeingDragged = document.querySelector('.is-dragging')
    
    
    this.appendChild(cardBeingDragged)
    this.classList.remove('is-dragging')
    // this = dropzone
   

}

function dragleave(){
    
    if(valor_item == 1){
        console.log(valor_item)
        document.getElementById('yy').innerHTML='bb'
        document.getElementById('yy').setAttribute('value', valor_item )
        valor = document.getElementById('yy').getAttribute('value')
    }
    once = true;


   
    // this = dropzone
   // this.classList.remove('over')

}

function once_dragleave() {
    if(!once)  dragleave();

   // log('DROPZONE: Leave ' + valor_item)
   


}


function drope() {
    
    log('DROPZONE: dropped ')
    //this.classList.remove('over')
}


function abreVideo() {
    document.getElementById('id01').style.display='block';
    video.autoplay = true;
    video.load();
}

function fecharVideo() {
    document.getElementById('id01').style.display='none';
    video.autoplay= false;
    video.load();
    
}