import React from 'react'

function AddContact() {
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add a Contact
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Your Email Address"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Create Contact
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddContact;
