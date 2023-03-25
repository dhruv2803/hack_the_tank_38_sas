import connection from '../dbConnection.mjs';

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
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO Franchise (id, phone, email) VALUES (?, ?, ?)`, [Franchise.id,Franchise.phone,Franchise.email], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
}
        
export default Franchise;