const video = document.getElementById('video');

var dragged;

/* LOGS */
function log(message) {
    console.log('> ME DIGA:  ' + message)
}
 
  document.addEventListener("drag", function( event ) {
    //console.log(valor_item)
    valor = event.target.getAttribute('value')

    log(valor)
  }, false);

  document.addEventListener("dragstart", function( event ) {
    if ( event.target.id != "draggable" ) {
      event.preventDefault();
      return log('nume é');            
    }

    dragged = event.target;
    event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      
      event.target.style.opacity = "";
  }, false);

 
  document.addEventListener("dragover", function( event ) {
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
    
     if ( event.target.className == "dropzone" ) {
        img = event.target.getAttribute('value');
        //log('Valor da caixa ' + img)
       // log('valor do ITem: ' + valor)
        event.target.src = "../HOMOLOGA/img/fechada.png";
        if(valor != img ){
            log('Valor da caixa ' + img)
            log('valor do ITem: ' + valor)
            //dragged.parentNode.preventDefault();
            event.target.style.border = "1px solid red"
        }
    }  

  }, false);

  document.addEventListener("dragleave", function( event ) {
     
      if ( event.target.className == "dropzone" ) {
        event.target.style.border = "none"
        event.target.src = " ../HOMOLOGA/img/embalagem-de-entrega-em-caixa-aberta-e-fechada_106065-100.png";
      }

    }, false);

    document.addEventListener("drop", function( event ) {
        if(valor != img ){
            event.target.src = " ../HOMOLOGA/img/embalagem-de-entrega-em-caixa-aberta-e-fechada_106065-100.png";
            event.target.style.border = "none"
            return event.preventDefault();
        }

        event.preventDefault();
   
        if ( event.target.className == "dropzone" ) {
            event.target.style.border = "none"
            event.target.src = " ../HOMOLOGA/img/embalagem-de-entrega-em-caixa-aberta-e-fechada_106065-100.png";
            log('DOPREI: ' + valor)
            //event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }
    
    }, false);

// N MEXER NELE 

    document.addEventListener("drop", function( event ) {

        event.preventDefault();

        if ( event.target.className == "dropzone2" ) {
            event.target.style.border = "none"
            event.target.src = " ../HOMOLOGA/img/embalagem-de-entrega-em-caixa-aberta-e-fechada_106065-100.png";
            log('DOPREI: ' + valor)
            //event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }
    }, false);


function abreVideo() {
    document.getElementById('id01').style.display='block';
    video.autoplay = true;
    video.load();
}

function fecharVideo() {
    document.getElementById('id01').style.display='none';
    video.autoplay= false;
    video.load();
    location.reload();
}