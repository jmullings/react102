
import React, { Component } from 'react';

import MainComponent from './Component';

class MainContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            dataFlow : {}
        }
    }

    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // Object.assign(this.state, json.serializeToStream());
                this.setState({
                    dataFlow: json
                });
            }).catch((r)=>{
            console.log(r)
        });
    }
    render() {
        return (
            <MainComponent 
                dataFlow={this.state.dataFlow}/>
        );
    }
}

export default MainContainer;