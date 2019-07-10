import React, { memo, useEffect, useState } from "react"
import {ObjectInspector} from 'react-inspector';

const Output = ({obj}) => {
    const [json, setJson] = useState(obj);

    useEffect((obj)=>{
        setJson(json);
        // if (obj !== undefined) {updatedJson = <ObjectInspector data={obj} />}
    });

    useEffect(() => { console.log(obj) });

        return (
            <div>
                {json !== undefined ? <ObjectInspector data={json}/> : null}
            </div>
        );
    };


export default memo(Output);

//https://swapi.co/api/people