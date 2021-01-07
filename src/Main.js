import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Userpage from './components/user/Userpage'
import Mainpage from './components/Mainpage'

const Main = () => {
  return (
    <BrowserRouter>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Mainpage}></Route>
            <Route exact path='/user' component={Userpage}></Route>
        </Switch>
    </BrowserRouter>
  );
}   

export default Main;