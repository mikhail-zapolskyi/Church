import React from 'react';
import Paragraph from './Paragraph';

const Intro = () => {
     return (
          <section className="section__cont">
               <div className="intro">
                    <div className="intro__card left__cont">
                         <div className="intro__card--title">
                              <h2 className="intro__card--title-T">
                                   St. Patrick's Church in Calgary
                              </h2>
                              <Paragraph  styles="intro__card--title-underline" />
                              <hr className="hr__left" />
                              <Paragraph  styles="intro__card--title-B" text="Revitalization Project"/>
                         </div>
                         <div className="intro__card--body">
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="The (non-profit) community organisation St. John Chrysostom Ministry of Calgary
                                        proposes to get the requisite documentation from the City of Calgary, 
                                        including DP, BP, and IFC, and planning to proceed with the construction 
                                        of a new church foundation, new utilities, and upgrades to the Church site"
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="The Church building was taken in as is, entirely dismantled. The structure 
                                   has been heavily vandalised both inside and out. Broken windows, ripped partitions, 
                                   shredded walls, no heat, and disintegrating siding with insulation. The original 
                                   church bell was stolen and found at a garage sale later. Gas and other site services 
                                   are not available"
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="In our vision of the operation of the Church the first item what need to be 
                                   added will be the site services. We can use the building at any time of year by 
                                   heating it. In addition to keeping the building warm, we must provide a vapour 
                                   barrier and adequate insulation to the building envelope, which are now lacking 
                                   or decreasing"
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="We are proposed the new basement for the building to locate in the basement 
                                   new washroom, heater, hot water tank and the mist important will be relocate the 
                                   building from old sandstone boulders to the concrete foundation"
                              />
                              <Paragraph 
                                   styles="intro__card--body-par"
                                   text="We are proposing to replace siding with the same material to match existing 
                                   siding and existing paint. The next proposed intervention will be the historical 
                                   windows. When building has been adopted all windows has no glassing and some opening 
                                   has no windows at all. All windows have been repaired by community members, but it 
                                   was just a glassing and not exactly matching with existing. We are proposing professionally 
                                   repair and rebuilds the historical windows"
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
