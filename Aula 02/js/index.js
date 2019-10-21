function exibirMensagem (){
    let nome = document.getElementById('nome').value;//recuperar a tag(exemplo um nome que foi digitado)
    console.log(nome); // aparecer no console
    //if(nome){ // para não aparecer, caso não tenha nada digitado
        let mensagem = nome ? `Olá, ${nome}!` : ''; // Olá + o nome que for digitado na janela.
        document.getElementById('mensagem').innerHTML = mensagem;// jogar na div onde a mensagem deve ser digitada.  
}

