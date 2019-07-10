import React, {Component, memo} from "react"
import axios from 'axios';

import {ObjectInspector} from 'react-inspector';

class Input extends Component {
    constructor(){
    super();
        this.state = {
            url: "",
            obj: "",
        }
    };

    handleClick = () => {
        axios
            .get(this.state.url)
            .catch(err=>console.log(err))
            .then(response=>this.setState({obj: response.data}))
    };

    onChangeHandle = (e) => {
        return this.setState({url: e.target.value})
    };

    render() {
        const { obj } = this.state;
        return (
            <div>
                {"JSON URL"}
                <input type="text" onChange={this.onChangeHandle}/>
                <input
                    type="button"
                    value="Show JSON"
                    onClick={this.handleClick}
                />
                <ObjectInspector data={obj} />
            </div>
        );
    };
};

export default memo(Input);