import ommpLogo from '../public/assets/images/ommp-logo.png';
import envastLogo from '../public/assets/images/logoenvast.png';
import nategLogo from '../public/assets/images/logonateg.png';
import microsoftLogo from '../public/assets/images/logomic.png';
import internship1 from '../public/assets/images/intership1.PNG';
import internship2 from '../public/assets/images/internship2.PNG';
import ecommerceWomen from '../public/assets/images/e-commerce-women.PNG';
import ecommerceKids from '../public/assets/images/e-commerce-kids.PNG';
import issat1 from '../public/assets/images/issat1.PNG';
import issat2 from '../public/assets/images/issat2.PNG';
import uiux from '../public/assets/images/uiuxxxxx.png';
import webDev from '../public/assets/images/web-dev.png';
import deepLearning from '../public/assets/images/deep-learning.png';

export const workExperienceData = [
  {
    title: 'Software Engineer Intern - Conception Phase',
    organization: 'Office de la Marine Marchande et des Ports',
    duration: 'July 2023 - August 2023',
    description: 'Contributed to the conception of web applications by gathering requirements, brainstorming solutions, and collaborating with the development team to outline project specifications and designs.',
    img: ommpLogo,
  },
  {
    title: 'Junior Web Developer',
    organization: 'ENVAST',
    duration: 'July 2024 - September 2024',
    description: 'Assisted in developing web applications using React and Laravel, participating in code reviews and agile development processes.',
    img: envastLogo, 
  },
];

export const associativeExperienceData = [
  {
    title: 'Projects Department Leader - Charity and Junior',
    organization: 'NATEG ISSATSo Club',
    duration: 'September 2023 - June 2024',
    description: 'Led a team in organizing charity events, coordinating logistics, and promoting participation to support various community initiatives. Worked collaboratively with members to ensure successful outcomes and foster engagement.',
    img: nategLogo, 
  },
  {
    title: 'Head of Basic Web Department',
    organization: 'MISCROSOFT ISSATSO Club',
    duration: 'September 2024 - present',
    description: 'I lead workshops and training sessions focused on foundational web development skills. Taught basic web development concepts, including HTML, CSS, and JavaScript. Developed lesson plans and provided hands-on guidance to students, fostering a supportive learning environment.',
    img: microsoftLogo, 
  },
];

export const ProjectData = [
  {
    title: 'Skill Forge',
    description: 'A full-stack web app using React and Laravel, featuring user authentication, course management, and dynamic theming.',
    defaultImg: internship1, 
    hoverImg: internship2,  
    github:'https://github.com/aya-bani/SkillForge'
  },
  {
    title: 'E-commerce',
    description: 'EcomEase is a web application for managing online shopping and transactions, designed using React , Tailwindcss and firebase ',
    defaultImg: ecommerceWomen, 
    hoverImg: ecommerceKids,   
    github:'https://github.com/aya-bani/e-commerce'
  },
  {
    title: 'Issatso Management',
    description: 'ISSATSoManagement is a web application for managing academic and administrative tasks, designed using React and Tailwindcss while using springboot for the backend .',
    defaultImg: issat1, 
    hoverImg: issat2,   
    github:'https://github.com/aya-bani/issatsomanagement_fullapp'
  },
];

export const interests = [
  {
    image: uiux, 
    title: "UI/UX design",
    description: "Designing intuitive and visually appealing user interfaces that enhance user experience, ensuring seamless navigation, accessibility, and engagement."
  },
  {
    image: webDev,
    title: "Web Development",
    description: "Building responsive, high-performance websites with clean code, seamless functionality, and an intuitive user experience."
  },
  {
    image: deepLearning,
    title: "Machine Learning",
    description: "Building efficient and scalable machine learning models with clean code, seamless integration, and insightful data-driven solutions."
  }
];
