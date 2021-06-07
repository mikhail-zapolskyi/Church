import React from 'react';
import Paragraph from './Paragraph';

const Intro = () => {
     return (
          <section className="section__cont">
               <div className="intro">
                    <div className="intro__card left__cont">
                         <div class="intro__card--title">
                              <h2 className="intro__card--title-T">Some text need to go here</h2>
                              <Paragraph  styles="intro__card--title-underline" />
                              <hr className="hr__left" />
                              <Paragraph  styles="intro__card--title-B" text="Some text need to go here"/>
                         </div>
                         <div className="intro__card--body">
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="The heritage value of St. Patrick's Roman Catholic Church 
                                   lies in its association with the establishment of early 
                                   religious institutions in southern Alberta and its representation 
                                   of early Alberta church architecture."
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="The arrival of the Canadian Pacific Railway (C.P.R.) at Fort Calgary in 1883
                                   established the fledgling community as a hub for settlement and development in
                                   southern Alberta. The trail south from Calgary to Fort Macleod became a significant
                                   transportation route and several stopping houses and small communities emerged
                                   along the path, including Fish Creek."
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="The Catholic community in Fish Creek was initially ministered to by several 
                                   travelling members of the Missionary Oblates of Mary Immaculate (O.M.I.) religious 
                                   order, including Father Albert Lacombe, the renowned missionary, Father Joseph-Jean-Marie 
                                   Lestanc, a well-known itinerant priest, and Father Jacques Riou. In 1904, the area's 
                                   Catholics united to construct St. Patrick's Roman Catholic Church on land donated by 
                                   Patrick Glenn, son of John Glenn, one of Calgary's pioneer farmers"
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="Lacombe is believed to have become the
                                   first resident priest at the church in 1909 and served here until his death in 1916.
                                   The cluster of St. Patrick's Roman Catholic Church, St. Paul's Anglican Church, and
                                   the Lacombe Home site in the area speaks powerfully to the religious significance of
                                   this place in Calgary's history."
                              />
                         </div>
                    </div>
                    <div className="intro__R right__cont">
                         <div className="intro__R--container">
                              <div className="intro__R--container-img1"></div>
                              <div className="intro__R--container-img2"></div>
                         </div>
                    </div>     
               </div>
          </section>
     );
}

export default Intro;
