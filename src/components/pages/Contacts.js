import React from 'react';
import Data from './Data';
import PersonCard from './Templates/Contacts/PersonCard';

const Contacts = () => {
     const [ person1 ] = Data.people;
     return (
          <main className="main">
               <section className="section__cont">
                    <h2 className="contact__title">Feel Free To Contact Us</h2>
                    <div className="contact__cont">
                         <PersonCard 
                              source={ person1.src }
                              title={ person1.title }
                              name={ person1.name }
                              phone={ person1.phone }
                              email={ person1.email }
                              bio={ person1.bio }
                              phLink={ person1.phLink }
                              emailLink={` mailto:${ person1.email } `}
                         />
                         <PersonCard 
                              source={ person1.src }
                              title={ person1.title }
                              name={ person1.name }
                              phone={ person1.phone }
                              email={ person1.email }
                              bio={ person1.bio }
                              phLink={ person1.phLink }
                              emailLink={` mailto:${ person1.email } `}
                         />
                         <PersonCard 
                              source={ person1.src }
                              title={ person1.title }
                              name={ person1.name }
                              phone={ person1.phone }
                              email={ person1.email }
                              bio={ person1.bio }
                              phLink={ person1.phLink }
                              emailLink={` mailto:${ person1.email } `}
                         />
                    </div>
               </section>
          </main>
     )
}

export default Contacts;