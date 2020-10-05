import './App.css';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';

const App = () => {
    return(
    /*   <Router>
            <Switch>
                <Route path = '/' exact component={Home} />
                <Route path = '/video/:id' exact component={Home} /> 
                <Route path = '/favorites' component={Favorites} />
                <Route path = '/login' component={Login} />
            </Switch> 
        </Router> */
       <HashRouter> 
            <Switch> 
                <Route path="/" component={Home} exact />
                <Route path="/favorites" component={Favorites} exact />
                <Route path="/login" component={Login} exact />
                <Route path ="/video" exact component={Home} />
                <Route path ="/favorites/video/" exact component={Favorites} />
            </Switch>
        </HashRouter> 
        
    );
}

export default App;
