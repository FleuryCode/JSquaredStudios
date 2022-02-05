import React, { useRef } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import './contact.styles.scss';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import KEYS from "../../keys";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();

        this.state = {
            name: '',
            email: '',
            message: '',
            messageSending: false,
            messageSent: '',
            captchaToken: ''
        }
    }



    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { name, email } = this.state;

    //     console.log(name, email);
    // }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const formId = KEYS.FORM_SPARK;
        const recaptchaRef = this.myRef;
        const recaptchaKey = KEYS.RECAPTCHA;
        const formSparkUrl = `https://submit-form.com/${formId}`;
        let { messageSending } = this.state;


        const submitForm = async (event) => {
            const { name, email, message } = this.state;
            event.preventDefault();


            this.setState({
                messageSending: true
            });
            await postSubmission();
            this.setState({
                messageSending: false
            });
        };

        const postSubmission = async () => {
            const { name, email, message, captchaToken } = this.state;
            const payload = {
                name: name,
                email: email,
                message: message,
                "g-recaptcha-response": captchaToken
            };

            try {
                const result = await axios.post(formSparkUrl, payload);
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    messageSending: false,
                    messageSent: '',
                    captchaToken: ''
                });
                recaptchaRef.current.reset();
            } catch (error) {
                console.log(error);
            }
        };


        const updateRecaptchToken = (token) => {
            this.setState({
                captchaToken: token
            })
        };

        return (
            <div className="contact d-flex flex-column">
                <h1 className="d-flex justify-content-center">Contact Us</h1>
                <form className="p-5 contact-form">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <CustomInput
                                    type="text"
                                    id="name"
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
                                    id="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <textarea required name="message" onChange={this.handleChange} value={this.state.message} placeholder="Your message" id="message"></textarea>
                            </div>

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={recaptchaKey}
                                onChange={updateRecaptchToken}
                            />

                            <div className="col-4">
                                <button disabled={messageSending} type="submit" onClick={submitForm}>{messageSending ? 'Sending message...' : 'Submit'}</button>
                            </div>
                        </div>
                    </div>




                </form>
            </div>
        );
    }
}

export default Contact;