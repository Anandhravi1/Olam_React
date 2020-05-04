import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import $ from 'jquery';

class Banner extends Component {
    state = { 
        banner:[
            {
                link:'',
                image:'banner_1'
            },
            {
                link:'',
                image:'banner_2'
            },{
                link:'',
                image:'banner_3'
            },{
                link:'',
                image:'banner_4'
            }
        ]
     }
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
    bgSource(".banner-section .item");
      }
      
    render() { 
        var settings = {
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className=" banner-section">
            <Slider {...settings} >
                {this.state.banner.map((item,index)=>
                 <Link key={index} to={item.link}><div className="item"><img src={require(`../images/${item.image}.png`)} alt="" /></div></Link>
                )}             
            </Slider>
        </div>  
        );
    }
}
 
export default Banner;