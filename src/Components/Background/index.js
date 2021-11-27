import React from 'react'
import blobOne from '../../images/background1.svg'
import blobTwo from '../../images/background2.svg'

import classes from './style.module.css'

const Background = () => {
    return <div>
        <img className={classes.leftBlob} alt="Blob 1" src={blobOne}/>
        <img className={classes.rightBlob} alt="Blob 2" src={blobTwo}/>
    </div>
}

export default Background