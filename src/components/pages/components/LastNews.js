import React from 'react';

import NewsCard from './NewsCard';
import Data from '../../../Data/Data';

const LastNews = () => {
     return (
          <section className='lastnews'>
               { Data.news.slice(Data.news.length - 4, -1).map(news => (
                    <NewsCard 
                         key={ news.id }
                         to={`/news/${news.id} `}
                         image={ news.src }
                         alt={ news.alt }
                         title={ news.title }
                         body={ news.body.slice(0, 100) }
                         date={ news.date }
                    />
               )) }
          </section>
     )
}

export default LastNews;