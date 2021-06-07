import React from 'react';
import { Nav, Header, PageContent, Footer } from './components/index';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
     
     return (
          <Router>   
               <Nav />
               <Header />
               <PageContent />
               <Footer />
          </Router>
     )
}

export default App;
