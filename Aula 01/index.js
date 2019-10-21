/**
 * Imprime uma mensagem no
 *  console do browser
 */
console.log('Fala, negada! ');
//alert('Fala, negada! ');

/**
 * Pega o span cujo é id igual a "mensagem"
 * e coloca na variável mensagem.
 */
var mensagem = document.getElementById('mensagem');

// Coloca um texto dentro do span
mensagem.innerHTML = 'Fala, negada! ';


/**
 * Injeta um parágrafo dentro da div
 * "conteiner"
 * 
 */


// Cria uma tag p e Salva na variável parágrafo

var paragrafo = document.createElement('p');
paragrafo.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum semper placerat. 
Quisque vel sem in justo vehicula accumsan. Etiam eget orci convallis, mattis risus eget,
 ultrices diam. Donec ornare, ex vitae fermentum imperdiet, ligula leo tincidunt purus, vel semper massa tortor quis erat.
  Nunc nunc mauris, scelerisque et metus eget, lacinia bibendum leo. Donec bibendum fringilla porta. Praesent at massa magna. 
  Mauris nec ex scelerisque, ultricies est in, luctus mi. Aenean faucibus facilisis finibus.
`;

var conteiner = document.getElementById('conteiner');

/**
 * Anexa a tag de parágrafo dentro da
 * div conteiner
 * 
 */

conteiner.appendChild (paragrafo);

