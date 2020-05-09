import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
class HeaderIcon extends Component {
      
    render() { 
      const header=data.header;
        return (
        <div className="product-status mt-4">
          {header.map((item,index)=>
            <Link key={index} to={item.link} ><span className={item.icons}></span></Link>            
          )}         
          
        </div>
        );
    }
}
 
export default HeaderIcon;