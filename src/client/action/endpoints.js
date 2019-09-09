const HOST = 'http://127.0.0.1';
const PORT = process.env.APP_PORT;
const api_endpoint = HOST + ':' + PORT + '/api/';

export const GET_CUSTOMERS = api_endpoint + 'customers';

export const ADD_CUSTOMER =  api_endpoint + 'customers/add';

export const DELETE_CUSTOMER = api_endpoint + 'customers/delete';

export const GET_TEMPLATE = api_endpoint + 'template';

export const UPDATE_TEMPLATE = api_endpoint + 'template/update';
