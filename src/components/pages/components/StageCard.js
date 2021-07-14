import React from 'react';

const StageCard = (props) => {
     return (
          <a href={ props.to } className='stage__card'>
               <img src={ props.image} alt={ props.alt } className="stage__card--img"/>
               <div className='stage__card--row'>
                    <h2 className='stage__card--title'>{ props.title }</h2>
               </div>
               <div className='stage__card--row'>
                    <p className='stage__card--body'>{ props.body }</p>
               </div>
               <div className='stage__card--row'>
                    <p className='stage__card--date'>Posted by: Father Stan</p>
               </div>
          </a>
     )
}

export default StageCard;
