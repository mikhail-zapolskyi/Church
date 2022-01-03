import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import bylaw from '../../docs/bylaw.pdf';
import assessment from '../../docs/assessment.pdf';

import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Pdf = () => {
     const location = useLocation();
     const path = location.pathname;
     const pageName = path.split('/');
     const [numPages, setNumPages] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);

     function onDocumentLoadSuccess({ numPages }) {
          setNumPages(numPages);
          setPageNumber(1);
     }

     function changePage(offset) {
          setPageNumber(prevPageNumber => prevPageNumber + offset);
     }

     function previousPage() {
          changePage(-1);
     }

     function nextPage() {
          changePage(1);
     }

     return (
          <main className="main">
               <section className='pdf'>      
                    <Document file={ 
                         (() => {
                              switch(pageName[1]) {
                                   case 'bylaw': 
                                        return bylaw;
                                   case 'assessment': 
                                        return assessment;
                                   case 'grant_program': 
                                        return assessment;
                                   default:
                                        return bylaw;
                              }
                         })()

                     } onLoadSuccess={onDocumentLoadSuccess} className="pdf__cont">
                         <Page pageNumber={pageNumber} className='pdf__page'/>
                    </Document>
                    <Helmet>
                         {/* Primary Meta Tags */}
                         <meta name="title" content={`St Patrick Church ${ pageName[1] }`}/>
                         <meta name="description" content="Contact St Patrick Church Documents" />
                         <meta name="keywords" content="Church, St Patrick Church, contact, donation, documents" />
                         <meta name="robots" content="index, follow" />
                         <meta name="language" content="English" />
                         <title>St Patrick Church { pageName[1] }</title>
                    </Helmet>
                    <div className='pdf__info'>
                         <p className='pdf__pageNumber'>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p>
                         <button type="button" disabled={pageNumber <= 1} onClick={previousPage} className='pdf__button'>Previous</button>
                         <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} className='pdf__button'>Next</button>
                    </div>
               </section>
          </main>
     );
}

export default Pdf;