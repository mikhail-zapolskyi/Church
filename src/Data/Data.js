import logo1 from '../images/contributors/logo-1.png';
import logo2 from '../images/contributors/logo-2.png';
import logo3 from '../images/contributors/logo-3.png';
import logo4 from '../images/contributors/logo-4.png';
import logo5 from '../images/contributors/logo-5.png';
import logo6 from '../images/contributors/logo-6.png';
import logo7 from '../images/contributors/logo-7.png';
import logo8 from '../images/contributors/logo-8.png';
import logo9 from '../images/contributors/logo-9.png';
import logo10 from '../images/contributors/logo-10.png';
import logo11 from '../images/contributors/logo-11.png';
import person1 from '../images/people/person-1.jpg';
import person2 from '../images/people/person-2.jpg';
import person3 from '../images/people/person-3.jpg';
// Stages images
import stage1 from '../images/stages/stage-01.jpg';
import stage2 from '../images/stages/stage-02.jpg';
import stage3 from '../images/stages/stage-03.jpg';
import stage4 from '../images/stages/stage-04.jpg';
import stage5 from '../images/stages/stage-05.jpg';

const Data = {
     contributors: [
          { id: 1, src: logo1, alt: 'City of Calgary', link: 'https://www.calgary.ca'},
          { id: 2, src: logo2, alt: 'Goverment of Alberta', link: 'https://www.alberta.ca'},
          { id: 3, src: logo3, alt: 'MiArtMedia Creative Studio', link: 'https://miartmedia.com/'},
          { id: 4, src: logo4, alt: 'PI Design Group', link: 'http://pidesigngroup.ca/'},
          { id: 5, src: logo5, alt: 'StMarys University', link: ''},
          { id: 6, src: logo6, alt: 'Three Point Industry Ltd', link: ''},
          { id: 7, src: logo7, alt: 'Veritas'},
          { id: 8, src: logo8, alt: 'Expo Sign', link: ''},
          { id: 9, src: logo9, alt: 'Creston Developments', link: ''},
          { id: 10, src: logo10, alt: 'Burnco', link: ''},
          { id: 11, src: logo11, alt: 'St. John Chrysostom', link: ''},
          { id: 12, src: logo11, alt: '', link: ''},
          { id: 13, src: logo11, alt: 'Fireweed', link: ''},
          { id: 14, src: logo11, alt: 'Sunset', link: ''},
          { id: 15, src: logo11, alt: 'GeoSan', link: ''},
          { id: 16, src: logo11, alt: 'Hasegawa', link: ''}
     ],
     people: [
          { id: 1, name: 'Father Stan', bio: `President of St. John Chrysostom Ministry of Calgary.`, alt: 'Father Stan', src: person1,
          phone: '403-903-4013', email: 'orthodox.calgary@gmail.com', phLink: 'tel:+14039034013'},
          { id: 2, name: 'Pavel Penkov', bio: `St.Patrick Church Revitalization Project Coordinator`, alt: 'Pavel Penkov', src: person2,
          phone: '780-560-0108', email: 'pavel.penkov@hotmail.com', phLink: 'tel:+17805600108'},
          { id: 3, name: 'Peter Imshenetsky', bio: `St.Patrick Church Revitalization Project Coordinator.`, alt: 'Peter Imshenetsky', src: person3,
          phone: '403-714-4231', email: 'peter@pidesigngroup.ca', phLink: 'tel:+14037144231'}
     ],
     news: [
          { id: 1, src: person1, alt: 'person', title: 'This is news title place', body: `hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores hort Bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus omnis ratione asperiores`, date: new Date() },
     ],

     stages: [
          { 
               id: 1, 
               src: stage1, 
               alt: 'Revitalization Grand Program', 
               title: 'Revitalization Grand Program', 
               body: `The work of revitalising St. Patrick Church began in the year 2020. Historic Conservation and Revitalisation Grant 
               programme was founded by a group of persons from the “St. John Chrysostom Russian Orthodox Church of Calgary”.`,
               body2: `This programme covered the complete range of recommended steps for Church revival, which were separated into sections:`,
               body3: `1. Overview of Historical Significance. 2. Project Overview of the Project (including all stages and cost estimate)`,
               body4: `We are proposed the new basement for the building to locate in the basement new washroom, heater, hot water tank and the 
               most important will be relocate the building from old sandstone boulders to the concrete foundation. And we are proposing to replace 
               siding with the same material to match existing siding and existing paint and new or renovated windows. The program has been presented 
               to the City of Calgary (Planning department) and Heritage Conservation Adviser Calgary and East Central Region Historic Resources 
               Management Branch Alberta Culture, Multiculturalism and Status of Women.`, 
               date: '2021-07-13 17:42' 
          },
          {
               id: 2, 
               src: stage2, 
               alt: 'New Church Bylaw', 
               title: 'New Church Bylaw', 
               body: `We are made request to the City for engaging the Church under City umbrella and recognising as the historical object. 
               The city has been made the Bylaw for the land and the Church Building. This action opened the door to the city of founding 
               for our revitalisation program.`, 
               date: `2021-07-13 17:47`
          },
          { 
               id: 3, 
               src: stage3, 
               alt: 'person', 
               title: 'Church Designation', 
               body: `The church comity has been initiated the process of the Church Designation as a Municipal Historic Resource. After the 
               City of Calgary's designation of the Municipal Historic Resource the church, comity has got access to the grand founding program 
               for the City of Calgary related to preservation and revitalization of Historical Sources.`, 
               date: '2021-07-13 17:' 
          },
          {
               id: 4, 
               src: stage4, 
               alt: 'Conservation Plan', 
               title: 'Conservation Plan', 
               body : `The church comity is engaged to the Revitalisation Program the Historical Consulting Company. The intention of this project 
               is to work closely with the Church’s representatives to determine the current condition and outline a conservation program to conserve 
               regulated/protected elements of the building that aligns with proposed renovations to the building (Heritage Assessment and Conservation Plan), 
               source appropriate trades with heritage experience, and liaise  with the City/Province to ensure compliance with the Designation Bylaw, 
               Provincial Designation, and Standards & Guidelines for the Conservation of Historic Places in Canada.`, 
               body2 : `The project will be led by Laura Pasacreta, MA Principal of Fireweed Consulting Inc. Sam Boisvert, will provide any targeted 
               research required on construction history and changes to the building through time.`,
               body3 : `Fireweed Consulting inc. is a heritage consulting firm based in Calgary specialized in the regeneration and reconnection of 
               heritage in our modern world. Fireweed Consulting was established in 2018 by Laura Pasacreta, a seasoned heritage professional with over 
               20 years of experience in heritage planning, conservation technology, First Nations’ sites, Feasibility and Interpretation planning, 
               and historic archaeology. Pasacreta has worked on a broad range of heritage projects across western Canada including several high profile 
               institutional, commercial and residential conservation projects in Calgary.`, 
               body4 : `She formally opened and ran the Prairie Branch of Donald Luxton & Associates for over eight years in Calgary, completing over 100 
               projects in Alberta, Saskatchewan and eastern BC until the branch’s closing in Spring 2018. Fireweed offers a wide range of cultural resource
               management consulting services including heritage planning and policy development, building rehabilitation services, Project and Construction 
               Management, Feasibility and Interpretation planning, historic research and writing, and historic archaeology. Fireweed is fully versed and 
               utilizes Parks Canada’s Standards and Guidelines for the Conservation of Historic Places in Canada as the baseline for all conservation and 
               planning projects. Fireweed also provides resources and planning for historic garden development and European and First Nations medicinal 
               herbs and their uses.`, 
               date: '2021-07-13 17:' 
          },
          {
               id: 5, 
               src: stage5, 
               alt: 'person', 
               title: 'Development Permit project', 
               body: `The Development Permit application will require some startup preparation and assessment of existing conditions provided by the 
               DP applicant “PI Design Group”.  The Designer (PI Design Group) will be providing the whole scope of architectural drafting works 
               required for DP application as per City of Calgary standards with preliminary confirmation of scope of activities from the Historical 
               Department of Canada.`, 
               body2 : `The “Designer” will provide whole scope of works for the Architectural, Landscape Architectural and Site Planning, Project 
               Administration including Proposals, DTR, PTR, Consultant Administration, Coordination with City and Historical Department. The “Designer” 
               will engage a group of engineering side consultants for the DP preparation.`, 
               date: `2021-07-13 17:47`
          },
     ]
}

export default Data;