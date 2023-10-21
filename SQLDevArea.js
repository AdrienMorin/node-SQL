
const {verificationAPI, initialisation} = require('./APICaller');
const SQLQuery = require('./DatabaseCaller')

const SQLQueryString = `
    SELECT nom, prenom FROM employes WHERE etage = 11;
`;

initialisation();

//SQLQuery(SQLQueryString);

//verificationAPI(0,"enigme");