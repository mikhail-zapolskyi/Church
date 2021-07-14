import React from 'react';
import { useParams } from 'react-router-dom';

import Data from '../../Data/Data';
import Article from './components/Article';
import LastStages from './components/LastStages';

const Stage = () => {
     const { id } = useParams();
     const [ stage ] = Data.stages.filter(news => news.id === Number(id));
     
     return (
          <main className='main'>
               <section className='post'>
                    <Article 
                         title={ stage.title }
                         body={ stage.body }
                         body2={ stage.body2 }
                         body3={ stage.body3 }
                         body4={ stage.body4 }
                         date={ stage.date }
                    />
                    <LastStages />
               </section>
          </main>
     )
}

export default Stage;