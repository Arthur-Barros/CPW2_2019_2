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
        dataNascimento: '29/02/2001'


    },
    {

        nome: 'Lucas Paniago',
        telefone: '67 996666666',
        email: 'LucasPaniago@gmail.com',
        dataNascimento: '23/05/1987'


    },
    {

        nome: 'Lucas Negri',
        telefone: '67 991106112',
        email: 'Lucas@gmail.com',
        dataNascimento: '22/07/1985'


    },



];


renderizarTabelaContatos(contatos);
renderizarCardsContatos(contatos);



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
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();


    // Cria um objeto de contato
    let contato = { nome, telefone, email, dataNascimento }


    // Adiciona  o contato no nosso BD (no final do vetor)
    contatos.push(contato); // push no final do vetor

    // invoca a renderização da tabela
    renderizarTabelaContatos(contatos);

    // Invoca a renderização dos Cards
    renderizarCardsContatos(contatos);

}


function renderizarTabelaContatos(listaContatos) {

    if (listaContatos.length > 0) {
        let areaListagemContatos = document.getElementById('tabelaContatos');


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

        let corpoTabela = criarCorpoTabela(listaContatos);
        tabela.appendChild(corpoTabela);

        // Adiciona a tebela na área de listagem

        areaListagemContatos.appendChild(tabela);


    }
}


function criaCabecalhoTabela() {

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


function criarCorpoTabela(listaContatos) {


    /**
     * Cria Corpo da tabela
     *  
     */

    let corpoTabela = document.createElement('tbody');


    /**
     * Cria a linha de contatos
     */

    for (let i = 0; i < listaContatos.length; i++) {


        // Cria uma nova linha no corpo da tabela


        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = listaContatos[i].nome;
        linha.appendChild(celulaNome);

        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = listaContatos[i].telefone;
        linha.appendChild(celulaTelefone);

        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = listaContatos[i].email;
        linha.appendChild(celulaEmail);

        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = listaContatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela 
        corpoTabela.appendChild(linha);

    }

    return corpoTabela;

}

function renderizarCardsContatos(listaContatos) {
    if (listaContatos.length > 0) {
        let areaListagemContatos = document.getElementById('cardsContatos');

        //Limpa a área de listagem

        areaListagemContatos.innerHTML='';

        /**
         * Ao invés de usar um loop, utilizaremos a função forEach
         */


        listaContatos.forEach(function (contato) {
            let card = document.createElement('div');
            let inicialNome = document.createElement('span');
            inicialNome.innerText = contato.nome.charAt(0);
            let nome = document.createElement('span');
            let tamanhoNome = contato.nome.length;
            nome.innerText = contato.nome.substr(1, tamanhoNome);
            let telefone = document.createElement('span');
            telefone.innerText = contato.telefone;
            let email = document.createElement('span');
            email.innerText = contato.email;
            let dataNasc = document.createElement('span');
            dataNasc.innerText = contato.dataNascimento;

            card.appendChild(inicialNome);
            card.appendChild(nome);
            card.appendChild(telefone);
            card.appendChild(email);
            card.appendChild(dataNasc);
            areaListagemContatos.appendChild(card);
        });

    }
}

function filtrarContatos() {

    //Se tiver pelo menos um contatos

    if (contatos.length > 0) {
        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();

        /**
         * Filtra os contatos de acordo com o texto digitado pelo usuário no campo de filtro
         */
        let contatosFiltrados = contatos.filter(function(contato){
            let nome = contato.nome.toLowerCase();
            let email = contato.email.toLowerCase();

            /**
             * Se o nome ou e-mail do contato conter o filtro do usuário, retorno o contato
             */

            if(nome.includes(filtro)|| email.includes(filtro)){
                return contato;
            }
        });

        renderizarCardsContatos(contatosFiltrados);
        renderizarTabelaContatos(contatosFiltrados);

    }
}