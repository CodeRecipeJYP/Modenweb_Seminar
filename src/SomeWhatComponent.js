/**
 * Created by jaeyoung on 2017. 5. 3..
 */
import React, { Component } from 'react';
// import './PostNetwork'
import getPosts from './network/PostNetwork.js';

var data = [
    {
        id: 62,
        uploaded_date: "2017-04-05T13:23:49.586288Z",
        title: "오늘 저녁 식사를 할 사람",
        content: "나와나",
        author: 1
    },
    {
        id: 61,
        uploaded_date: "2017-04-05T13:18:13.221439Z",
        title: "그리고 혹시",
        content: "안녕 하세요",
        author: 1
    },
];

var temp;

class SomeWhatComponent extends Component {

    render() {
        var results = getPosts();
        console.log(results);

        return (
            <div className="SomeWhatComponent">
                <div className="SomeWhatComponent-header">
                    <h2>Welcome SomeWhatComponent.</h2>
                </div>
                <p className="SomeWhatComponent-intro">
                    I will make <code>the blog</code> below this line.
                </p>

                {/*<div className="post">*/}
                    {/*{ temp = data[0] }*/}
                    {/*<h1>{temp.title}</h1>*/}
                    {/*<h1>{temp.content}</h1>*/}
                    {/*<h1>{temp.uploaded_date}</h1>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default SomeWhatComponent;