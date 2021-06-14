import React from 'react';
import Data from '../../Data/Data';
import PersonCard from './components/PersonCard';

const Contacts = () => {
     return (
          <main className="main">
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
                                   emailLink={` mailto:${ person.email } `}
                              />
                         ))}
                    </div>
               </section>
          </main>
     )
}

export default Contacts;