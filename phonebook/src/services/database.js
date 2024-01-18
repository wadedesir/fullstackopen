import axios from 'axios'
const baseURl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURl)
    return request.then(response => response.data)
}

const create = (data) => {
    const request = axios.post(baseURl, data)
    return request.then(resp => resp.data)
}

const update = (id, data) => {
    const request = axios.put(`${baseURl}/${id}`, data)
    return request.then(resp => resp.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseURl}/${id}`)
    return request.then(resp => resp.data)
}

export default { getAll, create, update, remove }