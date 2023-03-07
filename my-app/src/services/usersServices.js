const baseURL = 'http://localhost:3005/api/users';

exports.getAll = async() =>{

    const response = await fetch(baseURL);
    const result = await response.json();
    return result;
}

exports.getOne = async (id) =>{

    const response = await fetch(`${baseURL}/${id}`);
    const result = await response.json();
    return result.user;
}
