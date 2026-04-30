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