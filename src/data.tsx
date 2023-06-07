// Images About Page
const reactjs = require("./assets/about/reactjs.png");
const nextjs = require("./assets/about/nextjs.png");
const tailwind = require("./assets/about/tailwind.png");
const nodejs = require("./assets/about/nodejs.png");
const git = require("./assets/about/git.png");
const mysql = require("./assets/about/mysql.png");
const gcp = require("./assets/about/gcp.png");
const firebase = require("./assets/about/firebase.png");
const js = require("./assets/about/js.png");
const ts = require("./assets/about/ts.png");

// Images Projects Page
const project1 = require("./assets/impactpalu.png");
const project2 = require("./assets/webapp-pt.png");
const project3 = require("./assets/budayai.png");

export const dataExperience = {
  datas: [
    {
      id: 0,
      company: "Mau Belajar Apa",
      date: "January 2023 - Present",
      title: "Junior Frontend Engineer",
      desc: "Build, maintain, develop new features, and improve the education platform of the Eduqat web app using Next.js.",
    },
    {
      id: 1,
      company: "Kalla Group",
      date: "August 2022 - December 2022",
      title: "Web Developer Intern",
      desc: "Develop WhatsApp Blast using Next.js, Express.js and Baileys. I learn a lot about work together with team UI/UX, System Analyst and Product Manager.",
    },
    {
      id: 2,
      company: "Kodingna",
      date: "June 2022 - September 2022",
      title: "Frontend Web Developer Intern",
      desc: "Create landing page design on Figma and develop it with React.js and Tailwind.css. There, I learn about agile methodologies.",
    },
      // {
      //   id: 3,
      //   company: "Bangkit Academy 2022",
      //   date: "February 2022 - July 2022",
      //   title: "Cloud Computing Learning Path",
      //   desc: "Learn Cloud Computing Fundamental using Google Cloud Platform, Softskills, and got friends from all over Indonesia",
      // },
  ],
};

export const dataSkills = {
  datas: [
    {
      id: 0,
      image_url: reactjs,
      title: "React.js",
    },
    {
      id: 1,
      image_url: nextjs,
      title: "Next.js",
    },
    {
      id: 2,
      image_url: nodejs,
      title: "Node.js",
    },
    {
      id: 3,
      image_url: js,
      title: "Javascript",
    },
    {
      id: 4,
      image_url: ts,
      title: "Typescript",
    },
    {
      id: 5,
      image_url: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      image_url: git,
      title: "Git",
    },
    {
      id: 7,
      image_url: mysql,
      title: "MySQL",
    },
    {
      id: 8,
      image_url: firebase,
      title: "Firebase",
    },
    {
      id: 9,
      image_url: gcp,
      title: "GCP",
    },
  ],
};

export const projectCards = {
  datas: [
    {
      id: 0,
      image_url: project1,
      project_name: "Impact Palu",
      desc: "Develop a project used Next.js with Tailwind css",
    },
    {
      id: 1,
      image_url: project2,
      project_name: "Web App Programming Tadulako",
      desc: "Develop a project used React Typescript with Tailwind.css",
    },
    {
      id: 2,
      image_url: project3,
      project_name: "BudayAI",
      desc: "Create a RESTFul API used Express.js and Firestore database. And then deploy it using Cloud Function",
    },
  ],
};
