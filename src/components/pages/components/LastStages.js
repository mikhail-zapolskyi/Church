import React from 'react';

import StageCard from './StageCard';
import Data from '../../../Data/Data';

const LastStages = () => {
     return (
          <section className='lastnews'>
               
               { Data.stages.slice(-3).map(stages => (
                    <StageCard 
                         key={ stages.id }
                         to={`/stages/${stages.id} `}
                         image={ stages.src }
                         alt={ stages.alt }
                         title={ `Stages ${stages.id}: ${stages.title}` }
                         body={ `${stages.body.slice(0, 150)}...` }
                         date={ stages.date }
                    />
               )) }
          </section>
     )
}

export default LastStages;