import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import data from '../data';
class WholeStoryRight extends Component {
    
    componentDidMount=()=>{
        /**** our works loop */
        
       function bgSource(imgcontainer) {
        $(imgcontainer).each(function() {
            var img = $(this).find("img");           
            var img_src = img.attr("src");
            $(this).css({
                "background-image": "url(" + img_src + ")",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center"
            });
            img.hide()
        })
    }
    bgSource(".whole-story .card-item");
      }
    render() { 
        const  market= data.market;
        return ( 
            <div className="story-right-sec">
            {market.map((item,index)=>
                <Link to="/" key={index} className="card-sec mb-4">
                <div className="card-item  col-md-4">
                <img src={require(`../images/${item.image}.jpg`)} alt="" />
                </div>
                <div className="card-detail col-md-8">
                    <span className="text-green">{item.fruit}, {item.place}</span>
                    <h4>{item.update}</h4>
                    <span className="text-alt">{item.date}, {item.year}</span> 
                </div>
                <div className="search-card">
                    <span className="icon-search-plus"></span>
                    <p>Read More</p>
                </div>
            </Link>
            )}                           
        </div>
         );
    }
}
 
export default WholeStoryRight;