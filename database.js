
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

    const data = {
        "First name" : "Aniket",
        "last name" : "Kumar",
        "city" : "Muzaffarpur Bihar",
        "Phone Number" : 7352149707
    }

    //READ
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //INSERT
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);
    
    
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
