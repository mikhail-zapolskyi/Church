import React from 'react';
import { Nav, Header, Footer } from './components/index';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

ReactGA.initialize('G-RSCSWB9JRD');

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
