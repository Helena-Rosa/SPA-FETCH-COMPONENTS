const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);
const btn_1 = document.querySelector ('.btn_1')
const btn_2 = document.querySelector ('.btn_2')

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

const input = document.querySelector('.input_cep');

const url = `https://viacep.com.br/ws/${input}/json/`;


async function buscarDados() {
    try 
        console.log("Buscando...");
        
        
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error("Erro de conexão com o servidor.");
        }

        
        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }
    }









    const url = 'https://viacep.com.br/ws/01001000/json/';
    const consulta = fetch(url);

    async function cep(){
        let mensagem = await consulta;
        console.log (mensagem)
        let data = await mensagem.json();
        console.log(data);

    };

    cep();
