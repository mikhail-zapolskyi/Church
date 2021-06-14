import React from 'react';
import { useParams } from 'react-router-dom';


import Data from '../../Data/Data';
import Article from './components/Article';


const Post = () => {
     const { id } = useParams();
     const [ news ] = Data.news.filter(news => news.id === Number(id));
     
     return (
          <main className='main'>
               <section className='post'>
                    <Article 
                         title={ news.title }
                         body={ news.body }
                         date={ news.date }
                    />
               </section>
          </main>
     )
}

export default Post;
