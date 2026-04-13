/* -----reveal----- */

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for(var i = 0; i <reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

/* -----skill tabs----- */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(event, tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
 
}

/* -----masonry grid----- */

"use strict"

function imagesInit() {
  const images = document.querySelectorAll('.work-image');
  if (images.length){
    images.forEach(image => {
      const imageItem = image.querySelector('img');
      const padding = imageItem.offsetHeight / imageItem.offsetWidth * 100;
      image.style.paddingBottom = '${padding}%';
      imageItem.classList.add('init');
    });
  }
}

function gridInit() {
  const items = document.querySelector('.work-list');
  const itemsGrid = new Isotope(items,{
    itemSelector: '.work',
    masonry: {
      fitWidth: true,
      gutter: 20
    }
  });

  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.filter-work_item')){
      const filterItem = targetElement.closest('.filter-work_item');
      const filterValue = filterItem.dataset.filter;
      const filterActiveItem = document.querySelector('.filter-work_item.active-filter');
      
      filterValue === "*" ? itemsGrid.arrange({ filter: `` }) :
        itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` })
      
      filterActiveItem.classList.remove('active-filter');
      filterItem.classList.add('active-filter');

      e.preventDefault();
    }
  }
}

window.addEventListener('load', windowLoad);

function windowLoad() {
  imagesInit();
  gridInit();
}

/* -----side menu----- */

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
  sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-200px";
}

/* -----google sheets----- */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzaye3yqACbMQT1zS_JnAJw3G-v1KuIOqOo38Pt1oaXhDZMwVHfGL8z6kUXX7G6Kj5-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      if(document.querySelector('#language').value == "eng"){
        msg.innerHTML = "message sent successfully"
      } else {
        msg.innerHTML = "mensagem enviada"
      }
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

/* -----translate----- */

const jsonPOR = {
  "lng-about": "sobre",
  "lng-services": "serviços",
  "lng-contact": "contato",
  //"lng-header-text": "oi, sou bruno amá stephan do brasil",
  "lng-about-me": "sobre mim",
  "lng-about-text1": "Minha primeira graduação foi como arquiteto e urbanista, formado pela FAU USP. Realizei estágios no escritório Nitsche Arquitetos e na Prefeitura de São Paulo, na Secretaria de Cultura. Trabalhei como arquiteto nos escritórios Triptyque Architecture e MNMA.",
  "lng-about-text2": "Agora, com 30 anos, estou procurando uma carreira na tecnologia e estudando Ciências da Computação no IME USP. Integro o USP Game Dev como colaborador desenvolvendo jogos digitais e participei do projeto /de/monumenta programando um aplicativo para a USP.",
  "lng-skills": "habilidades",
  "lng-experience": "experiência",
  "lng-education": "acadêmico",
  "lng-skills1": "Avançado",
  "lng-skills2": "Intermediário",
  "lng-skills3": "Programação | Python",
  "lng-skills4": "Avançado",
  "lng-skills5": "Programação | C#",
  "lng-skills6": "Intermediário",
  "lng-skills7": "Programação | Java",
  "lng-skills8": "Intermediário",
  "lng-skills9": "Programação | HTML/CSS/Javascript",
  "lng-skills10": "Intermediário",
  "lng-skills11": "Programação | React Native",
  "lng-skills12": "Iniciante",
  "lng-skills13": "Avançado",
  "lng-skills14": "Avançado",
  "lng-skills15": "Avançado",
  "lng-skills16": "Avançado",
  "lng-skills17": "Intermediário",
  "lng-skills18": "Intermediário",
  "lng-skills19": "Intermediário",
  "lng-skills20": "Intermediário",
  "lng-skills21": "Modelagem 3D | SketchUp",
  "lng-skills22": "Avançado",
  "lng-skills23": "Modelagem 3D | Blender",
  "lng-skills24": "Intermediário",
  "lng-skills25": "Língua | Português",
  "lng-skills26": "Nativo",
  "lng-skills27": "Língua | Inglês",
  "lng-skills28": "Proficiente",
  "lng-skills29": "Língua | Italiano",
  "lng-skills30": "Avançado",
  "lng-experience1": "Estagiário | 2014",
  "lng-experience2": "Estagiário | 2016",
  "lng-experience3": "Arquiteto Jr | 2018",
  "lng-experience4": "Arquiteto | 2019",
  "mnma-instagram": "MNMA no Instagram",
  "lng-experience5": "Pesquisador | 2020",
  "lng-experience6": "Colaborador | 2020 - Atual",
  "lng-education1": "Arquitetura e Urbanismo",
  "lng-education2": "2020 | Atual",
  "lng-education3": "Ciências da Computação",
  "lng-my-services": "meus serviços",
  "lng-services-game-design": "É a minha atividade primária atualmente. Fiz alguns jogos independentes nos últimos anos e estou procurando um emprego integral nesse campo.",
  "lng-learn-more1": "Saiba mais",
  "lng-services-web-design": "Fiz este portfolio por conta própria em HTML/CSS/Javascript e pretendo fazer muito mais.",
  "lng-learn-more2": "Saiba mais",
  "lng-services-UIUX-design": "Como um designer, prefiro trabalhar com metodologias transdisciplinares. É por isso que estou familiarizado com frameworks de Discovery e Research assim como a atividade de design gráfico como um todo.",
  "lng-learn-more3": "Saiba mais",
  "lng-services-app-design": "Trabalhei com alguns aplicativos previamente. Na minha experiência, desenvolvê-los é como uma mistura entre design de UX/UI e design de games.",
  "lng-learn-more4": "Saiba mais",
  "lng-services-front-end-header": "front-end",
  "lng-services-front-end": "Embora tenha desenvolvido habilidades com programação full-stack e back-end enquanto estudava Ciências da Computação, front-end é minha frente de trabalho preferida ao lidar com código.",
  "lng-learn-more5": "Saiba mais",
  "lng-services-arch-header": "arquitetura e urbanismo",
  "lng-services-arch": "Mesmo que trabalhar integralmente como arquiteto não tenha se colocado como possibilidade real para mim por alguns anos, eu ainda faço pequenas reformas independentes e tenho bastante orgulho do meu trabalho prévio como arquiteto.",
  "lng-learn-more6": "Saiba mais",
  "lng-work-filter-all": "tudo",
  "lng-work-filter-games": "jogos",
  "lng-work-filter-apps": "apps",
  "lng-work-filter-art": "arte",
  "lng-work-filter-arch": "arq",
  "lng-work-list-ilustrations": "ilustrações",
  "lng-work-list-pl-house": "casa pl",
  "lng-work-list-ts-apartment": "apartamento ts",
  "lng-contact-me": "meus contatos",
  "lng-download-cv": "baixar CV",
  "lng-submit-button": "enviar",
}

const jsonENG = {
  "lng-about": "about",
  "lng-services": "services",
  "lng-contact": "contact",
  //"lng-header-text": "hi, i'm bruno amá stephan from brazil",
  "lng-about-me": "about me",
  "lng-about-text1": "My first bachelor's degree was in architecture and urban design at FAU USP. While studying, I have done internships at Nitsche Arquitetos and at the São Paulo City Hall Secretariat of Culture. After graduation, I have worked as an architect at Triptyque Architecture and MNMA.",
  "lng-about-text2": "Now, at 30, I am looking for a career in technology and studying Computer Science at IME USP. I am part of USP Game Dev as a collaborator developing digital games and I have participated in the /de/monumenta project developing an app for USP.",
  "lng-skills": "skills",
  "lng-experience": "experience",
  "lng-education": "education",
  "lng-skills1": "Advanced",
  "lng-skills2": "Intermediate",
  "lng-skills3": "Programming | Python",
  "lng-skills4": "Advanced",
  "lng-skills5": "Programming | C#",
  "lng-skills6": "Intermediate",
  "lng-skills7": "Programming | Java",
  "lng-skills8": "Intermediate",
  "lng-skills9": "Programming | HTML/CSS/Javascript",
  "lng-skills10": "Intermediate",
  "lng-skills11": "Programming | React Native",
  "lng-skills12": "Beginner",
  "lng-skills13": "Advanced",
  "lng-skills14": "Advanced",
  "lng-skills15": "Advanced",
  "lng-skills16": "Advanced",
  "lng-skills17": "Intermediate",
  "lng-skills18": "Intermediate",
  "lng-skills19": "Intermediate",
  "lng-skills20": "Intermediate",
  "lng-skills21": "3D Modelling | SketchUp",
  "lng-skills22": "Advanced",
  "lng-skills23": "3D Modelling | Blender",
  "lng-skills24": "Advanced",
  "lng-skills25": "Language | Portuguese",
  "lng-skills26": "Native",
  "lng-skills27": "Language | English",
  "lng-skills28": "Proficient",
  "lng-skills29": "Language | Italian",
  "lng-skills30": "Advanced",
  "lng-experience1": "Intern | 2014",
  "lng-experience2": "Intern | 2016",
  "lng-experience3": "Jr Architect | 2018",
  "lng-experience4": "Architect | 2019",
  "mnma-instagram": "MNMA on Instagram",
  "lng-experience5": "Researcher | 2020",
  "lng-experience6": "Collaborator | 2020 - Now",
  "lng-education1": "Architecture and Urban Design",
  "lng-education2": "2020 | Now",
  "lng-education3": "Computer Science",
  "lng-my-services": "my services",
  "lng-services-game-design": "It is my main activity right now. I have been designing games independently in the past years and I am currently looking for a full-time job in this field.",
  "lng-learn-more1": "Learn more",
  "lng-services-web-design": "I have actually made this portfolio by myself from scratch in vanilla HTML/CSS/Javascript, and I intend to do much more.",
  "lng-learn-more2": "Learn more",
  "lng-services-UIUX-design": "As a designer I prefer working with transdisciplinary approaches. This is why I am familiar with Discovery and Research frameworks as well as graphic design as a whole.",
  "lng-learn-more3": "Learn more",
  "lng-services-app-design": "I have worked with a few apps before. In my experience, developing them is a mix between UX/UI design and game design.",
  "lng-learn-more4": "Learn more",
  "lng-services-front-end-header": "front-end developing",
  "lng-services-front-end": "Although I have learned full-stack and back-end developing skills while studying Computer Science, it became clear to me that front-end development is my prefered method of dealing with code.",
  "lng-learn-more5": "Learn more",
  "lng-services-arch-header": "architecture and urban design",
  "lng-services-arch": "Even though working as a constant architect hasn't really been a possibility in my life for some years, I still do small, independent renovations from time to time and I am very proud of my previous jobs as an architect.",
  "lng-learn-more6": "Learn more",
  "lng-work-filter-all": "all",
  "lng-work-filter-games": "games",
  "lng-work-filter-apps": "apps",
  "lng-work-filter-art": "art",
  "lng-work-filter-arch": "arch",
  "lng-work-list-ilustrations": "ilustrations",
  "lng-work-list-pl-house": "pl house",
  "lng-work-list-ts-apartment": "ts apartment",
  "lng-contact-me": "contact me",
  "lng-download-cv": "download CV",
  "lng-submit-button": "submit",
}

document.querySelector('#language').addEventListener("change", function() {
  if (this.value == "eng") {
    // change all text to ENG
    for (let key in jsonENG) {
      document.querySelector('#' + key).textContent = jsonENG[key]
      document.getElementById("lng-header-text").innerHTML = "hi, i'm <span>b</span>runo <span>a</span>má <span>s</span>tephan<br> from brazil"
      document.getElementsByName('Name')[0].placeholder='your name'
      document.getElementsByName('Email')[0].placeholder='your email'
      document.getElementsByName('Message')[0].placeholder='your message'
      document.querySelector('.download-cv').href='CV/CV 2024 ENG.pdf'
    }
  } else if (this.value == "por") {
    // change all text to POR
    for (let key in jsonPOR) {
      document.querySelector('#' + key).textContent = jsonPOR[key]
      document.getElementById("lng-header-text").innerHTML = "oi, sou <span>b</span>runo <span>a</span>má <span>s</span>tephan<br> do brasil"
      document.getElementsByName('Name')[0].placeholder='seu nome'
      document.getElementsByName('Email')[0].placeholder='seu email'
      document.getElementsByName('Message')[0].placeholder='sua mensagem'
      document.querySelector('.download-cv').href='CV/CV 2024 POR.pdf'
    }
  }
})