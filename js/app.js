/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/*navigation*/
const navigation = document.getElementById("navbar__list");
/*sections in navigation*/
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {

    let navUi = '';
    /* forEach loops over every section*/
    sections.forEach(section => {
        const sectionId= section.id;
        const sectionDataNav= section.dataset.nav;

        navUi += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    //append all elements to navigation
    navigation.innerHTML= navUi;

};

navBuilder();




// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeYourActiveClass = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"
};

const addYourActiveClass = (conditional, section) => {
    if(conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgba(221, 197, 230, 0.60);";
    };
};


/*implementing the functions above*/
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset <250 && elementOffset >= -250;

        removeYourActiveClass(section);
        addYourActiveClass(inviewport(), section);
    });
};




// Scroll to anchor ID using scrollTO event - sectionId is anchor

window.addEventListener('scroll', sectionActivation);



/*add scroll to top button*/

mybutton = document.getElementById("topButton");

/*When the user scrolls down 465px from the top of the document, show the button*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 465 || document.documentElement.scrollTop > 465) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

/* implementation of the function*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


