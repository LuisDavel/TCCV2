/// --- SEMPRE QUE A JANELA INICIAR
window.addEventListener('load', (event) => {
    random(); // ABRE A FUNÇÃO RANDOM
});

var conta_erro = 0;
var conta_acerto = 0;
var tentativa = 0;

function msg (msg){
    console.log ('Resultado:  ' + msg)
}


/*function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }*/

function random() {
        result_final = 0;
        a = 0;
        b = 0;
        c = 0;

    for(var i = 1; i< 4; i++){
        x = Math.floor((Math.random() * 20) + 1);
        //console.log(x)
        
        if(i == 1){

            //document.getElementById("numero" + i).innerHTML = x;
            y = x + x
            //msg('Numero1 Valor random: '+ x +  ' soma: ' + y)

            a = x;
            //msg('If' + i +' ' + a) 

        }else if(i == 2){
            if(x & 1){
                //msg('Log Numero2 impar: '+ x);
                var  x = x + 1;
                var y = x + x;
                //document.getElementById("numero" + i).innerHTML = x;
                //msg('Log Numero2 impar arrumado: ' + x +  ' soma: ' + y);
            }else{
                var y = x + x;
                //document.getElementById("numero" + i).innerHTML = x;
                //msg('Log par: ' + x +  ' soma: ' + y)
            }
            
            b = x;
            //msg('If' + i +' ' + b)  
        }else{
            var y = x + x;
            //document.getElementById("numero" + i).innerHTML = x;
            //msg('Log 3: ' + x +  ' soma: ' + y)

            c = x;
            //msg('If' + i +' ' + c)  
        }
        document.getElementById("result" + i).innerHTML = y;
    }
    
    result_final = a + ((b/2) * c)
    
    msg('Result Final ' + result_final)

    //document.getElementById('result_final').innerHTML = result_final
    
}

var temporiza;
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