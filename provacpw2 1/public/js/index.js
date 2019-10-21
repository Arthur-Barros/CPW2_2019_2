function verificar(){
    var texto1 = document.getElementById("texto1").value;
    var resposta = "";
    //if(texto1) {
        //reposta = 'Resultado: ' + texto1 ;
        //resposta = `Resultado: ${texto1}`; // mesma coisa do de cima.
    //}  
    
    texto1 = texto1.toLowerCase();
    texto1 = texto1.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    while(texto1.indexOf(" ") != -1){
    texto1 = texto1.replace(" ","");
    }
    while(texto1.indexOf(",")!= -1){
    texto1 = texto1.replace(",","");
    }
    while(texto1.indexOf("?") != -1){
    texto1 = texto1.replace("?","");
    }
    while(texto1.indexOf(".") != -1){
    texto1 = texto1.replace(".","");
    }
    while(texto1.indexOf("!") != -1){
    texto1 = texto1.replace("!","");
    }
    //texto1 = texto1.trim();
    
    texto2 = texto1.split('').reverse().join('');

    if(texto1){
    //reverter funções.
    //texto2=texto2.split();
    //texto2=texto2.reverse();
     //texto2=texto2.join();
    if(texto1 == texto2){
        resposta = `É polindromo:  ${texto1} é igual á: ${texto2}` ;
    }else{
        resposta = `Não é polindrome: ${texto1} é diferente: ${texto2}`;
    }
}
    document.getElementById('resposta').innerHTML = resposta; // para  imprimir o texto
    

}
function verificarcontido(){
    let mensagem = "";
    let texto3 = document.getElementById("texto3").value.toLowerCase();
    let texto4 = document.getElementById("texto4").value.toLowerCase();
   

    if(texto3 && texto4){
        if(texto3.includes(texto4)){
            mensagem = `Contido: ${texto3} ${texto4}`; 
        }else{
            mensagem =` Não está contido: ${texto3} ${texto4}`;
        }
    }

    document.getElementById('resultado').innerHTML = mensagem;

}

