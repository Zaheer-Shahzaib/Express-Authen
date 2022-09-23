const mysql = require('mysql');
 


const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
   dialect:'mysql',
   database:"authorization_and_authentication"
})


 
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Mysql");
    // connection.query("CREATE DATABASE authorization_and_authentication", function (err, result) {
    //   if (err) throw err;
    //   console.log("ExampleDB database created");
    // });
  });

//   connection.query('CREATE TABLE user_auth_author (' +
//           'id int(11) NOT NULL AUTO_INCREMENT,' +
//           'user_name varchar(255) NOT NULL,' +
//           'role varchar(255) default "employee",' +
//           'email varchar(255) NOT NULL,' +
//           'password varchar(255) NOT NULL,' +
//           'PRIMARY KEY (id),'+
//           'UNIQUE KEY email_UNIQUE (email),' +
//           'UNIQUE KEY password_UNIQUE (password))', function (err, result) {
//               if (err) throw err;
//               console.log("User created");
//             }
//          );
    ////the queries to for crud operations

    let db = {};
    db.allUser=()=>{
        return new Promise((reslove,reject)=>{
            connection.query("SELECT * FROM user_auth_author", (error,user)=>{
                if (error) {
                    return reject(error)
                }
                return reslove(user)
            })

        })
    }

/// get user by email 
db.getUserByEmail= function getUserByEmail(email){

    return new Promise((reslove, reject)=>{
        connection.query("SELECT * FROM user_auth_author WHERE email=?", [email],(error,user)=>{
            if(error){
                return reject(error);
            }
            return reslove(user[0]);
        })
    })
}


db.insertUser = (userName, email, password) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO user_auth_author (user_name, email, password) VALUES (?,  ?, ?)', [userName, email, password], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertUser);
        });
    });
};
 
 
db.updateUser = (userName, role, email, password, id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE user_auth_author SET user_name = ?, role= ?, email= ?, password=? WHERE id = ?', [userName, role, email, password, id], (error)=>{
            if(error){
                return reject(error);
            }
             
              return resolve();
        });
    });
};
 
 
 
db.deleteUser = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('DELETE FROM user_auth_author WHERE id = ?', [id], (error)=>{
            if(error){
                return reject(error);
            }
            return resolve(console.log("User deleted"));
        });
    });
};
 
 
 
    
  module.exports=connection;