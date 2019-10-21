/**
 *
 * Nosso BD fake !
 * (in memory DB)
 */
 
var contatos = [
    
    {

        nome: 'Arthur Barros',
        telefone: '67 991106112',
        email: 'arthur@gmail.com',
        dataNascimento:'29/02/2001'


    }
    
    
];


renderizarTabelaContatos();
/**
 * recuperar algo que ta na minha página.
 * Cria um apelido 
 * para função querySelector
 */

//var sel = document.querySelector;

function salvarContato(event) {
    // Inibe a recarga da página

    event.preventDefault(); // função que inibe.

    /**
     * $ --> document.querySelector
     * val > value
     * 
     */

    //recupera os valor do formuário
    //let nome = document.querySelector('#nome').nodeValue;
    let nome = $ ('#nome').val();
    let telefone = $ ('#telefone').val();
    let email = $ ('#email').val();
    let dataNascimento = $ ('#dataNascimento').val();


    // Cria um objeto de contato
    let contato = {nome,telefone,email,dataNascimento}


    // Adiciona  o contato no nosso BD (no final do vetor)
    contatos.push(contato); // push no final do vetor

    // invoca a renderização da tabela
    renderizarTabelaContatos();


}


function renderizarTabelaContatos() {
   
    if(contatos.length > 0){
        let areaListagemContatos = document.getElementById('listagemContatos');

    
     areaListagemContatos.innerHTML = '';   


    /**
     * Cria tabela
     * 
     */

      let tabela = document.createElement('table');
      

      let cabecalho = criaCabecalhoTabela();


      // Adiciona o cabeçalho dentro da tabela
      tabela.appendChild(cabecalho);

      // Adiciona o copor da tabela na tabela  

      let  corpoTabela = criarCorpoTabela();
      tabela.appendChild(corpoTabela);

      // Adiciona a tebela na área de listagem

      areaListagemContatos.appendChild(tabela);


    }
}


function criaCabecalhoTabela(){

    /**
       * Cria o cabeçalho da tabela
       * 
       */
      let cabecalho = document.createElement('thead');

      let linhaCabecalho = document.createElement('tr');

      let colunaNome = document.createElement('th');
      colunaNome.innerText = 'Nome';

      let colunaTelefone = document.createElement('th');
      colunaTelefone.innerText = 'Telefone';

      let colunaEmail = document.createElement('th');
      colunaEmail.innerText = 'E-mail';

      let colunaDataNasc = document.createElement('th');
      colunaDataNasc.innerText = 'Data Nasc.';  

      // Adiciona as colunas na linha do cabeçalho      

      linhaCabecalho.appendChild(colunaNome);  
      linhaCabecalho.appendChild(colunaTelefone);
      linhaCabecalho.appendChild(colunaEmail);
      linhaCabecalho.appendChild(colunaDataNasc);

      // Adiciona a linha do cabeçalho no cabeçalho

      cabecalho.appendChild(linhaCabecalho);

    return cabecalho;


}


function criarCorpoTabela(){


    /**
     * Cria Corpo da tabela
     *  
     */

    let corpoTabela = document.createElement('tbody');


    /**
     * Cria a linha de contatos
     */

     for(let i = 0; i < contatos.length; i++){

        
        // Cria uma nova linha no corpo da tabela
     

        let linha = document.createElement('tr');
        
        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);

        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);

        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);

        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela 
        corpoTabela.appendChild(linha);

     }

     return corpoTabela;

}