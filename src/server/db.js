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

const DB = {
  find: async (condition, projection) => {
    const client = MongoClient(url, options);
    try {
      await client.connect();
      const db = client.db('templates');

      return await db.collection('customers').find(
        condition,
        { projection: projection }
      ).toArray();
    } finally {
      if (client) client.close();
    }
  }
}

module.exports.DB = DB;
