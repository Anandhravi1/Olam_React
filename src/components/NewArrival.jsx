import React from 'react';
import {Link} from 'react-router-dom';

class NewArrival extends React.Component {
    render(){
        const arrival=[
            {
                image : 'cg_1_1_',
                name  : 'Cashews organic CG 50lbs',
                id    : 20853
            },
            {
                image : 'npxs1_7',
                name  : 'Almonds Pst Kern NP ExSUP 20/22 1T bag',
                id    : 9129
            },
            {
                image : 'npxs2_5',
                name  : 'Almonds Kern NP ExSUP 20/22 1T bag',
                id    : 13767
            },{
                image : 'crunchyalmondnat2',
                name  : 'Almonds Roast Natural Paste Crunchy 20L Bucket',
                id    : 20651
            }
        ]
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