var database = require("../database/config");

// function buscarAquariosPorEmpresa(empresaId) {

//   var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

function enviar(usuario, filme, comentario, emocao, intensidade) {
  
  var instrucaoSql = `INSERT INTO comentarios (id_usuario, id_filme, comentario, id_emocao, id_intensidade) VALUES (${usuario}, ${filme}, ${comentario}, ${emocao}, ${intensidade})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
 enviar
}
