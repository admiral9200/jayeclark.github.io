import { trainingMatrix } from "./training.js";

// Set footer
const footer = async () => {
  const footerData = await fetch('/footer.html');
  const text = await footerData.text();
  document.getElementById('footer-container').innerHTML = text;
  document.getElementById('footer-text').innerHTML = `${new Date().getFullYear()} &copy; Jay Clark<br>All rights reserved</p> `
};

footer();

// Tech Stack
const stack = [
  { name: "Android SDK", url: "./images/tech/android.png", dimension:"height", competence: 1 },
  { name: "Angular", url: "./images/tech/angular.png", competence: 1 },
  { name: "AWS", url: "./images/tech/aws.png", competence: 1 },
  { name: "Azure", url: "./images/tech/azure.png", competence: 1 },
  { name: "Bootstrap", url: "./images/tech/bootstrap.png", dimension: "height", competence: 1 },
  { name: "C", url: "./images/tech/c.png", dimension: "height", competence: 1 },
  { name: "C++", url: "./images/tech/cplusplus.png", dimension: "height", competence: 1 },
  { name: "C#", url: "./images/tech/csharp.png", competence: 1 },
  { name: "Chrome Extensions", url: "./images/tech/chromeextension.png", competence: 1 },
  { name: "Cypress", url: "./images/tech/cypress.png", competence: 1 },
  { name: "D3", url: "./images/tech/d3.png", competence: 1 },
  { name: "Dart", url: "./images/tech/dart.png", competence: 1 },
  { name: "Deluge", url: "./images/tech/deluge.jpeg", competence: 1 },
  { name: "Django", url: "./images/tech/django.png", competence: 1 },
  { name: "Docker", url: "./images/tech/docker.png", competence: 1 },
  { name: "Electron", url: "./images/tech/electron.png", competence: 1 },
  { name: "EJS", url: "./images/tech/ejs.png", competence: 1 },
  { name: "Firebase", url: "./images/tech/firebase.png", competence: 1 },
  { name: "Flask", url: "./images/tech/flask.png", competence: 1 },
  { name: "Gatsby", url: "./images/tech/gatsby.png", competence: 1 },
  { name: "Git", url: "./images/tech/git.png", competence: 3 },
  { name: "Go", url: "./images/tech/go.png", competence: 1 },
  { name: "Gradle", url: "./images/tech/gradle.png", competence: 1 },
  { name: "Java", url: "./images/tech/java.png", competence: 1 },
  { name: "JavaScript", url: "./images/tech/javascript.png", competence: 4 },
  { name: "Jekyll", url: "./images/tech/jekyll.png", competence: 1 },
  { name: "Jest", url: "./images/tech/jest.png", competence: 3 },
  { name: "Jinja", url: "./images/tech/jinja.png", competence: 1 },
  { name: "Heroku", url: "./images/tech/heroku.png", competence: 1 },
  { name: "Laravel", url: "./images/tech/laravel.png", competence: 1 },
  { name: "MySQL", url: "./images/tech/mysql.png", competence: 1 },
  { name: "PHP", url: "./images/tech/php.png", competence: 1 },
  { name: "Postgres", url: "./images/tech/postgresql.png", competence: 1 },
  { name: "Puppeteer", url: "./images/tech/puppeteer.png", competence: 1 },
  { name: "Python", url: "./images/tech/python.png", competence: 1 },
  { name: "QT", url: "./images/tech/qt.png", competence: 1 },
  { name: "Ruby", url: "./images/tech/ruby.png", competence: 2 },
  { name: "Ruby on Rails", url: "./images/tech/rails.png", competence: 2 },
  { name: "SASS", url: "./images/tech/sass.png", competence: 1 },
  { name: "Strapi", url: "./images/tech/strapi.png", competence: 1 },
  { name: "Tailwind", url: "./images/tech/tailwindcss.svg", competence: 1 },
  { name: "TravisCI", url: "./images/tech/travisci.png", competence: 1 },
  { name: "Typescript", url: "./images/tech/typescript.png", competence: 1 },
  { name: "Unity", url: "./images/tech/unity.png", dimenson: "height", competence: 1 },
  { name: "Vue", url: "./images/tech/vuejs.svg", competence: 1 },
  { name: "Wix", url: "./images/tech/wix.png", competence: 1 },
  { name: "Wordpress", url: "./images/tech/wordpress.png", competence: 1 },
  { name: "XCode", url: "./images/tech/xcode.png", competence: 1 },
  { name: "Yeoman", url: "./images/tech/yeoman.png", competence: 1 },
]

