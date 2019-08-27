const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://mongo:27017/';
const options = {
  auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const Templates = {
  get: async () => {
    const client = new MongoClient(url, options);

    try {
      // Connect to MongoDB
      await client.connect();

      // Database
      const db = client.db('templates');

      // Find collection `customers`
      const result = await db.collection('customers').find().toArray();

      if (result.length === 0) {
        // TODO
        return '{ "error": "Failed to connect MongoDB" }';
      }

      return JSON.stringify(result[0]);
    } catch (err) {
      console.log(err.stack);
      return '{ "error": "Failed to connect MongoDB" }';
    } finally {
      if (client) client.close();
    }
  },
  insert: async customerName => {

  },
  update: async customerName => {

  }
};

module.exports.Templates = Templates;
