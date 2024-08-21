

const allCommPrices = '	https://uexcorp.space/api/2.0/commodities_prices_all'
const randomImage = 'https://api.star-citizen.wiki/api/v2/comm-link-images/random'

const getData = (url) => {    
    const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    return fetch(url, options) // Return the promise
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`); 
            }
            return response.json(); 
        })
        .then(data => {
            return data; // This data will be returned to the caller
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            return null; // Optionally return null or an empty object/array if there's an error
        });        
}

const getGalactapedia = (query) => {
    return fetch('https://api.star-citizen.wiki/api/v2/galactapedia/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": query,
        })
    })
    .then(response => response.json())
    .then(data => {
        const result = data.data.find(dat => dat.type === 'PlanetMoonSpaceStationPlatform');
        return result ? result['thumbnail'] : null; // Return thumbnail if found, else return null
    })
    .catch(error => {
        console.error('Error:', error);
        return null; // Return null or handle error as needed
    });
};


export {
    getData,
    getGalactapedia
}