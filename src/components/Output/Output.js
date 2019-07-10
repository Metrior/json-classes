import React from "react"
import propTypes from 'prop-types';
import {ObjectInspector} from 'react-inspector';

const Output = ({object}) => {
        return (
            <div>
                {object !== "" ? <ObjectInspector data={object}/> : null}
            </div>
        );
    };

Output.propTypes = {
    object: propTypes.string,
};

Output.defaultProps = {
    object: "",
};

export default Output;