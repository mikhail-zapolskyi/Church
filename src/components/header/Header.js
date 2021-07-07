import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



const Header = () => {
     const location = useLocation();
     const path = location.pathname;
     const pageName = path.split('/');

     return (
          <header className={ 'header' }>
               <div className='hero' id={`${ path === '/' ? 'index': pageName[1] }`}>
                    <div className="hero__title">
                         <h1 className="hero__title-text">
                              St. Patrick’s Church <br />
                              { path === '/' ? 'Revitalization' : pageName[1].replace(/_|-/g, " ") }
                         </h1>
                    </div>
                    <div className="hero__info">
                         <div className="hero__info-col"></div>
                         <div className="hero__info-col">
                               <p className="hero__info-title">Share</p>
                              <div className="hero__info-row">
                                   <Link to='/' className="hero__info-link">
                                        <FaFacebook className="hero__info-icon--f" />
                                   </Link>
                                   <Link to='/' className="hero__info-link">
                                        <FaLinkedin className="hero__info-icon--l" />
                                   </Link>
                                   <Link to='/' className="hero__info-link">
                                        <FaTwitter className="hero__info-icon--t" />
                                   </Link>
                              </div>
                         </div>
                         <div className="hero__info-col">
                              <p className="hero__info-title">Address</p>
                              <p className="hero__info-text">14608 Macleod Tr <br /> SE Calgary Alberta</p>
                         </div>
                         <div className="hero__info-col">
                              <p className="hero__info-title">Support Project</p>
                              <Link to='/' className="alert hero__info-button">Contribute</Link>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header;
