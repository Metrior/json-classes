import React from "react"
import propTypes from 'prop-types';

const Input = ({onChangeHandle, handleClick}) => {
        return (
            <div>
                {"JSON URL"}
                <input type="text" onChange={onChangeHandle}/>
                <input
                    type="button"
                    value="Show JSON"
                    onClick={handleClick}
                />
            </div>
        )
};

Input.propTypes = {
    handleClick: propTypes.func,
    onChangeHandle: propTypes.func,
};

Input.defaultProps = {
    handleClick: () => {
        console.log('handleClick callback is not specified');
    },
    onChangeHandle: () => {
        console.log('onChangeHandle callback is not specified');
    },
};

export default Input