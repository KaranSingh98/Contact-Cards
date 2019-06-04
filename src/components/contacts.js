import React, {Component} from 'react';
import {propTypes} from 'prop-types';
import './contacts.css';

class ContactCard extends Component {

    constructor() {

        super()
    }

    render() {

        return (
            <div className="ContactCard">
                <h1>{this.props.name} </h1>
                <h3> {this.props.email} </h3>
                <h3> {this.props.mobileNum} </h3>
                <h3> {this.props.workNum} </h3>
            </div>
        );
    }
};

class ContactContainer extends Component {

    render() {

        return (
            <div className="ContactContainer">
                <div className="card">
                    <ContactCard name="Karanveer" email="karansingh98123@gmail.com" mobileNum="347-259-7882" workNum="N/A" />
                </div>
                <div className="card">
                    <ContactCard name="John Doe" email="jd66@hotmail.com" mobileNum="123-456-7890" workNum="098-765-4321" />
                </div>
                <div className="card">
                    <ContactCard name="Peter Parker" email="tonyson@stark.com" mobileNum="718-805-8564" workNum="123-45-STARK" />
                </div>
            </div>
        );
    }
};


export default ContactContainer
