const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');

burger.onclick = function burger() {
  navLinks.style.right = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

// workks part popup
const projects = [
  {
    id: 'card1',
    title: 'Tonic',
    image: './images/22.png',
    image1: './images/./SnapshootPortfolio(1).png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },

  {
    id: 'card2',
    title: 'Multi-Post Stories',
    image: './images/21.png',
    image1: './images/SnapshootPortfolio(2).png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    liveLink: 'divinecharlotte.github.io/portifolio-setup',
  },

  {
    id: 'card3',
    title: 'Facebook 360',
    image: './images/23.png',
    image1: './images/SnapshootPortfolio(3).png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  {
    id: 'card4',
    title: 'Uber Navigation',
    image: './images/tonic.jpg',
    image1: './images/SnapshootPortfolio.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
];

const section = document.getElementById('portfolio');
projects.forEach((project, index) => {
  const div = document.createElement('div');
  div.className = 'main-container';
  div.innerHTML = `

 
      <div class="part1">
      <img class="picture" src="${project.image1}" alt="image"/>
        <img class="pic" src="${project.image}" alt="image" />
      </div>
      <div class="part2">
        <div>
          <h2 class="heading">${project.title}</h2>
          <div class="structure">
            <span class="canopy">CANOPY</span>
            <img src="./images/./counter.png" alt="counter" />
            <span class="transpalent">Back End Dev</span>
            <img src="./images/./counter.png" alt="counter" />
            <span class="transpalent">2015</span>
          </div>
        </div>
        <div class="box-content">
          <p>
            A daily selection of privately personalized reads; no accounts or
            sign-ups required.
          </p>
        </div>
        <div>
          <ul class="flex-container">
            <li>${project.technologyList[0]}</li>
            <li>${project.technologyList[1]}</li>
            <li>${project.technologyList[2]}</li>
          </ul>
        </div>
        <div><a><button type="button" class="about" id ="see-button-${index}" >see project</button></a></div>
      </div  
  
    `;
  section.appendChild(div);
});

const seeButtons = [];
projects.forEach((project, index) => seeButtons.push(document.getElementById(`see-button-${index}`)));

const mainContainer1 = document.getElementById('main-container1');
const closeIcon2 = document.getElementById('closeIcon2');

seeButtons.forEach((seeButton) => {
  seeButton.addEventListener('click', () => {
    mainContainer1.classList.add('show');
  });
});
closeIcon2.addEventListener('click', () => {
  mainContainer1.classList.remove('show');
});

function ValidateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert('Valid email address!');
    document.form1.text1.focus();
    return true;
  }

  alert('You have entered an invalid email address!');
  document.form.text.focus();
  return false;
}