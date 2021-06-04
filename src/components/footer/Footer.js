import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
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
                                        <FaFacebookSquare className='footer__social--icon' />
                                   </Link>
                              </li>
                              <li className="footer__social--item">
                                   <Link to="/" className="footer__social--in">
                                        <FaFacebookSquare className='footer__social--icon' />
                                   </Link>
                              </li>
                              <li className="footer__social--item">
                                   <Link to="/" className="footer__social--li">
                                        <FaFacebookSquare className='footer__social--icon' />
                                   </Link>
                              </li>
                              <li className="footer__social--item">
                              <Link to="/" styles="footer__social--tw">
                                        <FaFacebookSquare className='footer__social--icon' />
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="footer__grid">
                         <div className="footer__grid--col">
                              <div className="footer__grid--row">
                                   <p className="footer__title">Get in touch</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item"><Link to="mailto:info@miartmedia.com" styles="footer__list--link">email here</Link></li>
                                        <li className="footer__list--item"><Link to="tel:+14039909070" className="footer__list--link">phone # here</Link></li>
                                   </ul>
                              </div>
                              <div className="footer__grid--row">
                                   <p className="footer__title">Navigation</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item"><Link styles="footer__list--link" to='/'>Home</Link></li>
                                        <li className="footer__list--item"><Link styles="footer__list--link" to='stages'>Stages</Link></li>
                                        <li className="footer__list--item"><Link styles="footer__list--link" to='news'>News</Link></li>
                                        <li className="footer__list--item"><Link styles="footer__list--link" to='/assessment'>Historical Assessment</Link></li>
                                        <li className="footer__list--item"><Link styles="footer__list--link" to='/contacts'>contacts</Link></li>
                                   </ul>
                              </div>
                         </div>
                         <div className="footer__grid--col">
                              <div className="footer__grid--row">
                                   <p className="footer__title">Some text or links </p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item">Calgary</li>
                                        <li className="footer__list--item">Airdrie</li>
                                        <li className="footer__list--item">Okotoks</li>
                                        <li className="footer__list--item">Cochrane</li>
                                        <li className="footer__list--item">Chestermere</li>
                                        <li className="footer__list--item">Canmore</li>
                                        <li className="footer__list--item">Banff</li>
                                   </ul>
                              </div>
                              <div className="footer__grid--row">
                                   <p className="footer__title">Some text or links</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item">Some text or links here</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
     </div>
</footer>
     )
}

export default Footer;
