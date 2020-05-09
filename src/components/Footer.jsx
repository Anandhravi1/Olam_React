import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import data from '../data';

class Footer extends React.Component {    
    render() {
        const footerLink= data.footerLink;
        return(
            <div className="footer-section ">
                <div className="container  d-md-flex justify-content-between align-items-center">
                <div className="copyright-sec">
                    <div className="link-sec">
                        {footerLink.map((item,index)=>
                             <Link key={index} to={item.link}>{item.text}</Link>
                        )}                 
                    </div>
                    <div className="mt-3">
                        <span>&copy; 2020 Olam Edible Nuts (Part of the Olam Group)</span>
                    </div>
                </div>
                <div className="question-sec">
                    <span className="text-green d-block">Got a Question?</span><br/>
                        <Link to="/" ><FontAwesomeIcon icon={faPhone} className="mt-3"/><span>Request a Call Back</span></Link>
                </div>
                </div>
            </div>
        )
    }
}
 
export default Footer;