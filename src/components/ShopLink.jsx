import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ShopLink extends Component {
    state = { 
        Nuts:["Cashews","Walnuts","Pistachios","Fancy Grade Almonds","Almond Ingredients"]
     }
    render() { 
        return (
        <div>
                     <Link to="/"><div className="row product-detail container d-md-flex align-items-center">
                            <div className="col-md-4 col-lg-4 py-3 d-none d-sm-block item">
                                <img src={this.props.image} alt=""/>
                            </div>
                            <div className="col-md-8 item-name ">
                                <span className="mb-3">{this.props.name}</span>
                                <ul className="p-0 level-1">
                                {this.props.nuts.map((item,index)=>
                                <li key={index}>{item}</li>
                                )}
                                </ul>
                            </div>
                            </div>
                        </Link>
                        {/* <Link to="/">
                            <div className="row product-detail container">
                            <div className="col-md-4 col-lg-4 py-3 d-none d-sm-block item">
                                <img src={almonds} alt=""/>
                            </div>
                            <div className="col-md-8 item-name d-md-flex align-items-center flex-wrap">
                                <span>Vietnam Nuts Hub</span>
                                 <ul className="p-0 level-1">
                                    {this.state.Nuts.map((item,index)=>
                                    <li key={index}>{item}</li>
                                    )}
                                 </ul>
                            </div>
                            </div>
                        </Link> */}
        </div>
        );
    }
}
 
export default ShopLink;