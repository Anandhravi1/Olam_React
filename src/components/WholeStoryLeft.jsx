import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import story1 from '../images/17331.jpg';

class WholeStoryLeft extends Component {
    state = {  }
    render() { 
        return (
            <Link to="/" className="story-left-sec card-sec mb-4">
                            <div className="card-item">
                                <img src={story1} alt="" />
                            </div>
                            <div className="card-detail p-4">
                                <span className="text-green">Almonds, Australia</span>
                                <h3>The Weekly Move 20 Apr 2020</h3>
                                <span className="text-alt">20th April, 2020</span>
                            </div>
                        </Link>                       
        );
    }
}
 
export default WholeStoryLeft;