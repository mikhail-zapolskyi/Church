import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, News, Stages, Pdf, Assessment, Contacts } from '../components/index';

const Routes = () => {
     
     return (
          <Switch>|
               <Route exact path='/' component={ Home }/>
               <Route exact path='/news' component={ News }/>
               <Route exact path='/stages' component={ Stages }/>
               <Route exact path='/pdf' component={ Pdf }/>
               <Route exact path='/assessment' component={ Assessment }/>
               <Route exact path='/contacts' component={ Contacts }/>
          </Switch>
     )
}

export default Routes;