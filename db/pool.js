"use strict";
function mysql_pool(config) {
let mysql = require('mysql');
let pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config['mysql']['host'],
  user            : config['mysql']['user'],
  password        : config['mysql']['password']
});

return pool;
}
module.exports = mysql_pool
