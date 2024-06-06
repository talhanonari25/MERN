const {MongoClient}=require('mongodb');

const url = 'mongodb://localhost:27017';
const databaseName = 'mern'
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('mern_db');
}

module.exports = dbConnect;