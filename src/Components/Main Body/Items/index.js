import React, {useState, useEffect, useCallback} from "react";
import classes from './style.module.css'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import Item from "./item";

const Items = () => {

    const items = useSelector(state => state.items)

    console.log(items)

    return (
        !items.length ? <CircularProgress className={classes.circularProgressBar}/> : (<div className={classes.resultContainer}>
            <h1 className={classes.resultHeading}>Result</h1>
            <div className={classes.itemContainer}>
                {items.map( item => <Item data={item}/>)}
            </div>
        </div>)
    )
}

export default Items 