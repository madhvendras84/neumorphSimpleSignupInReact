import React from 'react';
import ReactDOM from 'react-dom';
import ViewProfile from './ViewProfile';
import '../assets/style/style.css';

var validateForm = true;

class FrontPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            location: '',
            uploaded_file: '',
            status: 1
        };
    }

    formClickHandler = (event) => {
        let pictureURL = window.URL || window.webkitURL;

        if (event.target.name === 'uploaded_file') {
            this.setState({ file: event.target.files[0] });
            this.setState({ file_src: (window.URL ? URL : pictureURL).createObjectURL(event.target.files[0]) });
        } else if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        } else if (event.target.name === 'email') {
            this.setState({ email: event.target.value });
        } else if (event.target.name === 'password') {
            this.setState({ password: event.target.value });
        } else if (event.target.name === 'location') {
            validateForm = false;
            this.setState({ location: event.target.value });
        }
    }
    sendRequest = (event) => {
        if (validateForm === true) {
            return false;
        } else {
            ReactDOM.render(<ViewProfile user={this.state} />, document.getElementById('root'));
        }
        // console.log("state",this.state);
    }
    render() {
        return (
            <div className="neumorph-container">
                <div className="form">
                    <h4>Create Your Profile</h4>
                    <form action="#" method="post">
                        <input type="text" required placeholder="Enter Your Name" name="name" value={this.state.name} onChange={this.formClickHandler} />
                        <input type="email" required placeholder="Enter Your Email" name="email" value={this.state.email} onChange={this.formClickHandler} />
                        <input type="password" required placeholder="Enter Your Password" name="password" value={this.state.password} onChange={this.formClickHandler} />
                        <input type="file" className="custom-file-input" name="uploaded_file" onChange={this.formClickHandler} />
                        <input type="text" required placeholder="Enter Your Location" name="location" value={this.state.location} onChange={this.formClickHandler} />
                        <button id="stylish-button" onClick={this.sendRequest}>View Profile</button>
                    </form>
                </div>
                <div className="social-media">
                    <h4> Sign up with Social media</h4>
                    <button className="facebook">Log in with Facebook</button>
                    <button className="google">Log in with Google</button>
                    <button className="twitter">Log in with Twitter</button>
                    <button className="twitter linkedin">Log in with Linkedin</button>
                    <div className="social-icons">
                        <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );

    }
}

export default FrontPage;
