import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const PersonCard = (props) => {
     return (
          <div className="contact__card">
               <div className="contact__card--bioCont">
                    <div className="contact__card--imgCont">
                         <img src={props.source} alt={props.title} className="contact__card--img" />
                    </div>
                    <div className="contact__card--dataCont">
                         <p className="contact__card--name">{ props.name }</p>
                         <a href={ props.phLink } className="contact__card--link">
                              <FaPhone className="contact__card--link-icon" />
                              <p className="contact__card--link-data">{ props.phone }</p>
                         </a>
                         <a href={ props.emailLink } className="contact__card--link">
                              <FaEnvelope className="contact__card--link-icon" />
                              <p className="contact__card--link-data">{ props.email }</p>
                         </a>
                         <p className="contact__card--shortBio">{props.bio}</p>
                    </div>
               </div>
          </div>
     )
}

export default PersonCard;
