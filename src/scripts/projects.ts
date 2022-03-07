interface Project {
  name: string;
  thumbnail: string;
  url: string;
  github: string;
  description: string;
  icons: Array<string>;
  subtitle: string;
  feature: boolean;
}

interface Category {
  category: string;
  slug: string;
  description: string;
  order: number;
  projects: Array<Project>;
}

export const projects: Array<Category> = [
  {
    category: "Back End",
    slug: "backend",
    description:
      "I work primarily in Node.js on the back end, and have also done some work in Ruby on Rails, Flask, and LAMP.",
    order: 1,
    projects: [
      {
        name: "Instaplate",
        thumbnail: "/images/instaplate-pic.png",
        url: "http://instaplate.herokuapp.com",
        github: "https://github.com/jayeclark/instaplate-backend",
        description:
          "This full stack project envisions what it would look like if Instacart started offering restaurant delivery a la Ubereats or Doordash. It has a Next.js front end, a Strapi api layer, and a MongoDB back end data store. An overview deck for the project is <a href='https://docs.google.com/presentation/d/1HaBLvaFerOTsETtlinI3tMJwsH72gzbk/edit?usp=sharing&ouid=104625467728173129269&rtpof=true&sd=true' target='_blank' rel='noreferrer'>available here</a>.",
        icons: [],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;React, Strapi, MongoDB",
        feature: true,
      },
      {
        name: "WhatsApp",
        thumbnail: "/images/whats-app.png",
        url: "https://jayeclark.github.io/whatsapp/",
        github: "https://github.com/jayeclark/whatsapp/",
        description:
          "A simple chat application that uses Firebase for its data store and authentication. Client interacts with Firebase directly (no intermediae API layer is needed.)",
        icons: [],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;Vanilla JS, Firebase",
        feature: false,
      },
      {
        name: "Holy Grail Layout",
        thumbnail: "/images/holygrail-thumbnail.png",
        url: "http://jayeclark.github.io/holy-grail",
        github: "https://github.com/jayeclark/holy-grail/",
        description:
          "A small demo project using React, Express and Redis. Express serves the API routes and static client files, while Redis provides the persistent data store. Clicking the plus and minus buttons adds additional sentences of 'Lorem Ipsum' text to that area of the page.",
        icons: [],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;React, Express, Redis",
        feature: false,
      },
    ],
  },
  {
    category: "Open Source Software",
    slug: "opensourcesoftware",
    description:
      "I've contributed code to more than <b>70 open source software projects</b> including:<ul style='list-style-type: none; padding-left: 0px;display:flex;flex-wrap:wrap;justify-content:center'><li style='padding: 5px;'><img alt='typescript' src='../src/assets/images/ts-lettermark-white.png' height='24px'></li><li style='padding: 5px;'><img alt='O3DE' height='24px' src='../src/assets/images/o3de.png'></li><li style='padding: 5px;'><img style='margin: 0px 0px 4px 4px' alt='react bootstrap' src='../src/assets/images/react-bootstrap.svg' height='18px'>&nbsp;&nbsp;<b>React Bootstrap</b></li><li style='padding: 5px;'><img alt='chatwoot' src='../src/assets/images/chatwoot.svg' height='22px'></li><li style='padding: 5px;'><img src='../src/assets/images/metamask.png' height='24px' alt='Metamask'></li><li style='padding: 5px;'><img src='../src/assets/images/materialui.png' height='32px'></li></ul><span>View more of my contributions here: <a href='https://github.com/jayeclark/jayeclark/blob/main/opensourcechallenge.md' target='_blank' rel='noreferrer'>Open Source Challenge</a></span>",
    order: 2,
    projects: [
      {
        name: "RailsDev",
        thumbnail: "/images/railsdev-thumbnail.png",
        url: "https://github.com/pulls?q=is%3Apr+author%3Ajayeclark+repo%3A%22joemasilotti%2Frailsdevs.com%22+is%3Amerged+",
        github: "https://github.com/joemasilotti/railsdevs.com",
        description:
          "RailsDev is a reverse job board for Rails developers. For this project, I implemented a notification badge and notification system UI. I had no experience in Ruby or Ruby on Rails prior to starting this effort.",
        icons: ["/images/display.svg", "/images/api.svg", "/images/server.svg"],
        subtitle:
          "<img src='../src/assets/images/code.svg'>&nbsp;300 lines of code changed",
        feature: false,
      },
      {
        name: "Interactivenn",
        thumbnail: "/images/interactivenn-thumbnail.png",
        url: "https://github.com/pulls?q=is%3Apr+author%3Ajayeclark+repo%3Aheberleh%2Finteractivenn+is%3Amerged",
        github: "https://github.com/heberleh/interactivenn",
        description:
          "This scientific resource for the interactive visualization of the intersection of sets had an outdated (pre 2015) Javascript codebase. I completed a major refactoring & modularization of the backend logic to prepare the diagram and set services for publishing on the npm registry. I also gave the UI a minor facelift.",
        icons: ["/images/display.svg", "/images/api.svg"],
        subtitle:
          "<img src='../src/assets/images/code.svg'>&nbsp;4000+ lines of code changed",
        feature: false,
      },
      {
        name: "Rotting Research",
        thumbnail: "/images/rottingresearch-thumbnail.png",
        url: "https://github.com/pulls?q=is%3Apr+author%3Ajayeclark+repo%3Amarshalmiller%2Frottingresearch+is%3Amerged+",
        github: "https://github.com/marshalmiller/rottingresearch",
        description:
          "This python/flask resource to help researchers identify outdated links in scientific publications needed general styling improvements as well as a responsive design that would work on tablets and phones. I made minor adjustments to the UI, using some of the methods outlined on <a href='https://www.refactoringUI.com' target='_blank' rel='noreferrer'>RefactoringUI.com</a>, and the result was a substantial improvement in the UI.",
        icons: ["/images/display.svg"],
        subtitle:
          "<img src='../src/assets/images/code.svg'>&nbsp;500+ lines of code changed",
        feature: false,
      },
    ],
  },
  {
    category: "Front End",
    slug: "frontend",
    description:
      "I work primarily in React, Vue, and vanilla JS on the front end. I've also done some work with Angular, and advanced customization in Wordpress and Wix.",
    order: 3,
    projects: [
      {
        name: "Bad Bank",
        url: "https://jayeclark.github.io/banking/",
        github: "https://github.com/jayeclark/banking",
        thumbnail: "/images/badbank.png",
        description:
          "This front end project allows users to create accounts, deposit and withdraw funds, view recent transactions... and also view all user account info and passwords! Data is stored locally and resets with each reload.",
        icons: ["/images/display.svg"],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;React",
        feature: false,
      },
      {
        name: "Clones",
        url: "https://jayeclark.github.io/front-end/",
        github: "https://github.com/jayeclark/front-end",
        thumbnail: "/images/clones.png",
        description:
          "lones of various commercial websites' desktop apps, with a toggler function to load different sites into the app. Built with React. <i>Note - does not work on mobile.</i>",
        icons: ["/images/display.svg"],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;React",
        feature: false,
      },
      {
        name: "Ms. Pacman",
        url: "https://jayeclark.github.io/mspacman/",
        github: "https://github.com/jayeclark/mspacman",
        thumbnail: "/images/pacman.png",
        description:
          "A desktop browser game built with vanilla JS. Ms. Pac-Man eats dots and runs from Inky, Blinky, Pinky & Clyde while racking up points on the scoreboard. Surprisingly difficult to beat!",
        icons: ["/images/display.svg"],
        subtitle: "<img src='../src/assets/images/code.svg'>&nbsp;Vanilla JS",
        feature: false,
      },
    ],
  },
];