// Set display consts
const cardWidth = 170;
const imgHeight = 100;
const ribbonHeight = 135;
const arrowWidth = 20;

let startingCard = 0;
let cardsToDisplay = Math.floor((window.innerWidth * 0.8 - 40) / cardWidth);
let scrollInProgress = false;

function Card({name, url, competence, dimension}) {
  const div = document.createElement('div');
  div.style.width = cardWidth + 'px';
  div.style.padding = "0px 10px";

  const imgDiv = document.createElement('div');
  imgDiv.style.margin = "auto 0px";
  imgDiv.style.height = imgHeight;
  imgDiv.style.maxHeight = imgHeight;
  imgDiv.style.overflow = "hidden";
  imgDiv.style.display = "flex";
  imgDiv.style.justifyContent = "center";
  imgDiv.style.alignItems = "center";
  imgDiv.innerHTML = `<div style="border: 1px solid #666; padding: 10px; border-radius: 4px; text-align: center; margin: auto 0px"><b>${name}</b></div>`;
  if (url) {
    const image = document.createElement('img');
    image.src = url;
    image.alt = name;
    if (dimension === "height") {
      image.height = 100;
    } else {
      image.width = 100;
    }
    imgDiv.innerHTML = '';
    imgDiv.appendChild(image);
  }

  const ratingDiv = document.createElement('div');
  ratingDiv.style.display = "flex";
  ratingDiv.style.flexWrap = "nowrap";
  ratingDiv.style.justifyContent = "center";
  const rating1 = document.createElement('div');
  const rating2 = document.createElement('div');
  const rating3 = document.createElement('div');
  const rating4 = document.createElement('div');
  rating1.style.margin = "25px 2px 5px 2px";
  rating1.style.boarder = "1px solid #666";
  rating1.style.width = "10px";
  rating1.style.height = "10px";
  rating1.style.backgroundColor = competence >= 1 ? "green" : "#ccc";

  rating2.style.margin = "20px 2px 5px 2px";
  rating2.style.boarder = "1px solid #666";
  rating2.style.width = "10px";
  rating2.style.height = "15px";
  rating2.style.backgroundColor = competence >= 2 ? "green" : "#ccc";

  rating3.style.margin = "15px 2px 5px 2px";
  rating3.style.boarder = "1px solid #666";
  rating3.style.width = "10px";
  rating3.style.height = "20px";
  rating3.style.backgroundColor = competence >= 3 ? "green" : "#ccc";

  rating4.style.margin = "10px 2px 5px 2px";
  rating4.style.boarder = "1px solid #666";
  rating4.style.width = "10px";
  rating4.style.height = "25px";
  rating4.style.backgroundColor = competence >= 4 ? "green" : "#ccc";

  ratingDiv.appendChild(rating1);
  ratingDiv.appendChild(rating2);
  ratingDiv.appendChild(rating3);
  ratingDiv.appendChild(rating4);

  div.append(imgDiv);
  div.append(ratingDiv);

  return div;
}

function sliceCards(cards) {
  if (startingCard + cardsToDisplay > cards.length) {
    return [...cards.slice(startingCard), ...cards.slice(0, startingCard + cardsToDisplay - cards.length)];
  } 
  
  return cards.slice(startingCard, startingCard + cardsToDisplay);
}

