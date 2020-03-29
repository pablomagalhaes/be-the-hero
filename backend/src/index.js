const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// app.use(cors({
//   origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas / Recursos:
 */

/**
 * Métodos HTTP:
 * 
 * GET:Buscar/listar uma informação do back-end
 * POST:criar uma informaçao no back-end
 * PUT: alterar uma informaçao
 * DELETE: deletar uma informação no back-end
 * 
 */


/**
 * Tipos de parâmetros:
 * 
 * 
 * Query: Parametros nomeados na enviados na rota após "?" ( geralmente serve para filtros , paginação)
 * Route Params: Parametros utilizados para identificar recursos ( /:id)
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */


 /**
  * SQL: Mysql, Sqlite, PostgreSQL, Oracle, Microsoft Sql Server
  * NoSQL: MOngoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */




app.listen(3333);