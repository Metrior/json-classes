import React, { memo, useEffect, useState } from "react"
import {ObjectInspector} from 'react-inspector';

const Output = ({object}) => {
        return (
            <div>
                {object !== "" ? <ObjectInspector data={object}/> : null}
            </div>
        );
    };


export default memo(Output);