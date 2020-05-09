import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo_white.png';
class Logo extends Component {    
    render() { 
        return (
              <Link to="/"><div className="logo">
                  <img src={logo} alt="" />
              </div></Link>
        );
    }
}
 
export default Logo;