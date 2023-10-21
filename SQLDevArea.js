
const {verificationAPI, initialisation} = require('./APICaller');
const SQLQuery = require('./DatabaseCaller')

const SQLQueryString = `
    SELECT * 
    FROM coffreFort;
`;

initialisation();

//SQLQuery(SQLQueryString);

//verificationAPI(0,"enigme");