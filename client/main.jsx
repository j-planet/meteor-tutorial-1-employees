import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list.jsx';


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
                <EmployeeList />
            </div>
        );
    }
}

Meteor.startup(() => {
    // React render call
    ReactDOM.render(<App />, document.querySelector('.reactAppContainer'));
});