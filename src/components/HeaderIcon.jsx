import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HeaderIcon extends Component {
        state = { 
          header:[
            {
              link:'',
              icons:'icon-search'
            },
            {
              link:'',
              icons:'icon-heart-o'
            },
            {
              link:'',
              icons:'icon-user-o'
            },           
           {
              link:'',
              icons:'icon-cart'
            }
          ]
         }
    render() { 
        return (
        <div className="product-status mt-4">
          {this.state.header.map((item,index)=>
            <Link key={index} to={item.link} ><span className={item.icons}></span></Link>            
          )}         
          
        </div>
        );
    }
}
 
export default HeaderIcon;