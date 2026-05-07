document.addEventListener('DOMContentLoaded', function() {
    const estadosSelect = document.getElementById('estado');
    const municipiosSelect = document.getElementById('municipios');

    estadosSelect.addEventListener('change', async function () {
        const estadosSelect = estadosSelect.value;
        municipiosSelect.innerHTML ='<option value ="">Selecione um municipio</option>';
        municipiosSelect.disabled = true;

        if (estadosSelecionado) {
            const response = await fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos')
            const municipios = await response.json();
            municipios.forEach(municipios => {
                const option = document.createElement('option');
                option.value = municipios.id;
                option.textContent.appendChild(option);
            });
            municipiosSelect.disabled = false;
        }
    })

});



// const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos'
// const consulta = fetch(url);

