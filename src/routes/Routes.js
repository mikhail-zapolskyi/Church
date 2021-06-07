import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, News, Stages, Pdf, Assessment, Contacts, NotFound } from '../components/index';
import PostPage from '../components/main/PostPage';

const Routes = () => {
     
     return (
          <Switch>|
               <Route exact path='/' component={ Home }/>
               <Route path='/news/:id' component={ PostPage }/>
               <Route path='/news' component={ News }/>
               <Route path='/stages/:id' component={ Stages }/>
               <Route path='/stages' component={ Stages }/>
               <Route path='/pdf' component={ Pdf }/>
               <Route path='/assessment' component={ Assessment }/>
               <Route path='/contacts' component={ Contacts }/>
               <Route path='*' component={ NotFound } status={ 404 }/>
          </Switch>
     )
}

export default Routes;