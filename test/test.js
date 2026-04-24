/* teste com os exemplos de w3 school*/
let result = "Not Active.";
let isActive = false;
console.log(result, isActive)

if (isActive === true) {
     result = "Active!";
}else{
    result = "Not Active"
}

console.log(result, isActive)

try{
    


}catch (erro){
    
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Stack:</strong> <span>${erro.stack} <br />
    `;

    document.body.innerHTML = text 

};



/*lançar um excessã (erro personalizado)*/

/*criar uma função geradora de erro*/

/* testando a função: carregarComponente 
01- Criar o componente que erá injetado 
02- Criar o elementoque irá receber o componente (no inex index.html) (<div id="app")
03- capturar o elemento que irpa receber o componente ( no index.html)
04- Utilizar a função para carregar o componente*/


/* criar uma promessa e consumir usando then e .catch*/

/* cosumir usando async/awaint e try.catch*/


