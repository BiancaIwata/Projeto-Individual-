
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
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            scales: {
                x: {
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    }

    let graficoIntensidades = new Chart(document.getElementById("graficoIntensidade"), config);

}

function obterDadosKPIs() {
    buscarEmocaoMaisComentada();
    buscarUsuariosTotal();
    buscarFilmeMaisComentado();
}

function buscarEmocaoMaisComentada() {
    fetch(`/comentarios/buscarEmocaoMaisComentada`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(resultado => {
                console.log(resultado)
                kpiEmocaoMaisComentada.innerHTML = resultado.emocao;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function buscarUsuariosTotal() {
    fetch(`/usuarios/buscarUsuariosTotal`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(resultado => {
                console.log(resultado)
                kpiUsuariosTotal.innerHTML = resultado.total_usuarios;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    })
}

function buscarFilmeMaisComentado() {
    fetch(`/comentarios/buscarFilmeMaisComentado`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(resultado => {
                console.log(resultado)
                kpiFilme.innerHTML = resultado.filme;
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    })
}