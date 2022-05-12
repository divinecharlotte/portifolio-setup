const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');
const contactFormCont = document.getElementById('formcontact');
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

// FORM VALIDATION
contactFormCont.addEventListener('submit', (event) => {
  const emailInput = contactFormCont.email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    event.preventDefault();
    const errorTag = contactFormCont.getElementsByTagName('small');
    errorTag[0].innerHTML = 'Please insert email in lowercase!';
  } else {
    contactFormCont.action = 'https://formspree.io/f/mqkngenv';
  }
});

// Local Storage
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('user-message');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

function retrieveFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('txtEmail').value = formData.email;
    document.getElementById('user').value = formData.name;
    document.getElementById('user-message').value = formData.message;
  }
}

retrieveFormData();