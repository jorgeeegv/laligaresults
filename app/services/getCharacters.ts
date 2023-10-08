export const getCharacters = async () => {
    const url = 'https://rickandmortyapi.com/api/character/?count=20'
    const options = {
        method: 'GET',
        headers: {}
    }
    return fetch(url, options).then(res => res.json())    
}
