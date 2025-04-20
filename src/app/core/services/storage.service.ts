import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Project} from '../models/project';
import {CaseStudy} from '../models/case-study';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private platformId = inject(PLATFORM_ID);

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

  /*
  * 4. Reducing Developer Onboarding Time by 70% with Systematic Documentation and DX Tweaks
    Focus: Improving the Developer Experience (DX) by creating a smooth onboarding process and effective documentation.

  * 5. When Third-Party APIs Break: Designing Failsafes for a Mission-Critical Workflow
    Focus: Handling unexpected API failures gracefully by building resilient systems and fail-safe mechanisms.
   */

  caseStudies: CaseStudy[] = [
    {
      title: 'Rebuilding Without Burnout: A Zero-Downtime Rewrite of a Production System',
      description: '"Rebuilding Without Burnout: A Zero-Downtime Rewrite of a Production System" is about the process of revamping an existing production system while ensuring that there is no disruption to its availability or functionality. The goal is to modernize, improve performance, or add new features to an existing system without negatively impacting the user experience or business operations.',
      detail: [
        {
          title: 'Incremental Development and CI/CD',
          body: 'The first step is to identify the areas of improvement. Divide the whole feature into small chunks. Start with smallest chunk and gradually increase the size of the chunk until the whole feature is completed. This avoids the burnout, pressure and risk of braking the whole system. The CI/CD pipeline is used to automate the process of building, testing, and deploying the code. The process should look something like this: pick a feature, analyze it, brainstorm, design, develop, test, deploy, and repeat.',
        },
        {
          title: 'Best Practices and Modularity',
          body: 'Following the best practices ensures that the codebase is clean, understandable, testable and maintainable. While writing the code the core areas to focus is code readability & consistency, separation of concerns, Test-driven development, version control discipline, documentation and code reviews. A modular system is the key to scalability, ease of testing and flexibility. Some core aspects of modularity are: loose coupling, high cohesion, reusable components, independent deployability and plug-and-play design.'
        },
        {
          title: 'Zero Downtime Strategy and Tools',
          body: 'A zero downtime strategy ensures that system updates or rewrites do not disrupt the availability of the service. The goal is to deploy changes safely and gradually while the system continues to function. This is achieved through approaches like blue-green deployment, canary release, feature toggles, and gateway-based redirection. Each of these allows controlled rollout and instant rollback in case of failure. To support this strategy, tools like Docker, Kubernetes, NGINX, Prometheus, and CI/CD pipelines are used. These tools help in containerization, orchestration, traffic control, monitoring, and automated deployment, forming a reliable setup for continuous, interruption-free updates.'
        },
        {
          title: 'Architecture is the key to solution',
          body: 'A well-thought-out architecture forms the foundation of a scalable, maintainable and flexible system. During a rewrite, the architecture should support modularity, loose coupling, and separation of concerns. This enables independent development, easier testing, and faster iteration. The design should accommodate future changes with minimal effort and prevent tight dependencies that lead to bottlenecks. Key architectural patterns to consider include microservices, layered architecture, event-driven systems, and domain-driven design. A good architecture not only solves today’s problems but prepares the system for future growth and adaptability.',
        }
      ],
      tags: [
        'zero downtime deployment',
        'production system rewrite',
        'modern software architecture',
        'refactoring live systems',
        'burnout-free development',
        'developer portfolio case study',
        'scalable architecture patterns',
        'senior developer best practices',
        'junior developer onboarding',
        'live system refactoring',
        'CI/CD deployment strategy',
        'freelance software engineering',
        'system migration strategy',
        'blue-green deployment',
        'microservices refactor',
        'devops rewrite strategy',
        'modular code architecture',
        'zero downtime microservices',
        'code rewrite without system crash',
        'developer case study rewrite',
        'rebuilding legacy systems',
        'hiring software developers',
        'drop service tech solutions',
        'stable deployment patterns',
        'rewriting monolith to microservices',
        'developer-friendly architecture',
        'software rewrite without downtime'
      ]

    },
    {
      title: 'From Chaos to Clarity: How I Untangled a Client’s Business Logic Into Clean, Scalable Modules',
      description: 'I was invited to migrate an existing system to a new one. The previous codebase is working perfectly fine and solving the core problems like event registration and serving images. That was an event management website. I have observed that there are some security vulnerabilities, bad performance—the operations are taking a lot more time. Though the UI is great, the loading is quite slow and data consuming. Let\'s discuss how I overcome with a new and efficient solution.',
      detail: [
        {
          title: 'The art of reverse engineering and untangling',
          body: 'Initially I have started from the home of the application towards nested layers to understand the flow of application. After a few moments of observation I have a logical aspect, models use for communication and function call stack. After a few days of inspection I had the flow for each and every feature of application.'
        },
        {
          title: 'Discuss the scope and improvement',
          body: 'After understanding the existing code base it is recommended to discuss the further improvement and scope. Sometimes un discussed feature lead to over engineering which is a waste of cost and time. So before proceeding further I conducted a question answer session to clearly define the project scope and improvements.'
        },
        {
          title: 'Planning, migration and development',
          body: 'I had the whole flow and requirements. First of all we planned to organising the existing code base according to their responsibilities and the type of data they are dealing with. Un necessary data and object creation was leading to consume excessive memory. Again in proper usage of thread pool was leading to idle threads and some where under performance. While migrating the database it is best to keep database dump as backup. Again there should be backward compatibility with existing data. While configuring thread pool we have requested their traffic details to understand actual need of threads. Then it\'s time to develop new features. It is strictly recommended to follow the best practices and principles like (....). At the end we have a layered architecture solution that is way more scalable and maintainable than before.'
        },
        {
          title: 'Reasoning and Optimization',
          body: 'Performance has already enhanced to a certain extent. Now it\'s time for brainstorming and enhance the performance to fulfill current requirements. The fundamental data structures are key to optimization. For example in the current old code base the registration details are being stored in a list and list is being synchronised with database. This was reducing the database overhead yet the details filtering is in efficient. I come up with a linked hash table that has the event id as a key and the insertion of details are being done as per username alphabetically. Which helped to implement binary search of user details. Another thing I have implemented is asynchronous request executions. Some request are returning no resources yet keep blocking main thread. I had created another thread to execute these kind of task and release main thread.'
        }
      ],
      tags: [
        'event management website refactor',
        'reverse engineering existing system',
        'freelance system migration',
        'scalable module development',
        'legacy system improvement',
        'thread pool optimization',
        'database migration strategy',
        'async request optimization',
        'code structure analysis',
        'real client project case study',
        'modular backend design',
        'performance boost with data structures',
        'developer portfolio case study',
        'drop service tech execution',
        'backend system refactor',
        'technical debt resolution',
        'system re-architecture',
        'codebase inspection and restructure',
        'low-level optimization',
        'clean and layered architecture'
      ]
    },
    {
      'title': 'Shipping Fast, Sleeping Well: Delivering a Revenue-Generating MVP in 21 Days',
      'description': 'This case study is about delivering a Minimum Viable Product (MVP) under a tight 21-day deadline without sacrificing code quality, personal health, or ethical standards. The project required a calculated and focused approach that balanced client needs, time constraints, and technical feasibility. The goal was to build something functional and revenue-generating with speed, responsibility, and peace of mind.',
      'detail': [
        {
          'title': 'Work Based on Sprints',
          'body': 'This is crucial to work calculatively when there is a deadline. It is recommended to divide the project into different chunks and work based on sprints to deliver product in time. Most importantly, set realistic goals that are achievable. Never make false promises. Ethics do matter.'
        },
        {
          'title': 'Work-Life Balance',
          'body': 'Work-life balance is an important aspect for time-packed projects like this. A proper mixture of work and relaxation outputs the best productivity. In my case, I kept my working period from morning 7 am to 1 pm which was an intense development and coding session. After lunch, it was like 1 to 2 hrs of brainstorming and planning for the next day. I completely kept evenings as a relaxation and chilling period. Sometimes I prefer to learn new technologies in the evening. This works for me to get what I need.'
        },
        {
          'title': 'Third-Party Library and API',
          'body': 'When time is limited it is best to go for third-party libraries or APIs. We don\'t have to implement everything but those are already implemented and we have to integrate. These types of things are often paid. But in these kinds of situations, it is worthy to discuss with the client what to prioritize. Sometimes the solution may come as cheaper alternatives, paid ones, or time relaxation but those are situational decisions.'
        }
      ],
      'tags': [
        'mvp development case study',
        'fast delivery without burnout',
        'sprint-based product development',
        'ethical freelance practices',
        'developer work-life balance',
        'freelance mvp delivery',
        '21 day mvp launch',
        'drop service developer support',
        'realistic project planning',
        'deadline focused development',
        'third-party integration strategy',
        'startup mvp launch',
        'freelance tech solutions',
        'chill and code workflow',
        'developer mental health',
        'fast project execution',
        'client freelancer collaboration',
        'developer case study',
        'code quality under pressure',
        'freelancer project ethics'
      ]
    }
  ];

  setItem(key: string, value: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      let item = localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) as T : null;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

}
