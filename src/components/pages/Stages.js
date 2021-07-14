import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import StageCard from './components/StageCard';
import Data from '../../Data/Data';


const Stages = () => {
     const { url } = useRouteMatch();

     return (


          <main className='main'>
               <section className='stages'>
                    { Data.stages.map(post => (
                         <StageCard 
                              key={ post.id }
                              to={`${ url }/${post.id} `}
                              image={ post.src }
                              alt={ post.alt }
                              title={ `Stage ${post.id} : ${post.title}` }
                              body={ `${post.body.slice(0, 150)}...` }
                              date={ post.date }
                         />
                    ))}
               </section>
          </main>
     )
}

export default Stages;
