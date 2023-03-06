const baseURL = 'http://localhost:3005/api/users';

export default  async function getAll(){

    const response = await fetch(baseURL);
    const result = await response.json();
    return result;
}