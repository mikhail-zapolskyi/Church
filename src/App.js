import React from 'react';
import { Background, Nav, Header, PageContent, Footer } from './components/index';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
     
     return (
          <Router>   
               <Background />
               <Nav />
               <Header />
               <PageContent />
               <Footer />
          </Router>
     )
}

export default App;
