import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Brandon",
  lastName: "Rodriguez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer and code crafter",
  avatar: "/images/avatar.jpg",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/brandon1525",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/brandon-rdz",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:brandonalan.rdz@icloud.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer and code crafter</>,
  subline: (
    <>
      I'm Brandon, a software engineer with 9 years of experience, where I craft
      intuitive user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Brandon is a Software Engineer passionate about turning complex
        challenges into simple, elegant solutions. His expertise spans digital
        interfaces, interactive experiences, and the intersection of design and
        technology. With a user-centric approach and a strong command of modern
        development trends, Brandon strives to balance functionality and
        creativity, delivering results that exceed expectations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sonatafy Technologies",
        timeframe: "2020 - 2024",
        role: "Senior Fullstack Software Engineer",
        achievements: [
          <>
            <strong>The Institutes</strong> <br />
            Migrate the legacy Oracle Forms application to a modern
            JavaScript-based web application. The platform's UI/UX provide a
            smoother transition for end users, eliminating adaptation issues and
            reducing the learning curve.
          </>,
          <>
            <strong>Semantic AI</strong> <br />
            Create new features and modules while maintaining existing code.
            Develop micro-applications integrated into various parts of the main
            application and handle their communication through custom DOM
            events. Lead a development team and also the stand-ups,
            retrospective meeting and provide report to scrum master.
          </>,
        ],
        technologies: [
          "JavaScript",
          "React",
          "Angular",
          "Nodejs",
          "PostgreSQL",
          "AWS",
          "TypeScript",
          "Jasmine",
          "Jest",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        company: "Softtek",
        timeframe: "2018 - 2020",
        role: "Software Engineer",
        achievements: [
          <>
            <strong>IHG</strong> <br />
            Maintained and created multiple micro SPAs and communicate them
            using browser technologies. Planned and implemented AWS solutions
            such as Lambda functions and S3 buckets, overcoming challenges
            related to optimizing API calls Developed custom web components from
            Angular elements, ensuring they were as atomic as possible and
            well-documented with Storybook. The process for creating and
            publishing these components included development, UI review,
            testing, and final publication to npm libraries.
          </>,
        ],
        technologies: ["Angular", "AWS", "Storybook", "Jasmine", "Bootstrap"],
        images: [],
      },
      {
        company: "Neoris",
        timeframe: "2018 - 2018",
        role: "Team lead",
        achievements: [
          <>
            <strong>Cemex</strong> <br />
            Planned, designed, and structured a new global delivery system from
            schatch using Angular, ensuring a scalable and high-performance
            solution tailored to meet international demands.
          </>,
        ],
        technologies: ["Angular", "AWS", "Storybook", "Jasmine", "Bootstrap"],
        images: [],
      },
      {
        company: "EIT",
        timeframe: "2017 - 2018",
        role: "Frontend lead",
        achievements: [
          <>
            <strong>Nomipro</strong> <br />
            Coordinated frontend developers in the creation of a web system
            built with Angular and integrated with a .NET API, taking
            responsibility for reviewing and approving pull requests to ensure
            code quality and consistency. Led technical decision-making
            processes and established the core architecture of the application.
          </>,
        ],
        technologies: ["Angular", "AWS", "Storybook", "Jasmine", "Bootstrap"],
        images: [],
      },
      {
        company: "AgileZip",
        timeframe: "2016 - 2017",
        role: "Fullstack Developer",
        achievements: [
          <>
            <strong>CatchOn</strong> <br />
            Designed and developed a web system to capture and process school
            data, creating reports for principals and district managers. To
            optimize database performance and prevent overload, we implemented
            Redis for chunked data retrieval and a daily query summary pool.
            Although not directly responsible for the AWS infrastructure, I was
            involved in the context of using multiple EC2 instances to ensure
            efficient data processing through load balancing.
          </>,
        ],
        technologies: ["Angular", "AWS", "Nodejs", "Express", "Bootstrap"],
        images: [],
      },
      {
        company: "Witty Systems",
        timeframe: "2015 - 2016",
        role: "Frontend Developer",
        achievements: [
          <>
            <strong>CatchOn</strong> <br />
            Developed and planned a new web system. Implemented designs from
            mockups, ensuring consistency across different views and optimizing
            for responsive design. Integrated the system with external services
            through Ajax requests, enabling dynamic data interaction and
            enhancing user experience
          </>,
        ],
        technologies: ["Jquery", "Html", "Javascript", "Bootstrap"],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad Autonoma de Aguascalientes",
        description: (
          <>Bachelor of Systems Engineering. - January 2012 — January 2016</>
        ),
      },
      {
        name: "HackerRank",
        description: (
          <ul>
            <li>Software Engineer Certificate - August 2024</li>
            <li>Frontend Developer (React) Certificate - August 2024</li>
            <li>Angular(Intermediate) - August 2024</li>
          </ul>
        ),
      },
      {
        name: "Udemy",
        description: (
          <ul>
            <li>
              JavaScript and ES6 Challenges, Do you know JavaScript? - July 2019
            </li>
            <li>
              REDUX en Angular con NGRX: Desde las bases hasta la práctica -
              July 2019
            </li>
          </ul>
        ),
      },
      {
        name: "Code School",
        description: (
          <ul>
            <li>Accelerating Through Angular 2 - August 2016</li>
          </ul>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to replicate prototype from Figma to Websites.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Angular",
        description: <>Building SPA with Angular</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/angular.svg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
