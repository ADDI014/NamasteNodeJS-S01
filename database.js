
const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://ankit2237129aiml:Ankit132asdf@alok.iadhh.mongodb.net/"

const client = new MongoClient(URI);

const dbName = 'Helloworld';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');


  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
