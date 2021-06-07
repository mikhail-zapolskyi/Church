import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const PersonCard = (props) => {
     return (
          <div className="contact__card">
               <div className="contact__card--bioCont">
                    <img src={props.source} alt={props.title} className="contact__card--img" />
                    <div className="contact__card--dataCont">
                         <p className="contact__card--link contact__card--name">{ props.name }</p>
                         <a href={ props.phLink } className="contact__card--link">
                              <FaPhone className="contact__card--link-icon" />
                              <p className="contact__card--link-data">{ props.phone }</p>
                         </a>
                         <a href={ props.emailLink } className="contact__card--link">
                              <FaEnvelope className="contact__card--link-icon" />
                              <p className="contact__card--link-data">{ props.email }</p>
                         </a>
                    </div>
               </div>
               <div className="contact__card--bioCont">
                    <p className="contact__card--shortBio">{props.bio}</p>
               </div>
          </div>
     )
}

export default PersonCard;
