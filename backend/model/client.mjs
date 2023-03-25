import connection from '../dbConnection.mjs';

const Client={}

Client.getAllClients = () =>{
  return new Promise((resolve, reject)=>{
    connection.query('SELECT * FROM client',  (error, results)=>{
          if(error){
              return reject(error);
          }
          return resolve(results);
      });
  });
};

Client.addClient = (client) =>{
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO client (id, phone, email) VALUES (?, ?, ?)`, [client.id,client.phone,client.email], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
}
        
export default Client;