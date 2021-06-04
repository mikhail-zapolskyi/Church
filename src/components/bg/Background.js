import React from 'react';

const Background = () => {
     return (
          <React.Fragment>
               <div className="bg">
                    <div className="bg__L"></div>
                    <div className="bg__C">
                         <div className="bg__C-rows"></div>
                         <div className="bg__C-rows"></div>
                         <div className="bg__C-rows"></div>
                         <div className="bg__C-rows"></div>
                         <div className="bg__C-rows bg__C-hidden"></div>
                         <div className="bg__C-rows bg__C-hidden"></div>
                    </div>
                    <div className="bg__R"></div>
               </div>
          </React.Fragment>
     )
}

export default Background;
