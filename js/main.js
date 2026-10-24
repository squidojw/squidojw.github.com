function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');

function updateActiveLink() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (
      sectionTop <= 150 ||
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active-link');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal(
  '.home__data, .about__container, .history__data1, .history__data2, .history__data3, .history__img4, .history__text4, .history__img5, .keyevents__data1, .keyevents__data2, .keyevents__data3, .trivia__data1, .trivia__data2, .trivia__data3, .trivia__text4, .trivia__img4, .trivia__text5, .trivia__img5, .trivia__img6, .trivia__text6, .trivia__data8, .trivia__data9, .trivia__text7, .trivia__text8, .sources__container, .enhancement__form',
  {
    interval: 200,
  },
);
