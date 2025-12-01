var database = require("../database/config");

function buscarEmocoes() {

  var instrucaoSql = 
  `SELECT e.tipo AS tipo, COUNT(c.id_emocao) AS total FROM comentarios c JOIN emocoes e ON e.id_emocao = c.id_emocao GROUP BY e.tipo;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarIntensidades() {

  var instrucaoSql = 
  `SELECT i.nivel AS nivel, COUNT(c.id_intensidade) AS qtd FROM comentarios c JOIN intensidades i ON i.id_intensidade = c.id_intensidade GROUP BY i.nivel;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarFilmeMaisComentado() {

  var instrucaoSql = 
  `SELECT f.nome AS filme FROM comentarios c JOIN filmes f ON f.id_filme = c.id_filme GROUP BY f.nome ORDER BY COUNT(f.id_filme) DESC`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarEmocaoMaisComentada() {
    var instrucaoSql = `
        SELECT e.tipo AS emocao FROM comentarios c JOIN emocoes e ON e.id_emocao = c.id_emocao GROUP BY e.tipo ORDER BY COUNT(e.id_emocao) DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(usuario, filme, comentario, emocao, intensidade) {
  
  var instrucaoSql = `INSERT INTO comentarios (id_usuario, id_filme, comentario, id_emocao, id_intensidade) VALUES (${usuario}, ${filme}, '${comentario}', ${emocao}, ${intensidade})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  enviar,
  buscarEmocoes,
  buscarIntensidades,
  buscarFilmeMaisComentado,
  buscarEmocaoMaisComentada
}
