import React from 'react';
import { useSelector } from 'react-redux';
import Contacts from './Contacts';

function Contact() {
    const contacts = useSelector(state => state.contacts);
    console.log(contacts);
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger text-black">
                    <tr>
                        <th >
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"
                                    className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th >Name</th>
                        <th >Phone</th>
                        <th >E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => {
                            return (
                                <Contacts contact={contact} />
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Contact;
