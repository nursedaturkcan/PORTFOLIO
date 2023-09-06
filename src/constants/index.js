import {
    mobile,
    backend,
   nextjs,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    sql,
   netflixclone,
   express,
  reactnative,
  chatapp,
    flightsradar,
    youtubeclone,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React Native",
      icon: reactnative,
    },
  

    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Mimcode",
      
      iconBg: "#383E56",
      date: "January 2022",
      points: [
        "Working as a react frontend developer at Mimcode İstanbul.",
        "JS ,React,Es6,React-Redux,Redux-toolkit",
        "ExperienceinCSS,SCSS,Bootstrapt,React-Bootstrapt and other responsive design libraries like Tailwind etc.",
        
        "Working with Context API",
        "E-commerce,blog,social media projects and more.",
        "MVC,Mob Programming in an agile methodology trello/kanban ,JIRA",
        
      ],
    },
   
  ];
  

  
  const projects = [
    {
      name: "Chat App",
      description:
        "This project involves creating a React-based chat application. It integrates services like authentication, database, and storage using Firebase. The application presents a authentication screen where users can sign in with their Google accounts. After signing in, users can send messages to different chat rooms.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      
      ],
      image: chatapp,
      source_code_link: "https://github.com/nursedaturkcan/ChatAppWithFirebase",
    },
    {
      name: "Flight Radar",
      description:
        "This project is a web application that displays flight data on a map and allows users to view flight details. The application is developed using React and Redux libraries .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "reduxtoolkit",
          color: "pink-text-gradient",
        },
      ],
      image: flightsradar,
      source_code_link: "https://github.com/nursedaturkcan/flightsRadarWithRTK",
    },
    {
      name: "Youtube Clone",
      description:
        "This project encompasses a part of the frontend of a YouTube-like video sharing platform. Users can watch videos, perform searches, view popular videos on the homepage, and explore videos based on their interests through categorized sections",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "contextapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeclone,
      source_code_link: "https://github.com/nursedaturkcan/YoutubeCloneWithReact",
    },
    {
      name: "Netflix Clone",
      description:
        " This project appears to be a movie and TV show information application. The homepage displays popular content in film and TV show categories. The application utilizes React, Redux, and Redux-Thunk to fetch and manage data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "redux-thunk",
          color: "pink-text-gradient",
        },
      ],
      image: netflixclone,
      source_code_link: "https://github.com/nursedaturkcan/MovieSiteWithRedux-ReduxThunk",
    },
  ];
  
  export { services, technologies, experiences, projects };