var database = require("../database/config");

function buscarEmocoes() {

  var instrucaoSql = 
  `SELECT tipo, total FROM view_quantidade_emocoes`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarIntensidades() {

  var instrucaoSql = 
  `SELECT nivel, qtd FROM view_quantidade_intensidades`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarFilmeMaisComentado() {

  var instrucaoSql = 
  `SELECT filme FROM view_filme_mais_comentado`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarEmocaoMaisComentada() {
    var instrucaoSql = 
    `SELECT emocao FROM view_emocao_mais_comentada;`;
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
