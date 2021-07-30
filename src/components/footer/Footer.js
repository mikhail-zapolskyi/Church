import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Data from '../../Data/Data';

const Footer = () => {
     const person = Data.people[0];
     return (     
          <footer className="section__cont">
               <div className="footer">
                    <div className="footer__grid ">
                         <div className="footer__logo">
                              <p className="footer__logo--img">
                                   St. Patrick’s Church Revitalization
                              </p>
                         </div>
                         <ul className="footer__social">
                              <li className="footer__social--item">
                                   <Link to="/" className="footer__social--fb">
                                        <FaFacebook className='footer__social--icon' />
                                   </Link>
                              </li>
                              <li className="footer__social--item">
                                   <Link to="/" className="footer__social--li">
                                        <FaLinkedin className='footer__social--icon' />
                                   </Link>
                              </li>
                              <li className="footer__social--item">
                                   <Link to="/" styles="footer__social--tw">
                                        <FaTwitter className='footer__social--icon' />
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="footer__grid">
                         <div className="footer__grid--col">
                              <div className="footer__grid--row">
                                   <p className="footer__title">Get in touch</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item"><a href={`mailto:${person.email}`} className="footer__list--link">{ person.email }</a></li>
                                        <li className="footer__list--item"><a href={`tel:${person.phLink}`} className="footer__list--link">{ person.phone }</a></li>
                                   </ul>
                              </div>
                              <div className="footer__grid--row">
                                   <p className="footer__title">Navigation</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/'>Home</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='stages'>Stages</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='news'>News</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/bylaw'>Bylaw</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/assessment'>Historical Assessment</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/grant_program'>Grant Program</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/contacts'>Contact</Link></li>
                                   </ul>
                              </div>
                         </div>
                         <div className="footer__grid--col">
                              <div className="footer__grid--row">
                                   <p className="footer__title">Address</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item">14608 Macleod Tr SE Calgary Alberta</li>
                                   </ul>
                              </div>
                              <div className="footer__grid--row">
                                   <p className="footer__title">Contribute</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item footer__list--btn">Click here</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     )
}

export default Footer;
