var ctxEmocoes = document.getElementById('graficoEmocoes');
var ctxImpact = document.getElementById('graficoIntensidade');

new Chart(document.getElementById("graficoEmocoes"), {
        type: "pie",
        data: {
            labels: ["Nostalgia", "Alegria", "Tristeza", "Calmaria", "Inspiração"],
            datasets: [{
                data: [10, 15, 6, 8, 12],
            }]
        }
    });


new Chart(document.getElementById("graficoIntensidade"), {
    type: "bar",
    data: {
        labels: ["Leve", "Médio", "Forte"],
        datasets: [{
            label: "Quantidade",
            data: [12, 8, 20]
        }]
    }
});