function Ribbon(cards) {
  const ribbonDiv = document.createElement('div');
  ribbonDiv.style.display = "flex";
  ribbonDiv.style.flexWrap = "nowrap";
  ribbonDiv.style.justifyContent = "center";
  ribbonDiv.style.alignItems = "center";

  const arrowLeft = document.createElement('div');
  arrowLeft.style.width = arrowWidth + "px";
  arrowLeft.style.height = ribbonHeight + "px";
  arrowLeft.style.display = "flex";
  arrowLeft.style.justifyContent = "center";
  arrowLeft.style.alignItems = "center";
  arrowLeft.style.backgroundColor = "#ddd";
  arrowLeft.addEventListener('click', () => {

    if (scrollInProgress) return;
    scrollInProgress = true;
    // Set new starting card
    if (startingCard >= cardsToDisplay) {
      startingCard = startingCard - cardsToDisplay;
    } else {
      startingCard = cards.length - cardsToDisplay - startingCard;
    }

    // Get old div and its parent
    const oldCards = Array.from(document.getElementsByClassName('tech-cards'));
    const oldCardsParent = oldCards[0].parentElement;

    while (oldCards.length > 1) {
      oldCardsParent.removeChild(oldCards[0]);
      oldCards.shift();
    }

    // Create new div and append to ribbon
    const newCards = document.createElement('div');
    newCards.style.display = "flex";
    newCards.style.position = "absolute";
    newCards.style.flexWrap = "nowrap";
    newCards.style.justifyContent = "center";
    newCards.style.alignItems = "center";
    newCards.style.transition = "left 0.8s ease";
    newCards.classList.add('tech-cards');
    sliceCards(cards).forEach(card=>{
      const tempDiv = Card(card);
      newCards.append(tempDiv);
    })
    newCards.style.left = (-1 * cardWidth * cardsToDisplay) + 'px';
    oldCardsParent.appendChild(newCards);

    // Move both to the right
    setTimeout(() => {
      newCards.style.left = "0px";
      oldCards[0].style.left = cardsToDisplay * cardWidth + "px";  
    }, 20);

    setTimeout(() => {scrollInProgress = false}, 500);

    // Remove old div
    setTimeout(()=> {
      oldCards[0].classList.add("old-cards");
      const old = Array.from(oldCardsParent.getElementsByClassName("old-cards"));
      old.forEach(el => {
        oldCardsParent.removeChild(el);
      });
      }, 900);

  })
  const arrowImgL = document.createElement('img');
  arrowImgL.src = "./images/chevron-left.svg";
  arrowLeft.appendChild(arrowImgL);
  ribbonDiv.appendChild(arrowLeft)

  const cardsContainer = document.createElement('div');
  cardsContainer.style.display = "flex";
  cardsContainer.style.overflow = "hidden";
  cardsContainer.style.position = "relative";
  cardsContainer.style.width = (cardWidth * cardsToDisplay) + 'px';
  cardsContainer.style.height = ribbonHeight + 'px';

  const cardsDiv = document.createElement('div');
  cardsDiv.style.position = "absolute";
  cardsDiv.style.display = "flex";
  cardsDiv.style.left = "0px";
  cardsDiv.style.flexWrap = "nowrap";
  cardsDiv.style.justifyContent = "center";
  cardsDiv.style.alignItems = "center";
  cardsDiv.style.transition = "left 0.8s ease";
  cardsDiv.classList.add('tech-cards');

  sliceCards(cards).forEach(card => {
    const tempDiv = Card(card);
    cardsDiv.appendChild(tempDiv);
  })
  cardsContainer.appendChild(cardsDiv);
  ribbonDiv.appendChild(cardsContainer);
  const arrowRight = document.createElement('div');
  arrowRight.style.width = arrowWidth + "px";
  arrowRight.style.backgroundColor = "#ddd";
  arrowRight.style.height = ribbonHeight + "px";
  arrowRight.style.display = "flex";
  arrowRight.style.justifyContent = "center";
  arrowRight.style.alignItems = "center";
  const arrowImgR = document.createElement('img');
  arrowImgR.src = "./images/chevron-right.svg";
  arrowRight.appendChild(arrowImgR);
  arrowRight.addEventListener("click", () => {

    if (scrollInProgress) return;
    scrollInProgress = true;
        // Set new starting card
        if (startingCard + cardsToDisplay >= cards.length) {
          startingCard = startingCard + cardsToDisplay - cards.length;
        } else {
          startingCard += cardsToDisplay;
        }
    
        // Get old div and its parent
        const oldCards = Array.from(document.getElementsByClassName('tech-cards'));
        const oldCardsParent = oldCards[0].parentElement;

        while (oldCards.length > 1) {
          oldCardsParent.removeChild(oldCards[0]);
          oldCards.shift();
        }


    
        // Create new div and append to ribbon
        const newCards = document.createElement('div');
        newCards.style.display = "flex";
        newCards.style.position = "absolute";
        newCards.style.flexWrap = "nowrap";
        newCards.style.justifyContent = "center";
        newCards.style.alignItems = "center";
        newCards.style.transition = "left 0.8s ease";
        newCards.classList.add('tech-cards');
        sliceCards(cards).forEach(card=>{
          const tempDiv = Card(card);
          newCards.append(tempDiv);
        })
        newCards.style.left = (cardWidth * cardsToDisplay) + 'px';
        oldCardsParent.appendChild(newCards);

    
        // Move both to the right
        setTimeout(() => {
          newCards.style.left = "0px";
          oldCards[0].style.left = (-1 * cardsToDisplay * cardWidth) + "px";  
        }, 20);
    
        setTimeout(() => {scrollInProgress = false}, 500);
        // Remove old div
        setTimeout(()=> {
          oldCards[0].classList.add("old-cards");
          const old = Array.from(oldCardsParent.getElementsByClassName("old-cards"));
          old.forEach(el => {
            oldCardsParent.removeChild(el);
          });
          }, 900);    
  })
  ribbonDiv.appendChild(arrowRight);
  return ribbonDiv;
}

