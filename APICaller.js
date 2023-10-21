async function verificationAPI(questionNumber, answer) {
    // URL de l'API que vous souhaitez appeler
    const apiUrl = 'https://bdd-validator.vercel.app/' + questionNumber + '/' + answer;

    //console.log("Appel de l'API à l'URL : " + apiUrl);

    // Effectuer une requête GET à l'API
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erreur de requête : ${response.status}`);
        }
        let data = await response.text(); // Attendre la conversion du texte
        console.log(data);
        return data; // Vous pouvez également retourner les données ici si nécessaire
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

async function initialisation() {
    // URL de l'API que vous souhaitez appeler
    const apiUrl = 'https://bdd-validator.vercel.app/';

    //console.log("Appel de l'API à l'URL : " + apiUrl);

    // Effectuer une requête GET à l'API
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erreur de requête : ${response.status}`);
        }
        let data = await response.text(); // Attendre la conversion du texte
        console.log(data);
        return data; // Vous pouvez également retourner les données ici si nécessaire
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}


module.exports = {
    verificationAPI,
    initialisation
};
