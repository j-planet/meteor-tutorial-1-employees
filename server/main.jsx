// Only executed on the server

import _ from 'lodash';
import { Employees } from '../imports/collections/employees.jsx';
import { image, helpers } from 'faker';


Meteor.startup(() => {

    // see if the collection has any records
    const numRecords = Employees.find({}).count();

    if (!numRecords)
    {
        // If there are no records, then generate some data.
        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }

    Meteor.publish('employees', (perPage) => {
        return Employees.find({}, { limit: perPage });
    });
});