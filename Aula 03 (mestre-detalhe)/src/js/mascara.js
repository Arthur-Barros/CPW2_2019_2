/**
 * Utilizaremos a variável global
 * do jQuery ($) para carregar
 *  a máscara de telefone assim
 *  que a página for carregada
 */

$(document).ready(function(){ 
    //implementa a máscara de telefone
    //document.getElementById('telefone')
    $('#telefone').mask('(00) 00000-0000');

} );
    