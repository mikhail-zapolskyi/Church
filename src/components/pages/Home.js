import React from 'react';

import { Intro, Contributors, LastStages } from './components/index';

const Home = () => {
     
     return (
          <main className="main">
               <Intro />
               <Contributors />
               <LastStages />
          </main>
     )
}

export default Home;