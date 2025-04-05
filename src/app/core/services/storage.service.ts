import {Injectable} from '@angular/core';
import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  name: string = 'Abhisek Mohanty';
  email: string = 'mohantyabhisek@hotmail.com';
  github: string = 'https://github.com/abhisekmohantychinua';
  linkedIn: string = 'https://linkedin.com/in/mohanty-abhisek/';
  whatsapp: string = 'https://wa.me/+919439485166';
  profession: string = 'Full Stack Java Developer';
  description: string[] = ['Web Designer', 'Competitive Coder', 'Fullstack Developer', 'Backend Service Developer', 'DevOps Engineer', 'Java Geek', 'Freelancer', 'Tech Mentor'];
  aboutme: string[] = [
    'I don’t follow trends, I create them.',
    'A developer, thinker, and creator. My journey is about breaking conventions, embracing philosophy, and building experiences that leave an impact.',
    'But at my core, I’m just someone who chose a different path. Like many, I could have followed the conventional route—secure a job, settle into a routine. But something about that never felt right. I build because I love the process of creation, not just the outcome. I explore because I believe curiosity is more powerful than rules. I chose this path because I wanted to create something that people use every day, something that genuinely makes their lives better.',
    'I’m not here to impress—I’m here to express and build.'
  ];

  projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce (Microservices)',
      description: [
        'This is the most advanced project I have worked on. Built with Microservices architecture, it features an Authorization Server that provides authentication for all other services.',
        'It follows OAuth2 Authorization Code Flow (PKCE) and supports Opaque token. The API Gateway includes complex routing and request modifications.',
        'Implemented cloud concepts like Service Discovery, Config Server, and Service Monitoring.',
        'The Payment Server handles transactions and has a virtual implementation of Webhooks. It has independent security separate from the Authorization Server.',
        'All services, along with MySQL and MongoDB, are containerized with Docker. Kubernetes is used for container orchestration, networking, and persistent data storage.',
        'Features to be added: Wallet, Customer Chatting, Notification via Message Broker.'
      ],
      technologies: [
        'Java', 'Spring Boot', 'Microservices', 'OAuth2', 'Opaque Token',
        'API Gateway', 'Service Discovery', 'Webhooks', 'MySQL', 'MongoDB',
        'Docker', 'Kubernetes', 'Networking', 'JavaScript'
      ],
      image: '1.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/E-Commerce-Microservices',
      }
    },
    {
      id: '2',
      title: 'E-Commerce (Full Stack)',
      description: [
        'This is a full stack e-commerce application and separate from the previous one. It has user authentication with JWT, cart, order, admin, managing dashboard features. It follows the standard e-commerce application flow. ',
        'The application has a Spring Boot Api, Angular frontend, MySQL database. Networking, Data Persistency and Deployment is managed by Docker',
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
      image: '2.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/E-Commerce-Monolithic'
      }
    },
    {
      id: '3',
      title: 'Snippet Saver (Full Stack)',
      description: [
        'The purpose of the website is to provide developers from across the world with access to code snippets that assist during coding and building projects. This web application is like a social media platform for coders, where code snippets are shared instead of images, videos, and media.',
        'This application has Spring Boot backend Api and the Api is consumed by React frontend. The React frontend integrates with Microsoft Monaco Editor API to provide code editor. All the application is containerized with Docker. '
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Docker', 'Monaco Editor API'],
      image: '3.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/snippetsaver'
      }
    },
    {
      id: '4',
      title: 'Snippet Saver (Microservices)',
      description: [
        'This is a separate application which is built with Microservices architecture and implements Cloud concepts like API Gateway, Routing, Authorization Server(non-standard), Service Discovery, Config Server. The code base is with Spring Boot'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'API Gateway', 'Config Server'],
      image: '4.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/SnippetSaver2'
      }
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: [
        'This is my portfolio application. All the content rendering on the page is dynamic because I have a managing dashboard on my system for the application through which I upload or delete my projects. ',
        'The whole application is made up of Spring MVC and MongoDB as database. I have containerized this using Docker and deployed using Render.com. '
      ],
      technologies: ['Java', 'Spring MVC', 'MongoDB', 'Docker'],
      image: '5.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/Portfolio',
        visit: 'https://coderabhisek.onrender.com/'
      }
    },
    {
      id: '6',
      title: 'FAKE STORE API (Client)',
      description: [
        'There is an API which is very popular named FakeStoreApi. This provides an abstract API for creating client application.  I have created the client application using Angular and Material Angular library. It has a very classic UI.  Along with it I have created its Documentation which defines my documentation writing skills. This is deployed on GitHub Pages.'
      ],
      technologies: ['Angular', 'Material UI'],
      image: '6.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/fakestoreclient',
        visit: 'https://abhisekmohantychinua.github.io/fakestoreclient/'
      }
    },
    {
      id: '7',
      title: 'Avyakt',
      description: [
        'Avyakt is one of technical events of our department. So, I have created my version of the website using the already existing website and deployed it on GitHub Pages. This is an Angular application with premium UI things like Parallax Scrolling, Hover Dropdown.'
      ],
      technologies: ['Angular', 'Parallax Scrolling', 'UI Effects'],
      image: '7.jpg',
      links: {
        github: 'https://github.com/abhisekmohantychinua/avyakt',
        visit: 'https://abhisekmohantychinua.github.io/avyakt/'
      }
    }
  ];
}
