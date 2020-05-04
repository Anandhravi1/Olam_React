import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class WholeStoryRight extends Component {
    state = {  }
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
        const market=[
            {              
                image : '2969_2_',
                fruit : 'Peanuts',
                place : 'USA',
                update: 'US peanut planting y20',
                date  : '15th April',
                year  : '2020'
            },
            {
                image: '17664',
                fruit : 'Peanuts',
                place : 'USA',
                update: 'Cashew update 15 Apr 2020',
                date  : '15th April',
                year  : '2020'
            },
            {
                image : '17252',
                fruit : 'Peanuts',
                place : 'USA',
                update: 'Marketing call rehash 15 Apr 2020',
                date  : '18th April',
                year  : '2020'
            }
        ]
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