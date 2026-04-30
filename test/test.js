// /* teste com os exemplos de w3 school*/
// let result = "Not Active.";
// let isActive = false;
// console.log(result, isActive)

// if (isActive === true) {
//      result = "Active!";
// }else{
//     result = "Not Active"
// }

// console.log(result, isActive)

// try{
    


// }catch (erro){
    
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Stack:</strong> <span>${erro.stack} <br />
//     `;

//     document.body.innerHTML = text 

// };



/* testando a função: carregarComponente 
01- Criar o componente que erá injetado 
02- Criar o elementoque irá receber o componente (no inex index.html) (<div id="app")
03- capturar o elemento que irpa receber o componente ( no index.html)
04- Utilizar a função para carregar o componente*/


/* criar uma promessa e consumir usando then e .catch*/

/* cosumir usando async/awaint e try.catch*/



// const carregarComponente = async (caminho, container) => {
//     try{
//         const resposta = await fetch (caminho);

//         // valido resposta status
//         if (!resposta.ok) {
//             throw new Error ('Erro ao comprar componente');
//         }
//         // converte para texto 
//         const html = await resposta.text();

//         // injeto no DOM
//         constainer.innerHTML = html;

//     }catch (erro) {
//         console.warn(erro);
//     }
// };

// const url = 'c-test.html'
// const containerTest = document.querySelector('#app');
// carregarComponente(url, containerTest);


//carregarComponente('c-test.html', document.querySelector('body'))


/*lançar um excessã (erro personalizado)*/

// try {

//     let idade = 2;
    
//     if (idade < 0) {
//         let erro = new Error('Idade Inválida');
//         erro.codigo = 1001;
//         erro.tipo = 'VALIDACAO';

//         throw erro;
//     }

//     } catch (erro) {

//         let text = `
//     <strong> Nome do erro: <strong> ${erro.name} <br />
//     <strong> Mensagem: </strong> ${erro.message} <br />
//     <strong> Código: </strong> ${erro.codigo} <br />
//     <strong> Tipo: </strong> ${erro.tipo} <br />
//     <strong> Stack: </strong> <span> ${erro.stack}</span>
//     `;

//     document.body.innerHTML = text;
    
// };


// /*criar uma função geradora de erro*/


// const criarErro = (mensagem, codigo, tipo) => {
//     let erro = new Error(mensagem);
//     erro.codigo = codigo;
//     erro.tipo = tipo;
//     return erro;

// };

// try{
//     let saldo = 1;

//     if(saldo <0) {
//         throw criarErro ( 'Saldo Insuficiente', 10, 'financeiro');
//     }
// }catch (erro) {
//     console.log (erro); 
// };


const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);
consulta 
.then((resposta) => {

        if(!response.ok){
            throw new Error ('Erro na Requisição.')
        }
        return response.json()
        
    }) 
    .then((dados) => {

        if (dados.erro){
            throw new Error ('CEP invalido ou não encontrado.')
        }
        console.log (dados)

    })  
    .catch((error) => {
        console.warn(erro.message)

    });

