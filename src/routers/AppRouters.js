import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from '../pages/Test';
import Login from '../pages/Login';
import MainLayout from '../components/MainLayout';
import Graph from '../pages/Graph';



//const history = createBrowserHistory();

const AppRouter = () => {
    // axiosConfig();
    // axiosInterceptors();
    return (
        <div>
            
            <Router basename="/" history={History}>
            
                <Switch>
                    <MainLayout>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/test" component={Test} exact={true}/>
                    <Route path="/chart" component={Graph} exact={true}/>
                    
                    </MainLayout>
                </Switch>
               
                
            </Router>
        </div>
    );
}

export default AppRouter;
