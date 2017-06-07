/**
 * Created by jaeyoung on 2017. 5. 3..
 */
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
    <div className="MyComponent">
            <p className="MyComponent-blarblar">
                blarblar i = {this.props.myprop}
                {this.props.db}
            </p>

            </div>
        );
    }
}

export default MyComponent;