import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../fonts/GT_Walsheim/GT_Walsheim.ttf';
import '../style/App.css';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
import NewArrival from './NewArrival';
import WholeStory from './WholeStory';
import {FaBars} from 'react-icons/fa';
import Footer from './Footer';
import '../style/icon.css';
import Banner from './Banner';
import HeaderIcon from './HeaderIcon';
import $ from 'jquery';

class Home extends React.Component{ 
 componentDidMount=()=>{
     $('.hamburg-icon').click(function(){
       $('body').addClass('link-add')
     });
     $('.close-nav').click(function(){
       $('body').removeClass('link-add');
     })
       
 
 }
 
  render() {  
    return(
      <div className="page home-page">
      <div className="header-banner">
      <div className="header-section">
        <div className="container">          
          <HeaderIcon/>
          <Link to="/"><FaBars className="hamburg-icon" onClick={this.handleToggle}/></Link>
         <div className="logo-nav-section">
             <Logo/>
             <NavLinks/>
         </div>
         </div>
      </div>  
       <Banner/>
      </div>       
      <NewArrival/>
      <WholeStory/>
      <Footer/>
      </div>
    
    )
  }  
}
 
export default Home;