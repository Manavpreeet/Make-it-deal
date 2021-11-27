import React from "react";

import classes from './style.module.css'

const TopBar = (props) => {
    return (
        <div>
            <h1 className={classes.heading}>Web<span className={classes.highlight}>Scrapper</span></h1>
        </div>
    )
}

export default TopBar