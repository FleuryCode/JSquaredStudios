import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import './contact.styles.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, email} = this.state;

        console.log(name, email);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="contact d-flex flex-column">
                <h1 className="d-flex justify-content-center">Contact Us</h1>
                <form className="p-5 contact-form">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <CustomInput
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <CustomInput
                                    type="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="col-4">
                                <button type="submit" onClick={this.handleSubmit}>Test</button>
                            </div>
                        </div>
                    </div>




                </form>
            </div>
        );
    }
}

export default Contact;