function renderTechRibbon() {
  const ribbon = document.getElementById('tech-ribbon');
  if (ribbon) {
    ribbon.innerHTML = '';
    const ribbonContent = Ribbon(stack);
    ribbon.appendChild(ribbonContent);
  }
}

renderTechRibbon();

// adjust percentages

const trainingSections = Object.keys(trainingMatrix);

trainingSections.forEach(section => {

  const isDateInPast = (str) => {
    const dates = str.split("/");
    const [month, day, year] = [Number(dates[0]), Number(dates[1]), Number(dates[2]) + 2000];
    const todayMonth = new Date().getMonth() + 1;
    const todayDate = new Date().getDate();
    const todayYear = new Date().getFullYear();
    if (month < todayMonth && year <= todayYear) {
      return true;
    }
    return month === todayMonth && year === todayYear && day < todayDate;
  };

  const element = document.getElementById(`${section}-progress`);
  const span = element.getElementsByClassName("sr-only")[0];
  
  const trainingArray = trainingMatrix[section];

  const pointsCompletedToDate = trainingArray.filter(option => isDateInPast(option.date)).reduce((a,b) => a + b.weight, 0);
  const totalPoints = trainingArray.reduce((a,b) => (a + b.weight), 0);
  const percentProgress = Math.ceil(pointsCompletedToDate * 100 / totalPoints);
  
  element["aria-valuenow"] = percentProgress.toString();
  element.style.width = percentProgress + '%';
  span.innerHTML = percentProgress + '% Completed';

  if (percentProgress === 100) {
    const title = document.getElementById(`${section}-title`);
    title.innerHTML += ' - COMPLETED!';
  }

})