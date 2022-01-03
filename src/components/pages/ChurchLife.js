import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';

import Images from '../../Data/Images';

const IMAGES = Images.map((image, key) => (    
     {
          original : `${image}`,
          thumbnail : `${image}`,
     }
));

const ChurchLife = () => {
     
     return (
          <main className='main'>
               <Helmet>
                    {/* Primary Meta Tags */}
                    <meta name="title" content="St Patrick Church Life"/>
                    <meta name="description" content="St. Patrick's Church Life. A Church For People Just Like You. Whatever your age or life story you are welcome." />
                    <meta name="keywords" content="Church, St Patrick Church, life, donation, donate" />
                    <meta name="robots" content="index, follow" />
                    <meta name="language" content="English" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="author" content="Mikhail Zapolskyi" />
                    <title>St Patrick Church Life</title>
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://spchurch-rev.ca/church_life" />
                    <meta property="og:title" content="St Patrick Church Life" />
                    <meta property="og:description" content="St. Patrick's Church Life. A Church For People Just Like You. Whatever your age or life story you are welcome." />
               </Helmet>

               <section className='churchLife'>
                    <ImageGallery items={IMAGES}/>
               </section>
          </main>
     )
}

export default ChurchLife;
