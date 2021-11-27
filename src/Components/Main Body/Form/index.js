import React, { useState } from "react";
import {useDispatch} from "react-redux"
import classes from './style.module.css'
import { createItem } from '../../../actions/item.js'

const Form = (props) => {

    const dispatch = useDispatch()
    const [isTouched, setIsTouched] = useState(false)
    const [data, setData] = useState({url: '', email: '', expectedPrice: null})

    const onTouchHandler = () => {
        setIsTouched(true)
    }

    const submitHandler = (e) => {

        e.preventDefault()
        setIsTouched(false)
        
        try {
            console.log("Submitting data")
            dispatch(createItem(data))
            
        } catch (error) {
            console.log(error)
        }
        
        clearForm()
    }

    const clearForm = () => {
        setData({url: '', email: '', expectedPrice: null})
    }

    const urlChangeHandler = (e) => {
        setData({...data, url: e.target.value})
    }

    const expectedPriceChangeHandler = (e) => {
        setData({...data, expectedPrice: e.target.value})
    }

    const emailChangeHandler = (e) => {
        setData({...data, email: e.target.value})
    }
    

    return <div>
        <form onSubmit={submitHandler}>
            <input className={classes.inputField} type="url" placeholder="Enter product link" onClick={onTouchHandler} value={data.url} onChange={urlChangeHandler}/>
            {isTouched && <input className={classes.inputField} type="number" placeholder="Enter expected price" value={data.expectedPrice} onChange={expectedPriceChangeHandler}/>}
            {isTouched &&<input className={classes.inputField} type="email" placeholder="Enter email ID" value={data.email} onChange={emailChangeHandler}/>}
            {isTouched &&<div className={classes.wrapper}>
                <button className={classes.button} >GO</button>
            </div>}
        </form>
    </div>
}

export default Form