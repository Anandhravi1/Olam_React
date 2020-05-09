import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

class NewArrival extends React.Component {
    render(){
        const arrival= data.arrival;
        return(
            <div className="section new-arrival">
                <div className="container">
                    <h2>New Arrivals</h2>
                    <div className="row">
                        {arrival.map((item,index)=>
                        <div key={index} className="col-md-3">
                            <Link to="/" className="card-sec">
                                <div className="card-item">
                                    <img src={require(`../images/${item.image}.jpg`)}  alt="" />
                                </div>
                                <div className="card-detail">
                                    <span className="item-name">{item.name}</span>
                                    <span className="text-alt">{item.id}</span>
                                </div>
                            </Link>
                         </div>
                        )}               
                    </div>
                </div>
            </div>
        )
    }
}
export default NewArrival;