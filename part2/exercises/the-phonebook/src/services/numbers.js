import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(persons => persons.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then(persons => persons.data);
}

const update = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then(persons => persons.data);
}

const deletedItem = (id) => {

    const request = axios
        .delete(`${baseUrl}/${id}`)
        .catch(() => alert("Couldn't delete requested user."));

    return request;
}

export default { getAll, create, update, deletedItem };