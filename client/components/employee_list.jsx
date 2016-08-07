import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees.jsx';
import EmployeeDetail from './employee_detail.jsx';


class EmployeeList extends Component {

    constructor(props) {
        super(props);

        console.log('IN CONSTRUCTOR:', props.employees);
    }

    componentWillMount() {
        console.log('EmployeeList willMount.');
        console.log('IN componentWillMount:', this.props.employees);

    }

    render() {
        console.log('IN RENDER:', this.props.employees);

        return (
            <div>
                <div className="employee-list">
                    {
                        this.props.employees.map(
                            employee => <EmployeeDetail key={employee._id} employee={employee} />
                            )
                        }
                </div>
            </div>
        );
    }
}

export default createContainer(
    () => {

        // set up subscription
        Meteor.subscribe('employees');

        // return an object that'll be sent as props to the EmployeeList, the second argument
        return { employees: Employees.find({}).fetch() };
    },
    EmployeeList
);