import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// NAV BUTTON TOOGLE AND MOB MENU

const NavCenter = (props) => {
     return (
          <div className={`nav__C ${ props.opacity }`}>
               <Link className='nav__C-link' to='/stages'>Stages</Link>
               <Link className='nav__C-link' to='/church_life'>Church Life</Link>
               <Link className='nav__C-link' to='/contacts'>Contacts</Link>
          </div>
     )
}

const NavRight = (props) => {
     return (
          <div className="nav__R">
               <div className={"nav__R-link nav__R-button"} onClick={ props.func }>
                    <div className="nav__R-lineT"></div>
                    <div className="nav__R-lineC">Menu</div>
                    <div className="nav__R-lineB"></div>
               </div>
          </div>
     )
}

const Nav = () => {
     const [menuToggle, setMenuToggle] = useState(false);
     const [ menuScroll, setMenuScroll ] = useState('nav__C-active');

     const $ = document.querySelector.bind(document);
     const nav = {
          buttonContainer: '.nav__R',
          mobileMenu : '.nav__mob',
          buttonText : '.nav__R-lineC',
          buttonTopLine: '.nav__R-lineT',
          buttonBottomLine: '.nav__R-lineB',
          bg: '.nav__mob-container--R',
          navigation: '.nav__mob-link',
     };

     const toggleON = () => {
          $(nav.mobileMenu).style.display = 'flex';
          $(nav.buttonContainer).style.zIndex = '99999';
          $(nav.buttonText).textContent = 'Close';
          $(nav.buttonText).classList.add('lineC__hover');
          $(nav.buttonTopLine).classList.add('lineT__hover');
          $(nav.buttonBottomLine).classList.add('lineB__hover');
     };
     
     const toggleOFF = () => {
          $(nav.mobileMenu).style.display = 'none';
          $(nav.buttonContainer).style.zIndex = '0';
          $(nav.buttonText).textContent = 'Menu';
          $(nav.buttonText).classList.remove('lineC__hover');
          $(nav.buttonTopLine).classList.remove('lineT__hover');
          $(nav.buttonBottomLine).classList.remove('lineB__hover');
     };

     const handleMenuToogle = () => {
          setMenuToggle(!menuToggle);
          if (menuToggle === true){
               toggleON();
          } else {
               toggleOFF();
          };
     };

     const handleMenuScroll = () => {
          if (window.scrollY !== 0) {
               setMenuScroll('nav__C-hidden');
          } else {
               setMenuScroll('nav__C-active');  
          }
     }

     useEffect(() => {
          window.addEventListener('scroll', handleMenuScroll);
          return () => {
               window.removeEventListener('scroll', handleMenuScroll);
          }
     }, [])

     return (
          <div className='nav'>
               <div className='nav__L'>
                    <Link className="nav__L-link" to="/">
                         <p className='nav__L-text'>
                              St.Patrick <br /> Church <br /> Revitalization
                         </p>
                    </Link>
               </div>
               <NavCenter opacity={ menuScroll } />
               <NavRight func={ handleMenuToogle } />     
               <div className="nav__mob" onClick={ handleMenuToogle }>
                    <div className="nav__mob-container--L">
                         <div className="nav__mob-L">
                              <Link className="nav__mob-L--link" to='/'>
                                   <p className="nav__mob-L--text">Church</p>
                                   <p className="nav__mob-L--text">Arhitecture</p>
                                   <p className="nav__mob-L--text">Revitalization</p>
                              </Link>
                         </div>
                         <div className="nav__mob-R">
                              <Link className="nav__mob-link" to='/'>Home</Link>
                              <Link className="nav__mob-link" to='/stages'>Stages</Link>
                              <Link className="nav__mob-link" to='/church_life'>Church Life</Link>
                              <Link className="nav__mob-link" to='/bylaw'>Bylaw</Link>
                              <Link className="nav__mob-link" to='assessment'>Historical<br />Assessment</Link>
                              <Link className="nav__mob-link" to='/contacts'>Contacts</Link>
                         </div>
                    </div>
                    <div className="nav__mob-container--R">
                         <div className="nav__mob-img"></div>
                    </div>
               </div>
          </div>     

               
     )
}

export default Nav;
