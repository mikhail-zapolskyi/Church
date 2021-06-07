import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
                                        <li className="footer__list--item"><a href="mailto:info@miartmedia.com" className="footer__list--link">email here</a></li>
                                        <li className="footer__list--item"><a href="tel:+14039909070" className="footer__list--link">phone # here</a></li>
                                   </ul>
                              </div>
                              <div className="footer__grid--row">
                                   <p className="footer__title">Navigation</p>
                                   <ul className="footer__list">
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/'>Home</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='stages'>Stages</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='news'>News</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/assessment'>Historical Assessment</Link></li>
                                        <li className="footer__list--item"><Link className="footer__list--link" to='/contacts'>contacts</Link></li>
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
