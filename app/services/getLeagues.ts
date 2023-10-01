export const getLeagues = async () => {
    const url = 'https://api-football-beta.p.rapidapi.com/leagues'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                'afc6f2139dmshe259958db0c5711p1b27c9jsne354e12ddc75',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
        },
    }
    return fetch(url, options).then(res => res.json())    
}
