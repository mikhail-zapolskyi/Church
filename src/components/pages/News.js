import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import NewsCard from './components/NewsCard';
import Data from '../../Data/Data';


const News = () => {
     const { url } = useRouteMatch();
     return (
          <main className='main'>
               <section className='news'>
                    { Data.news.map(news => (
                         <NewsCard 
                              key={ news.id }
                              to={`${ url }/${news.id} `}
                              image={ news.src }
                              alt={ news.alt }
                              title={ news.title }
                              body={ news.body.slice(0, 100) }
                              date={ news.date }
                         />
                    ))}
               </section>
          </main>
     )
}

export default News;
