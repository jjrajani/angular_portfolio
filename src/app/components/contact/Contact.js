import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="main-content">
        <div id="contact">
          <div className="sub-content">
            <div className="sub-header">
              <p>Contact</p>
              <a href="tel:6786404262"><i className="fa fa-whatsapp" aria-hidden="true"></i>+1 678 640 4262</a>
              <a href="skype:humdrum89"><i className="fa fa-skype" aria-hidden="true"></i>humdrum89</a>
              <a className="email" href="mailto:jjrajani@gmail.com">jjrajani@gmail.com</a>
            </div>
          </div>
          <div className="sub-content">
            <form id="gform" action="https://script.google.com/macros/s/AKfycbyhthAKEEKBnlqLKVFsyfv6wmej4Q_0PKisv_S3xOv4YDtYCVw/exec" encType="multipart/form-data" method="POST">
              <ul>
                <li>
                  <label htmlFor="name">Your name:</label>
                  <input type="text" name="name" id="name" placeholder="Name" required/>
                </li>
                <li>
                  <label htmlFor="email">Your email:</label>
                  <input type="email" name="email" id="email" placeholder="Email" required/>
                </li>
                <li>
                  <label htmlFor="phone">Your Phone:</label>
                  <input type="phone" name="phone" id="phone" placeholder="Phone"/>
                </li>
                <li>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" placeholder="Message" required/>
                </li>
                <li>
                  <button type="submit" id="submit" name="submit" className="button">Send Message</button>
                </li>
              </ul>
            </form>
            <div className="hidden" id="thankyou_message">
              <h2><em>Thanks</em> for contacting us!
                We will get back to you soon!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
// <input type="hidden" name="cgiemail-mailopt" value="sync"/>
// <input type="hidden" name="sendtoemail" value="jjrajani@gmail.com"/>
// <input type="hidden" name="subject" value="JennaRajani.com - Contact Form"/>
// <input type="hidden" name="redirect" value="http://www.jenna_rajani.com/thankyou"/>
