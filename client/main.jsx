import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('App willMount.');
    }

    render() {
        return (
            <div>
                Hello from React.
            </div>
        );
    }
}

Meteor.startup(() => {
    // React render call
    ReactDOM.render(<App />, document.querySelector('.reactAppContainer'));
});