"use strict";
class Users {
    constructor() {
        
        let config = require('./setup.js');
        let MysqlPool = require('./pool.js');
        this.pool = new MysqlPool(config);

    }

    findById(id, cb) {
        let that = this;
        process.nextTick(function() {
        
        
            that.pool.query('SELECT * FROM eric.user where id=' + id, function(err, rows, fields) {
                  if (err) throw err;
                  if (rows.length > 0) {
                      cb(null, rows[0]);
                  } else {
                      cb(new Error('User ' + id + ' does not exist'));
                  }
            });
        })
    }

    findByUsername(username, cb) {
        let that = this;
        process.nextTick(function() {
            that.pool.query("SELECT * FROM eric.user where username='" + username + "'", function(err, rows, fields) {
                if (err) throw err;
                if (rows.length > 0) {
                    cb(null, rows[0]);
                } else {
                   return cb(null, null);
                }
            });

        });
    }
}

module.exports = new Users;

