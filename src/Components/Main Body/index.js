import React, {useEffect, useCallback, useState} from "react";
import Form from "./Form";
import Items from "./Items";
import Notation from "./Notation";
import * as api from '../../api/index.js'

const MainBody = () => {


    return (
        <div>
            <Notation/>
            <Form />
            <Items/>
        </div>
    )
}

export default MainBody