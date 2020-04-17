import React from "react";
import "../assets/style/style.css";
import CoverPic from "../assets/images/headerimg1.jpg";
import ProfilePic from "../assets/images/profile-2.png";
// import ReactDOM from 'react-dom';

class ViewProfile extends React.Component {
    render() {
        return (
            <div id="profile-view">
                <div className="profile animated bounce">
                    <div className="profile-card animated swing delay-2s">
                        <div className="profile-background">
                            <img className="cover-pic" src={CoverPic} alt="" />

                            <img
                                className="profile-image"
                                src={this.props.user.file_src ? this.props.user.file_src : ProfilePic}
                                alt=""
                            />
                        </div>
                        <div className="profile-content">
                            <h1 id="name">{this.props.user.name ? this.props.user.name : "Madhvendra Singh"}</h1>
                            <p id="email">{this.props.user.email ? this.props.user.email : "madhvendras84@gmail.com"}</p>
                            <p id="password">{this.props.user.password ? this.props.user.password : "Password"}</p>
                            <p id="location">{this.props.user.location ? this.props.user.location : "New Ashok Nagar"}</p>
                            <div className="social-icons">
                                <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ViewProfile;
