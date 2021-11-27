import React from "react";
import classes from './style.module.css'
const Item = (props) => {
    return <div className={classes.container}>
        <div className={classes.itemImage}>
            <img src={props.data.imgSrc} alt={props.data.title}/>
        </div>
        <div className={classes.textContainer}>
            <h3 className={classes.title}>
                {props.data.title}
            </h3>
            <h2 className={classes.price}>
            Price: {props.data.price}
            </h2>
            <h2 className={classes.expectedPrice}>
            Expected Price: {props.data.expectedPrice}
            </h2>
        </div>
    </div>
}

export default Item