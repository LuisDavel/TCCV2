/// --- SEMPRE QUE A JANELA INICIAR
let documento =  document.getElementsByClassName("dopzone");
a1 = 0;
b1 = 0;
c1 = 0;
d1 = 0;
e1 = 0;
f1 = 0;
f = 0;

a = 0;
b = 0;
c = 0;
d = 0;
e = 0;

window.addEventListener('load', (event) => {
    random(); // ABRE A FUNÇÃO RANDOM
});

var conta_erro = 0;
var conta_acerto = 0;
var tentativa = 0;

function msg (msg){
    console.log ('=== >:  ' + msg)
}


// RANDOMIZA
function random() {
        result_final = 0;

    for(var i = 1; i< 4; i++){

        x = Math.floor((Math.random() * 5) + 1);
        //msg('random: '+x)
        
        if(i == 1){
            a = x;
            msg('If numero '+i+': '+ a )
           // msg('');
            document.getElementById("result" + i).innerHTML = x;
        }else if(i == 2){
            b = x;
           document.getElementById("result" + i).innerHTML = x;
           msg('If numero '+i+': '+ b )
           // msg('');
        }else if(i == 3 ){
            
            c = x ;
            msg('If numero '+i+': '+ c )
           
            //msg('If numero '+i+' com a soma: '+ c )
           // msg('');
           // msg('q ? ' + c+b);
            document.getElementById("result" + i).innerHTML = c;
        }

            d = a; 
            //msg('If numero '+i+': '+ d )    
           // msg('');
            document.getElementById("result" + 4).innerHTML = d;
        
            e = b + c;
           // msg('If numero '+i+': '+ e )
            //msg('');
            document.getElementById("result" + 5).innerHTML = e;
        

        
        //document.getElementById("result" + i).innerHTML = x;
        //msg(x)
       
    }
    
    result_final = a + b + c + d + e
    
    msg('Result Final ' + result_final)

    //document.getElementById('result_final').innerHTML = result_final
    
}

// CALCULAR PRA VER SE ACERTOU
function recebe_valor(){
    for(var i = 1; i < 7; i++){
        o = parseInt(document.getElementById("numero" + i).value);
    
        if(i == 1){
            a1 = o;
        }else if(i == 2){
            b1 =  o ;
        }else if(i == 3){
            c1 =  o; 
        }else if(i == 4){
            d1 = o;
        }else if(i == 5){
            e1 =  o;
        }else if(i == 6){
            f1 =  o;
        }

    }
/*
    f = a1 + b1 + c1 + d1 + e1 + f1;

    if(isNaN(f)){
        return  alert('faltam numeros: ' + f);
      
    }
    
    msg('resultados final: ' + f);
*/

    (a1 + d1 ) == a ? (
        document.getElementById('numero1').style.borderColor = 'green',
        document.getElementById('numero4').style.borderColor = 'green',    
        msg('resultados modificado: ' + (a1 + d1))
    ): (
        document.getElementById('numero1').style.borderColor = 'red',
        document.getElementById('numero4').style.borderColor = 'red',
        msg('resultados modificado: ' )
    );
    
    (b1 + e1) == b ? (
        document.getElementById('numero2').style.borderColor = 'green',
        document.getElementById('numero5').style.borderColor = 'green',    
        msg('resultados modificado: '  + (b1 + e1))
    ) : (
        document.getElementById('numero2').style.borderColor = 'red',
        document.getElementById('numero5').style.borderColor = 'red',
        msg('resultados modificado: ')
    );

    (c1 + f1) == c ? (
        document.getElementById('numero3').style.borderColor = 'green',
        document.getElementById('numero6').style.borderColor = 'green',    
        msg('resultados modificado: '  + (c1 + f1))
    ) : (
        document.getElementById('numero3').style.borderColor = 'red',
        document.getElementById('numero6').style.borderColor = 'red',
        msg('resultados modificado: ' + (c1 + f1))
    );

    


    

   //msg('resultados modificado: ' + f);

}

/* function valida_conteudo(){
    nan1 =  a1 + b1 + c1;

    valida_horizontal = (a1 + b1 + c1);

    if((isNaN(nan1) && valida_horizontal != c) && document.getElementById('numero1').style.borderColor == 'green' ){
       return
    }else{
        document.getElementById('numero1').style.borderColor = 'black'
    }

    }
*/
    
    

/////////////////////////////////// DPS VEJo

var temporiza;

$(".dropzone").on("input", function(){
    clearTimeout(temporiza);
    temporiza = setTimeout(function(){
       recebe_valor();
      //  valida_conteudo(); // FUNçÃO A SER DISPARADA
    }, 500);
 });


$("#valor").on("input", function(){
   clearTimeout(temporiza);
   temporiza = setTimeout(function(){
        resultado(); // FUNçÃO A SER DISPARADA
   }, 1000);
});

function resultado(){
    
    var valor =  document.getElementById('valor').value;
    if(valor != ''){
        if(tentativa != 5){
            if(result_final == valor){
                tentativa += 1;
                alert(valor);
                conta_acerto =  conta_acerto + 1;
                msg('Acertos + ' + conta_acerto)
                msg('-----------------------')
                random();
                msg(tentativa)
            }else if(result_final != valor){
                tentativa += 1;
                alert(valor);
                conta_erro = conta_erro + 1;
                msg('Erros + ' + conta_erro)
                msg('-----------------------')
                random();
                msg(tentativa)
            }
          
        }else{
            msg('certo: '  + conta_acerto + ' ' + ' Errado: ' + conta_erro)
        }
    }
}

/* DRAGG 

const video = document.getElementById('video');

var dragged;


function log(message) {
    console.log('> ME DIGA:  ' + message)
}
 
  document.addEventListener("drag", function( event ) {
    log('oi')
    valor = event.target.getAttribute('value')
    log(valor)
  }, false);

  document.addEventListener("dragstart", function( event ) {
        log('INICIO O DRAG');
      dragged = event.target;
                  
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
    log('CABo O DRAG');
      event.target.style.opacity = "";
  }, false);

 
  document.addEventListener("dragover", function( event ) {

      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
    log('ENTRO NO DRAG');
      if ( event.target.className == "dropzone" ) {
         event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
     
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
     
      event.preventDefault();
   
      if ( event.target.className == "dropzone" ) {
         
        if(valor == 1){
            //abreVideo();
            //log('DOPREI: ' + valor)
        }
            log('DOPREI: ' + valor)
            
          //event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);

/*
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
*/
