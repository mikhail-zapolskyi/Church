import React from 'react';
import ImageGallery from 'react-image-gallery';

import Images from '../../Data/Images';


const IMAGES = Images.map((image, key) => (    
     {
          original : `${image.default}`,
          thumbnail : `${image.default}`,
     }
));



console.log(IMAGES);
const ChurchLife = () => {
     

     return (


          <main className='main'>
               <section className='churchLife'>
                    <ImageGallery items={IMAGES} />
               </section>
          </main>
     )
}

export default ChurchLife;
