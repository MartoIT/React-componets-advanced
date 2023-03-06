const baseURL = 'http://localhost:3005/api/users';

export default  async function getOne(id){

    const response = await fetch(`${baseURL}/${id}`);
    const result = await response.json();
    return result.user;
}