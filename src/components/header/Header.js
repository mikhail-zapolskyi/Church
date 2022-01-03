import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

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
                                   <Link to={{ pathname: 'https://www.facebook.com/groups/5496103560421117' }} className="hero__info-link">
                                        <FaFacebook className="hero__info-icon--f" />
                                   </Link>
                                   <Link to={{ pathname: 'https://www.linkedin.com/groups/14045263/' }} className="hero__info-link">
                                        <FaLinkedin className="hero__info-icon--l" />
                                   </Link>
                              </div>
                         </div>
                         <div className="hero__info-col">
                              <p className="hero__info-title">Address</p>
                              <a href='https://www.google.com/maps/place/14608+Macleod+Trail+SE,+Calgary,+AB+T2X+1Z8/@50.9221673,-114.0729665,17.69z/data=!4m5!3m4!1s0x5371769ba64d73b1:0x4688162f46c4a42d!8m2!3d50.9221609!4d-114.0712061' className="hero__info-text">14608 Macleod Tr <br /> SE Calgary Alberta</a>
                         </div>
                         <div className="hero__info-col">
                              <p className="hero__info-title">Support Project</p>
                              <Link to={{ pathname: 'https://www.gofundme.com/f/st-patricks-church-revitalization?utm_medium=email&utm_source=product&utm_campaign=p_email%2B2300-co-team-welcome' }} className="alert hero__info-button">Contribute</Link>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header;
