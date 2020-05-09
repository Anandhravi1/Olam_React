import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import almonds  from '../images/almond_shop_menu.png';
import combo from '../images/combo_160_140.jpg';
import $ from 'jquery';
import { FaAngleDown } from 'react-icons/fa';
import ShopLink from './ShopLink';
import data from '../data';
class NavLinks extends Component {    
   
    componentDidMount=()=>{
        $('.navbar-section ul li a').click(function(){
            var _this=$(this);
            $('.navbar-section ul li a').not(_this).next().removeClass('show-hide');
            _this.next().toggleClass('show-hide');
        })
    }
    render() {   
        const supplyChain = data.supplyChain;
        var NutItems= ["Cashews","Walnuts","Pistachios","Fancy Grade Almonds","Almond Ingredients"];              
        return (
            <div className="navbar-section">
                <Link to="/"><FaTimes className="close-nav"/></Link>
                <ul>
                    <li> <Link to="/">Shop<FaAngleDown className="angle-down" /></Link>
                    <div className="shop-branch level-0"> 
                           <ShopLink name="Australian Almonds" nuts={[]} image={almonds}/>
                           <ShopLink name="Vietnam Nuts Hub" nuts={NutItems} image={combo}/>
                        </div>
                     </li>
                    <li><Link to="/">Our Supply Chain <FaAngleDown className="angle-down" /></Link>
                        <div className="supply-branch level-0">
                            <ul>
                                {supplyChain.map((item,index)=>
                                <li key={index}><Link  to={item.link}>{item.product}</Link></li>
                                )}                                
                            </ul>

                        </div>
                    </li>
                    <li> <Link to="/">About Olam</Link></li>
                    <li>  <Link to="/">FAQ</Link></li>
                </ul>              
              </div>
        );
    }
}
 
export default NavLinks;