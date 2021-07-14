import React, { Component } from 'react';
import "./editform.css"

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            email: props.user.email,
            number: props.user.number,
            id:props.user.id
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state);
        this.setState({
            name: "",
            email: "",
            number: ""
        });
        this.props.closeModal();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className ="editform">
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="gen">Number:</label>
                    <input
                        type="number"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        );
    }
}

export default EditForm;