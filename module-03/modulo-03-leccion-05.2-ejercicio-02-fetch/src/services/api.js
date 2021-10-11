// Fichero src/services/api.js

const callToApi = (searchData) => {
    // Llamamos al API
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchData}`)
        .then(response => response.json())
        .then(response => {
            // Cuando responde el API podemos limpiar los datos aquí
            const result = response.map(item => {
                return {
                    name: item.show.name,
                    language: item.show.language,
                };
            });
            return result;
});
};

export default callToApi;