/// --- SEMPRE QUE A JANELA INICIAR
window.addEventListener('load', (event) => {
    random(); // ABRE A FUNÇÃO RANDOM
    random_dev();
});

var conta_erro = 0;
var conta_acerto = 0;
var tentativa = 0;

function msg (msg){
    console.log ('=>:  ' + msg)
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
        x = Math.floor((Math.random() * 5) + 1);
        //console.log(x)
        
        if(i == 1){

            //document.getElementById("numero" + i).innerHTML = x;
            y = x + x
            //msg('Numero1 Valor random: '+ x +  ' soma: ' + y)

            a = x;
            //msg('If' + i +' ' + a) 

        }else if(i == 2){
              
                var y = x + x;
                //document.getElementById("numero" + i).innerHTML = x;
                //msg('Log par: ' + x +  ' soma: ' + y)
            
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
    
    //msg('Result Final ' + result_final)

    //document.getElementById('result_final').innerHTML = result_final
    
}


function random_dev(){
    operador = 0;
    operador2 = 0;
    
    for(var i = 1; i<= 2; i++){

        operador_random = Math.floor((Math.random() * 2) + 1);

        msg('FOR ' + i)
       
       
        msg('Random: ' + operador_random);

        if(i == 1){
            if(operador_random == 1){
               
                operador = '+'
                document.getElementById('muda' + i).innerText = operador;
            }else{
               
                operador = '-'
                document.getElementById('muda' + i).innerText = operador;
            }
            msg(operador)
        }else{
            if(operador_random == 1){
             
                operador2 = '+'
                document.getElementById('muda' + i).innerText = operador2;
            }else{
               
                operador2 = '-'
                document.getElementById('muda' + i).innerText = operador2;
            }

            msg(operador2)
        }

        result_final = eval (a +  operador + b + operador2 + c)
        
        // msg('Eu sou o 1: ' + operador_random + '\n' + ' Eu sou Random: ' + i)
       
    }
   
    if(result_final < 0){
        msg('Resultado errado: ' + result_final)
        result_final= result_final * -1;
    }

    
    

    
    msg('Resultado final: ' + result_final)
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