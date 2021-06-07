import React from 'react';
import Data from '../../Data';


const ImageCard = (props) => {
     return (
          <div className="cont__card">
               <a className="cont__card-link" href={ props.link }>
                    <img src={props.source} alt={props.title} className="cont__card-img" />
               </a>
          </div>
     )
}

const Contributors = () => {
     // Images data
     const [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 ] = Data.contributors;

     return (
          <section className="cont">
               <div className="cont__col">
                    <div className="cont__title">
                         <h2 className="cont__title-h2">Our Contributors</h2>
                    </div>
               </div>
               <div className="cont__col">
                    <div className="cont__logos">
                         <ImageCard link={img1.link} source={img1.src} title={img1.alt} />
                         <ImageCard link={img2.link} source={img2.src} title={img2.alt} />
                         <ImageCard link={img3.link} source={img3.src} title={img3.alt} />
                         <ImageCard link={img4.link} source={img4.src} title={img4.alt} />
                    </div>
                    <div className="cont__logos">
                         <ImageCard link={img5.link} source={img5.src} title={img5.alt} />
                         <ImageCard link={img6.link} source={img6.src} title={img6.alt} />
                         <ImageCard link={img7.link} source={img7.src} title={img7.alt} />
                         <ImageCard link={img8.link} source={img8.src} title={img8.alt} />
                    </div>
                    <div className="cont__logos">
                         <ImageCard link={img9.link} source={img9.src} title={img1.alt} />
                         <ImageCard link={img10.link} source={img10.src} title={img10.alt} />
                         <ImageCard link={img11.link} source={img11.src} title={img11.alt} />
                         <ImageCard link={img12.link} source={img12.src} title={img12.alt} />
                    </div>
               </div>
               <hr className="hr__center" />
               <div className="cont__col">
                    <div className="cont__title">
                         <h3 className="cont__title-h3">Be one of contributors today</h3>
                    </div>
               </div>
          </section>
     )
}

export default Contributors;