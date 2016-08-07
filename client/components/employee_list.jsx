import React, { Component } from 'react';

class EmployeeList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('EmployeeList willMount.');
    }

    render() {
        return (
            <div>
                <div className="employee-list">
                    Employee List
                </div>
            </div>
        );
    }
}

export default EmployeeList;