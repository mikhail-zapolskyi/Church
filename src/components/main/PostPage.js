import React from 'react';
import { useParams } from 'react-router-dom';


import Data from '../pages/Data';
import SingleNewsPage from '../pages/Templates/News/SingleNewsPage';

const PostPage = () => {
     const { id } = useParams();
     const [ news ] = Data.news.filter(news => news.id === Number(id));
     
     return (
          <main className='main'>
               <section className='singleNews'>
                    <SingleNewsPage 
                         title={ news.title }
                         body={ news.body }
                         date={ news.date }
                    />
               </section>
          </main>
     )
}

export default PostPage;
