var ctxEmocoes = document.getElementById('graficoEmocoes');
var ctxImpact = document.getElementById('graficoIntensidade');

function obterDadosGrafico() {
    buscarDadosEmocoes();
    buscarDadosIntensidades();
}

function buscarDadosEmocoes() {
    fetch(`/comentarios/buscarEmocoes`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(resultado => {
                console.log(resultado)
                plotarGraficoEmocoes(resultado);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGraficoEmocoes(resultado) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            data: []
        }]
    };

    for (i = 0; i < resultado.length; i++) {
        var registro = resultado[i];
        console.log(registro)
        labels.push(registro.tipo);
        dados.datasets[0].data.push(registro.total);
    }

    const config = {
            type: 'pie',
            data: dados,
        };

    let graficoEmocoes = new Chart(document.getElementById("graficoEmocoes"), config);

}

function buscarDadosIntensidades() {
    fetch(`/comentarios/buscarIntensidades`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(resultado => {
                console.log(resultado)
                plotarGraficoIntensidades(resultado);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGraficoIntensidades(resultado) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: "Quantidade",
            data: []
        }]
    };

    for (i = 0; i < resultado.length; i++) {
        var registro = resultado[i];
        console.log(registro)
        labels.push(registro.nivel);
        dados.datasets[0].data.push(registro.qtd);
    }

    const config = {
        type: 'bar',
        data: dados,
    };

    let graficoIntensidades = new Chart(document.getElementById("graficoIntensidade"), config);

}
