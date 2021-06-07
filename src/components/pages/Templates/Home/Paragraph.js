import React from 'react';

const Paragraph = (props) => {
     return (
          <>
            <p className={ props.styles }>{ props.text }</p>   
          </>
     );
}

export default Paragraph;
