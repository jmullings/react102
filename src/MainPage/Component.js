import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';

const MainComponent = props => {

    console.log(props.dataFlow)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h2>API Pulled Data</h2>
                <textarea value={JSON.stringify(...props.dataFlow)} style={{width:"50%", height:"200px"}}>
                </textarea>

                <p>fetch("https://jsonplaceholder.typicode.com/comments?postId=1")</p>
            </div>
        );

}

export default MainComponent;