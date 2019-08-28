const MongoClient = require('mongodb').MongoClient;
const sanitize = require('mongo-sanitize');

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
  get: async (name) => {
    const client = new MongoClient(url, options);

    try {
      // Connect to MongoDB
      await client.connect();

      // Database
      const db = client.db('templates');

      // Find collection `customers`
      const result = await db.collection('customers').find({
        name: sanitize(name)
      }).toArray();

      if (result.length === 0) {
        return JSON.stringify({
          error: 'Not found your input name.' // TODO: constantify
        });
      }

      // `name` is primary key
      return JSON.stringify({
        result: result[0]
      });
    } catch (err) {
      console.log(err.stack);
      return JSON.stringify({
        error: 'Failed to connect MongoDB'
      });
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
