import React from 'react';
import Moment from 'react-moment';

const NewsCard = (props) => {
     return (
          <a href={ props.to } className='news__card'>
               <div className='news__card--row'>
                    <img src={ props.image} alt={ props.alt } className="news__card--img"/>
               </div>
               <div className='news__card--row'>
                    <h2 className='news__card--title'>{ props.title }</h2>
               </div>
               <div className='news__card--row'>
                    <p className='news__card--body'>{ props.body }</p>
               </div>
               <div className='news__card--row'>
                    <Moment format="YYYY-MM-DD HH:mm" className='news__card--date'>{ props.date }</Moment>
               </div>
          </a>
     )
}

export default NewsCard;
