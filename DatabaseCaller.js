const mysql = require('mysql2/promise');

// Create a MySQL connection
const dbConfig = {
    host: 'db4free.net',
    user: 'insa_team',
    password: 'insa_team69',
    database: 'labasededonnees'
};

async function SQLQuery(query) {
    let connection;
    try {
        // Ouvrir la connexion à la base de données
        connection = await mysql.createConnection(dbConfig);

        // Exécuter la requête
        const [results, fields] = await connection.execute(query);

        // Calculer la largeur maximale pour chaque colonne
        const columnWidths = fields.map(field => field.name.length);
        for (const row of results) {
            Object.values(row).forEach((value, index) => {
                columnWidths[index] = Math.max(columnWidths[index], value.toString().length);
            });
        }

        // Afficher le résultat sous forme de tableau
        console.log('Résultat de la requête :');

        // Afficher les noms de colonnes avec espaces ajustés
        console.log(fields.map((field, index) => field.name.padEnd(columnWidths[index])).join('  '));

        for (const row of results) {
            // Afficher les valeurs de chaque ligne avec espaces ajustés
            console.log(Object.values(row).map((value, index) => value.toString().padEnd(columnWidths[index])).join('  '));
        }

        // Fermer la connexion
        await connection.end();

        return results;
    } catch (error) {
        console.error('Erreur lors de la requête SQL :', error);
        if (connection) {
            await connection.end();
        }
        throw error;
    }
}


module.exports = SQLQuery;