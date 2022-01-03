import React from 'react';
import Data from '../../Data/Data';
import PersonCard from './components/PersonCard';
import { Helmet } from 'react-helmet';

const Contacts = () => {
     return (
          <main className="main">
               <Helmet>
                    {/* Primary Meta Tags */}
                    <meta name="title" content="St Patrick Church Contact"/>
                    <meta name="description" content="Contact St Patrick Church Contact Father Stan 403-903-4013 Peter Imshenetsky 403-714-4231 14608 Macleod TrSE Calgary Alberta" />
                    <meta name="keywords" content="Church, St Patrick Church, contact, donation, donate" />
                    <meta name="robots" content="index, follow" />
                    <meta name="language" content="English" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="author" content="Mikhail Zapolskyi" />
                    <title>St Patrick Church Life</title>
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://spchurch-rev.ca/contacts" />
                    <meta property="og:title" content="St Patrick Church Contact" />
                    <meta property="og:description" content="Contact St Patrick Church Contact Father Stan 403-903-4013 Peter Imshenetsky 403-714-4231 14608 Macleod TrSE Calgary Alberta" />
               </Helmet>
               <section className="section__cont">
                    <h2 className="contact__title">Feel Free To Contact Us</h2>
                    <div className="contact__cont">
                         { Data.people.map(person => (
                              <PersonCard 
                                   key = { person.id }
                                   source={ person.src }
                                   title={ person.title }
                                   name={ person.name }
                                   phone={ person.phone }
                                   email={ person.email }
                                   bio={ person.bio }
                                   phLink={ person.phLink }
                                   emailLink={`mailto:${ person.email }`}
                              />
                         ))}
                    </div>
               </section>
          </main>
     )
}

export default Contacts;