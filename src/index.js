import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/styles.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

// // ------------------------- onScroll change opacity of menu link stages

// window.addEventListener('scroll', () => {
//      let pos = window.scrollY;

//      if (pos !== 0 ){
//           document.querySelector('.nav__C-link-scroll').style.opacity = 0;
//      } else {
//           document.querySelector('.nav__C-link-scroll').style.opacity = 1;
//      }
// });