## Task Description:

Design and develop a modern, user-friendly website for Saveetha Engineering College using React. The website should cater to various audiences, including prospective students, current students, faculty, alumni, and parents. It should include essential sections like Home, About Us, Courses Offered, Events. Consider the integration of features such as a responsive design, a searchable course catalog, an event calendar, and news updates. The design should reflect the college's branding and color scheme, incorporating existing logos and visual elements. Additionally, plan for future integration with third-party services and ensure the website is optimized for both desktop and mobile users. Finally, ensure that the website aligns with the college's mission to inspire future innovators and leaders.

For Example:https://kumaravel655.github.io/college
## Output:https://manojvenaram.github.io/
## Code:
### JavaScript:
#### HomePage.js
```
// import React from 'react'

import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import '../css/home.css'
export default function HomePage() {
  return (
    <>
    <div className="home-container">
    <h1>Welcome to Our College</h1>
    <p>Your future starts here. Learn more about our programs and events.</p>
    </div>
    </>
  )
}
```
#### About.js
```
// import React from 'react'

import "../css/about.css"
export default function AboutPage() {
  return (
    
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-introduction">Welcome to SEC - Saveetha Engineering College (Autonomous), a distinguished institution established in 2001 under the visionary leadership of Dr. N. M. Veeraiyan— a committed medical professional and philanthropist par excellence. With over 35 years of unwavering commitment to excellence in education, our college has emerged as the forefront of engineering education and research.</p>
      <h2 className="section-title">Affiliation/Accreditations</h2>
      <p>
        <ul className="about-list"> 
            <li className="about-list-item">Autonomous institution affiliated with Anna University</li>
            <li className="about-list-item">Approved by AICTE</li>
            <li className="about-list-item">NBA accreditation for 5 undergraduate courses</li>
            <li className="about-list-item">SIRO recognition by DSIR Government of India</li>
            <li className="about-list-item">An 'A' grade from NAAC</li>
            <li className="about-list-item">Ranked by NIRF</li>

        </ul>
        <h2 className="section-title">Courses Offered</h2>
        <p className="about-text">Our academic offerings include a variety of programs designed to prepare learners for the challenges of Industry 5.0. We offer full-time four-year B.E/B.Tech UG programs across 13 cutting-edge branches such as AI/DS, AI/ML, CSE, IT, CSE (IoT), CSE (Cybersecurity), ECE, EEE, BME, Civil, Mechanical, Agriculture, and Chemical.</p>
        <br></br>
        <p className="about-text">For those seeking advanced studies, we provide Two-Year PG programs in VLSI, Software Engineering, MBA.</p>
        <h2 className="section-title">Highlights</h2>
        <ul className="about-list">
            <li className="about-list-item">At Saveetha Engineering College, we understand the importance of adapting the learner-centric education relevant to 21st-century skillset. This is why we are among the first in India to implement the 'Saveetha Flexi Learn' where learners can select subject, faculty, schedule & domain electives.</li>

            <li className="about-list-item">Our robust placement records speak volumes about the efficacy of our educational model, with more than 93% of our learners consistently securing employment. Our graduates have secured positions with some of the top companies worldwide, achieving the Highest CTC of ₹34 Lakhs and an average CTC of ₹5.36 Lakhs.</li>

            <li className="about-list-item">SEC has 32 Centres of Excellence in AI/ML, Data Science, Drone, Robotics, Self-Driving Cars, Electric Vehicles, Digital Twin & AR/VR, JAVA Full Stack Development, MERN Stack, Blockchain, Game Development, Mobile App Development, 3D Design & Printing, IoT, Cloud Computing, Edge Computing, Chip Design, PCB Design and Manufacturing, Fully Automated Surface Mount Tech, ARM Microcontrollers, Renewable Energy, MEMS, Nanotechnology, etc. to prepare learners not just for the current job market, but for the technological challenges of the future.</li>
            <li className="about-list-item">We are also proud to own the world's most powerful AI supercomputing facility, the NVIDIA DGX H100, setting our learners apart in the field of advanced computation.</li>
            <li className="about-list-item">At SEC, we don't just teach engineering; we inspire future innovators and leaders to achieve greatness in every endeavour. Join us to be a part of this exciting journey towards becoming a pioneer in engineering and technology.</li>
        </ul>

      </p>
    </div>
  )
}
```
#### Department.js
```
import React from 'react'
// import "./department.css"
import '../css/department.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
function DepartmentPAge() {

    const departments = [
        { name: 'AIDS', count: 120 },
        { name: 'ECE', count: 150 },
        { name: 'AI&IOT', count: 110 },
        { name: 'Medical Electronic', count: 110 },
        { name: 'BME', count: 110 },
        { name: 'EEE', count: 100 },
        { name: 'MECH', count: 130 },
        { name: 'EIE', count: 90 },
        { name: 'AIML', count: 110 },
        { name: 'AICS', count: 80 },
        { name: 'CSE', count: 200 }
      ];
    return (
      <>
    <div className="department-container">
      <h1>Department</h1>
      <table className="department-table">
        <thead>
            <tr><td>Department</td>
            <td>Count</td></tr>
        </thead>
        <tbody>
            {
                departments.map((dep,index)=>(
                    <tr key={index}>
                        <td>{dep.name}</td>
                        <td>{dep.count}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DepartmentPAge
```
#### Event.js
```
import React, { useEffect, useState } from 'react'
import img1 from '../Images/sports-day.jpg'
import img2 from '../Images/art-exhibition.jpg'
import img3 from '../Images/tech-conference.jpg'
import img4 from '../Images/science-fair.jpg'
import "../css/event.css"
import Header from './HeaderComponent'
import Footer from './FooterComponent'

export default function EventPage() {
const title=['Art Exhibition','Tech Conference 2024','Science Fair']
const description=['A display of the finest art from upcoming artists','An annual tech conference with the latest in technology and innovation.','A showcase of the latest scientific discoveries and projects by students.']
const images_arr=[img2,img3,img4]
const [current_title,setCurrent_title]=useState("Sports Day");
const [current_description,setCurrent_description]=useState("An exciting day of sports activities and competitions.'");
const [image,setImage]=useState(img1)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function changecontent(){
    var index=randomNumber(0,2);
    const temp_title=title[index]
    const temp_description=description[index]
    const temp_image=images_arr[index]
    setCurrent_title(temp_title)
    setCurrent_description(temp_description)
    setImage(temp_image)
}
useEffect(()=>{
    setInterval(changecontent,6000)
},[]);
  return (
    <>
    <div className="events-container">
      <h1>Events</h1>
      <div className="event-card">
        <img src={image} className="event-image" />
        <h2>{current_title}</h2>
        <p>{current_description}</p>
      </div>
    </div>
    </>
  )
}
```
#### FooterComponents.js
```
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Saveetha Engineering College. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

```
#### HEaderComponents.js
```
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```
### CSS Files
#### About.js
```
.about-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  .about-title {
    text-align: center;
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .about-introduction {
    font-size: 1.2em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
  }
  
  .section-title {
    font-size: 1.8em;
    color: #444;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
  }
  
  .about-list {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .about-list-item {
    font-size: 1.1em;
    color: #555;
    margin-bottom: 10px;
  }
  
  .about-text {
    font-size: 1.1em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;
  }
```
#### Department.css
```
.department-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }
  
.department-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
.department-list {
    list-style-type: none;
    padding: 0;
  }
  
.department-item {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
.department-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }
  
  .department-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .department-table {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .department-table th,
  .department-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .department-table th {
    background-color: #f2f2f2;
    font-size: 1.2rem;
  }
  
  .department-table td {
    font-size: 1rem;
  }
  
  .department-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .department-table tr:hover {
    background-color: #ddd;
  }

```
#### Events.csss
```
.events-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }
  
  .events-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .event-card {
    width: 80%;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .events-container {
    text-align: center;
    padding: 20px;
  }
  
  .event-card {
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 500px;
  }
  
  .event-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .event-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .event-card h2 {
    font-size: 1.8rem;
    margin: 1rem 0;
  }
  
  .event-card p {
    font-size: 1.2rem;
  }

```
#### Home.css
```
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: rgb(63, 60, 60);
    text-align: center;

    background-image: url('../Images/college.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
    position: relative;
  }
  
  .home-container h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .home-container p {
    font-size: 1.5rem;
  }

```






