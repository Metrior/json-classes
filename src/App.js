import React, {Component} from 'react';
import './App.css';
import Output from "./components/Output/Output";
import axios from "axios";
import Input from "./components/Input/Input";

class App extends Component {
    constructor(){
        super();
        this.state = {
            url: "",
            obj: "",
        }
    };

    handleClick = async () => {
        await axios
            .get(this.state.url)
            .then(response=>this.setState({obj: response.data}))
    };

    onChangeHandle = (e) => {
        return this.setState({url: e.target.value})
    };


    render() {
        const { url, obj } = this.state;
        return (
            <div className="App">
                <Input object={obj} url={url} handleClick={this.handleClick} onChangeHandle={this.onChangeHandle}/>
                <Output object={obj}/>
            </div>
        );
    }
}

export default App;
