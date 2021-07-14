import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ChurchLife, Stages, Pdf, Contacts, NotFound, Stage } from '../components/index';

const Routes = () => {
     
     return (
          <Switch>|
               <Route exact path='/' component={ Home }/>
               <Route path='/church_life' component={ ChurchLife }/>
               <Route path='/stages/:id' component={ Stage }/>
               <Route path='/stages' component={ Stages }/>
               <Route path='/bylaw' component={ Pdf } />
               <Route path='/assessment' component={ Pdf }/>
               <Route path='/grant_program' component={ Pdf }/>
               <Route path='/contacts' component={ Contacts }/>
               <Route component={ NotFound } status={ 404 }/>
          </Switch>
     )
}

export default Routes;