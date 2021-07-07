import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, News, Pdf, Contacts, NotFound, Post } from '../components/index';

const Routes = () => {
     
     return (
          <Switch>|
               <Route exact path='/' component={ Home }/>
               <Route path='/church_life/:id' component={ Post }/>
               <Route path='/church_life' component={ News }/>
               <Route path='/stages/:id' component={ Post }/>
               <Route path='/stages' component={ News }/>
               <Route path='/bylaw' component={ Pdf } />
               <Route path='/assessment' component={ Pdf }/>
               <Route path='/contacts' component={ Contacts }/>
               <Route component={ NotFound } status={ 404 }/>
          </Switch>
     )
}

export default Routes;