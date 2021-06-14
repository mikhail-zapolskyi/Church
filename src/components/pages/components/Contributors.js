import React from 'react';
import Data from '../../../Data/Data';


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

     return (
          <section className="cont">
               <div className="cont__col">
                    <div className="cont__title">
                         <h2 className="cont__title-h2">Our Contributors</h2>
                    </div>
               </div>
               <div className="cont__col">
                    <div className="cont__logos">
                         { Data.contributors.slice(0, 4).map(img => (
                              <ImageCard key={ img.id } link={img.link} source={img.src} title={img.alt} />
                         ))}
                    </div>
                    <div className="cont__logos">
                         { Data.contributors.slice(4, 8).map(img => (
                                   <ImageCard key={ img.id } link={img.link} source={img.src} title={img.alt} />
                              ))}
                    </div>
                    <div className="cont__logos">
                         { Data.contributors.slice(8, 12).map(img => (
                                   <ImageCard key={ img.id } link={img.link} source={img.src} title={img.alt} />
                              ))}
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