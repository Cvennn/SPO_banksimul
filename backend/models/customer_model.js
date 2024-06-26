const db=require('../database');

const customer={
    getAllCustomer(callback){
        return db.query('SELECT * FROM customer',callback);
    },
    getOneCustomer(id,callback){
        return db.query('SELECT * FROM customer WHERE idcustomer=?',[id],callback);
    },
    addCustomer(newCustomer, callback){
        return db.query('INSERT INTO customer(fname,lname,city,birthdate) VALUES(?,?,?,?)',[newCustomer.fname,newCustomer.lname,newCustomer.city,newCustomer.birthdate], callback);
    },
    updateCustomer(id, updateData, callback){
        return db.query('UPDATE customer SET fname=?,lname=?,city=?,birthdate=? WHERE idcustomer=?',[updateData.fname, updateData.lname, updateData.city, updateData.birthdate, id], callback);
    },
    deleteCustomer(id, callback){
        return db.query('DELETE FROM customer WHERE idcustomer=?',[id],callback);
    }

}

module.exports=customer;