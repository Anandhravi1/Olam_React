import React from 'react';
import WholeStoryLeft from './WholeStoryLeft';
import WholeStoryRight from './WholeStoryRight';

class WholeStory extends React.Component {
   
    render(){
      
        return(
            <div className="section whole-story">
                <h3 className="text-center mb-4">The Whole Story</h3>
                <p className="text-center">Market Insights and stories from Olam's supply chain</p>
                <div className="row container mt-5">
                    <div className="col-md-7">
                       <WholeStoryLeft/>
                    </div>
                    <div className="col-md-5">
                       <WholeStoryRight/>
                    </div>
                </div>
            <div className="text-center"><button className="btn btn-primary text-center">View All</button></div>
            </div>
        )
    }
}
export default WholeStory;