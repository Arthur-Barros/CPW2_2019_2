function contido() {
    let str1 = document.getElementById('texto1').value.toLowerCase();
    let str2 = document.getElementById('texto2').value.toLowerCase();
    let resposta = '';

    if(str1 && str2){
        if (str1.includes(str2)){
            resposta = `Está contido`;
        }else{
        resposta = `Não está contido`; 
        }
    }
    document.getElementById('resultado').innerHTML = resposta;  
}

function palindromo(){
    let frase = '';
    let palavra = document.getElementById('palavra').value;
    let minuscula = palavra.toLowerCase();
    palavra = minuscula.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    console.log(minuscula);
    if(palavra){
      let reversa = palavra.split('').reverse().join('');
      console.log(reversa);
      if(palavra === reversa){
        frase = 'É palíndromo'
      }else{
        frase = 'Não é palíndromo'
      }
    }

    document.getElementById('frase').innerHTML = frase;  
}
