import React from 'react';
import Moment from 'react-moment';

const Article = (props) => {
     return (
          <div className='post__article'>
               <div className='post__article-col'>
                    <h2 className='post__article-title'>{ props.title }</h2>
               </div>
               <div className='post__article-col'>
                    <p className='post__article-text'>{ props.body }</p>
                    <p className='post__article-text'>{ props.body2 }</p>
                    <p className='post__article-text'>{ props.body3 }</p>
                    <p className='post__article-text'>{ props.body4 }</p>
               </div>
               <div className='post__article-col'>
                    <Moment format="YYYY-MM-DD HH:mm" className='post__article-time'>{ props.date }</Moment>
               </div>
          </div>
     )
}

export default Article;
