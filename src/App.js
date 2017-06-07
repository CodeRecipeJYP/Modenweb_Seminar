import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './SomeWhatComponent';
import SomeWhatComponent from "./SomeWhatComponent";
import MyComponent from "./MyComponent";
import GomokuComponents from "./GomokuComponents";



class App extends Component {
    // plus(a,b) {
    //     return a+b;
    // }




    render() {
        var i = 10;

        var firebase = require("firebase");
        var config = {
            apiKey: "AIzaSyC0Ehm8LasZTsjCzWgcLRpNSee0G-46yCY",
            authDomain: "gomoku-8955a.firebaseapp.com",
            databaseURL: "https://gomoku-8955a.firebaseio.com",
            projectId: "gomoku-8955a",
            storageBucket: "gomoku-8955a.appspot.com",
            messagingSenderId: "857557511237"
        };
        firebase.initializeApp(config);
        var db = firebase.database();
        var ref = db.ref("gomoku");

        // ref.on("child_changed", function(snapshot) {
        //     var board = snapshot.val().board;
        //     console.log("Board : " + board.toString());
        // });


        // console.log();
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <br/>
                <br/>

                <MyComponent db={1} myprop={i} />
                <br/>
                <br/>

                <GomokuComponents ref={ref} />
                <br/>
                <br/>


                <SomeWhatComponent/>
            </div>
        );
    }
}

export default App;
