import React from 'react';
import { Document } from 'react-pdf';

const Pdf = () => {
     return (
          <div>
               <Document file="../../docs/bylaw.pdf"></Document>
          </div>
     )
}

export default Pdf;
