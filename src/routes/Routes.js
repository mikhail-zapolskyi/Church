import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, News, Stages, Pdf, Assessment, Contacts, NotFound, Post } from '../components/index';

const Routes = () => {
     
     return (
          <Switch>|
               <Route exact path='/' component={ Home }/>
               <Route path='/news/:id' component={ Post }/>
               <Route path='/news' component={ News }/>
               <Route path='/stages/:id' component={ Post }/>
               <Route path='/stages' component={ Stages }/>
               <Route path='/pdf' component={ Pdf }/>
               <Route path='/assessment' component={ Assessment }/>
               <Route path='/contacts' component={ Contacts }/>
               <Route component={ NotFound } status={ 404 }/>
          </Switch>
     )
}

export default Routes;