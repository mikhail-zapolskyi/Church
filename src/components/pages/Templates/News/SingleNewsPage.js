import React from 'react';
import Moment from 'react-moment';

const SingleNewsPage = (props) => {
     return (
          <div>
               <div>
                    { props.title }
                    { props.body }
                    <Moment format="YYYY-MM-DD HH:mm" className=''>{ props.date }</Moment>
               </div>
          </div>
     )
}

export default SingleNewsPage;
