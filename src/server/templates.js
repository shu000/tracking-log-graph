const { DB } = require('./db');
const sanitize = require('mongo-sanitize');

const Templates = {
  getCustomers: async () => {
    try {
      const result = await DB.find({}, { customerName: 1 });

      return JSON.stringify({
        result: result.map(obj => {
          return obj.customerName
        })
      });
    } catch (error) {
      return returnError(error);
    }
  },
  getTemplate: async customerName => {
    try {
      const result = await DB.find({ customerName: sanitize(customerName) }, {});

      return JSON.stringify({
        result: result[0] // customerName is primaryKey
      });
    } catch (error) {
      return returnError(error);
    }
  }
}

function returnError(error) {
  console.log(error.stack);
  return JSON.stringify({
    error: 'Failed to connect Database.',
    message: error.message
  });
}

module.exports.Templates = Templates;
