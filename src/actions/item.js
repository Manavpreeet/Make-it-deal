import * as api from '../api'

export const getItems = () => async (dispatch) => {
    try {
        const {data} = await api.getItems()
        console.log(data)
        dispatch({type: 'FETCH_ALL', payload: data.items})
    } catch (error) {
        console.log(error)
    }
}

export const createItem = (item) => async (dispatch) => {
    try {
        const { data } = await api.createItem(item)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
       console.log(error) 
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        await api.deleteItem(id)
        dispatch({type: "DELETE", payload: id})
    } catch (error) {
        console.log(error)
    }
}