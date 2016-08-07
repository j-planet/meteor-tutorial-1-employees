import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees.jsx';
import EmployeeDetail from './employee_detail.jsx';

const PER_PAGE = 3;



class EmployeeList extends Component {

    constructor(props) {
        super(props);

        console.log('IN CONSTRUCTOR:', props.employees);
        this.page = 2;   // because the first page has already been fetched
    }

    componentWillMount() {

        console.log('EmployeeList willMount.');
        console.log('IN componentWillMount:', this.props.employees);

    }

    handleButtonClick() {
        Meteor.subscribe('employees', PER_PAGE * this.page);
        this.page += 1;
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

                <button
                    onClick={this.handleButtonClick.bind(this)}
                    className="btn btn-primary"
                >
                    Load More...
                </button>
            </div>
        );
    }
}


export default createContainer(
    () => {

        // set up subscription
        Meteor.subscribe('employees', PER_PAGE);

        // return an object that'll be sent as props to the EmployeeList, the second argument
        return { employees: Employees.find({}).fetch() };
    },
    EmployeeList
);