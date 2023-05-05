const selectEstado = document.getElementById("estado");
const selectCidade = document.getElementById("cidade");
const selectBairro = document.getElementById("bairro");

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
    .then(estados => {
        estados.forEach(estado => {
            const option = document.createElement("option");
            option.value = estado.id;
            option.text = estado.nome;
            selectEstado.appendChild(option);
        });
    });

selectEstado.addEventListener("change", () => {
    const estadoId = selectEstado.value;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
        .then(response => response.json())
        .then(cidades => {
            selectCidade.innerHTML = "<option value=''>Selecione uma cidade</option>";
            cidades.forEach(cidade => {
                const option = document.createElement("option");
                option.value = cidade.id;
                option.text = cidade.nome;
                selectCidade.appendChild(option);
            });
        });
});

selectCidade.addEventListener("change", () => {
    const cidadeId = selectCidade.value;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeId}/distritos`)
        .then(response => response.json())
        .then(bairros => {
            selectBairro.innerHTML = "<option value=''>Selecione um bairro</option>";
            bairros.forEach(bairro => {
                const option = document.createElement("option");
                option.value = bairro.id;
                option.text = bairro.nome;
                selectBairro.appendChild(option);
            });
        });
});


