import React from 'react';

import { Intro, Contributors, LastNews } from './components/index';

const Home = () => {
     
     return (
          <main className="main">
               <Intro />
               <Contributors />
               <LastNews />
          </main>
     )
}

export default Home;