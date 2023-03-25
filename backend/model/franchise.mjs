import connection from '../dbConnection.mjs';
import { v4 } from 'uuid';

const Franchise={}

Franchise.getAllFranchises = () =>{
  return new Promise((resolve, reject)=>{
    connection.query('SELECT * FROM Franchise',  (error, results)=>{
          if(error){
              return reject(error);
          }
          return resolve(results);
      });
  });
};

Franchise.addFranchise = (Franchise) =>{
  const franchise_id = v4()
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO Franchise (id, phone, email) VALUES (?, ?, ?)`, [franchise_id,Franchise.phone,Franchise.email], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
}
        
export default Franchise;