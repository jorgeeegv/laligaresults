export const getCharacter = async (id:number) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const options = {
        method: 'GET',
        headers: {}
    }
    return fetch(url, options).then(res => res.json())    
}