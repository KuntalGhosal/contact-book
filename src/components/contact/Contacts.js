import React from 'react'
import Avatar from 'react-avatar'
const Contacts = ({ contact }) => {
    const { name, phone, email } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox"
                        className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-4" name={name} size="40" round={true} />
                {name}

            </td>
            <td>{phone}</td>
            <td>{email} </td>
            <td className="Actions">
                <a href="#">
                    <span className="material-icons mr-2 ">edit</span>
                </a>
                <a href="#">
                    <span className="material-icons text-primary">remove_circle</span>
                </a>
            </td>
        </tr>
    )
}

export default Contacts;
