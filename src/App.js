import React from 'react';
import { Nav, Header, Footer } from './components/index';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
     
     return (
          <Router>   
               <Nav />
               <Header />
               <Routes />
               <Footer />
          </Router>
     )
}

export default App;
