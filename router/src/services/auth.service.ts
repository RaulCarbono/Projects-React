const baseUrl = 'https://rickandmortyapi.com/api/';
const charaterUrl = baseUrl + 'character/'

export const getMorty = () => {
    return fetch(charaterUrl + '2').then(res => res.json())
};