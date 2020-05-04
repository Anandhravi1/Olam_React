import React from 'react';

import App from './App';


import {BrowserRouter,Switch,Route} from 'react-router-dom';


class Routers extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route>
                            <Route exact path="/" component={App}/>                         
                          
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routers;