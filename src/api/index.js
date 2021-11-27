import axios from 'axios'

const url = 'https://web-scraper-api-project.herokuapp.com/items'

export const getItems = () => axios.get(url)
export const createItem = (newItem) => axios.post(url, newItem)
export const deleteItem = (id) =>  axios.delete(`${url}/${id}`) 