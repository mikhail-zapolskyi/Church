import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import NewsCard from './components/NewsCard';
import Data from '../../Data/Data';


const News = () => {
     const { url } = useRouteMatch();
     const location = useLocation();
     const path = location.pathname;
     const pageName = path.split('/');

     const data = pageName[1] === 'church_life' ? Data.news : Data.stages;

     return (


          <main className='main'>
               <section className='news'>
                    { data.map(post => (
                         <NewsCard 
                              key={ post.id }
                              to={`${ url }/${post.id} `}
                              image={ post.src }
                              alt={ post.alt }
                              title={ post.title }
                              body={ post.body.slice(0, 100) }
                              date={ post.date }
                         />
                    ))}
               </section>
          </main>
     )
}

export default News;
