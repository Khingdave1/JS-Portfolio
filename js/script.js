/*===== MENU TOGGLE =====*/
const navList = document.querySelector('.nav-list');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('open-menu');
    toggleMenu.classList.toggle('open-menu');
});


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
//   Active link
  navLink.forEach(n => n.classList.remove('active-link'));
  this.classList.add('active-link');
  
//   Remove menu mobile
  navList.classList.remove('open-menu');
  toggleMenu.classList.remove('open-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// SCROLL HOME
sr.reveal('.home-title',{}); 
sr.reveal('.btn',{delay: 200});  
// sr.reveal('.home-social-icon',{ interval: 200}); 

// SCROLL ABOUT
sr.reveal('.about-img',{}); 
sr.reveal('.about-heading',{delay: 400}); 
sr.reveal('.about-para',{delay: 400}); 

// SCROLL SKILLS 
// sr.reveal('.skill-item',{interval: 200}); 

// SCROLL WORK
// sr.reveal('.work-img',{interval: 200}); 

// SCROLL CONTACT
// sr.reveal('.contact__input',{interval: 200});


/*===== SHOW WORKS =====*/
const workList = document.querySelector(".work-list");
const works = [
  { name: "LMconstruct", image: "img/work/lmconstruct.png", live: "https://lmconstruction.netlify.app/", source: "https://github.com/Khingdave1/LMConstruct" },
  { name: "To-do-list", image: "img/work/to-do-list.png", live: "https://wizardly-ptolemy-b340fd.netlify.app/", source: "https://github.com/Khingdave1/To-do-List" },
  { name: "Leaderboard", image: "img/work/leaderboard.png", live: "https://brave-wilson-4fe950.netlify.app/", source: "https://github.com/Khingdave1/New-Leaderboard" },
  { name: "Weather", image: "img/work/weather.png", live: "https://confident-mirzakhani-362839.netlify.app/", source: "https://github.com/Khingdave1/Weather-report" },
  { name: "Dev'coffee", image: "img/work/devcoffee.png", live: "https://musing-benz-58ec33.netlify.app/", source: "https://github.com/Khingdave1/Dev-coffee" },
  { name: "Iconstruct", image: "img/work/iconstruct.png", live: "https://laughing-wing-86b108.netlify.app/", source: "https://github.com/Khingdave1/Iconstruct" }
];

const showWork = () => {
    let output = "";
    works.forEach(
    ({ name, image, live, source }) =>
    (output += `
            <div class="work-item">
                <div class="work-side work-front">
                    <img src=${image} alt="image" class="work-item-img">
                </div>
                <div class="work-side work-details">
                    <p>${name}</p>
                    <div class="work-links">
                        <a href=${live} title="Live link" target="_blank"><i class='bx bx-link-external work-icon'></i></a>
                        <a href=${source} title="Source code" target="_blank"><i class='bx bx-code work-icon'></i></a>
                    </div>
                </div>
            </div>
            `)
    )
    workList.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showWork);


/*===== CONTACT FORM =====*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBgm2Lm0U7Ayf4HQXanIuLOp6PY46Xte30",
authDomain: "my-portfolio-site-7f166.firebaseapp.com",
databaseURL: "https://my-portfolio-site-7f166.firebaseio.com",
projectId: "my-portfolio-site-7f166",
storageBucket: "my-portfolio-site-7f166.appspot.com",
messagingSenderId: "626137807341",
appId: "1:626137807341:web:2225788cd546aa1d148fe4",
measurementId: "G-KET4LBLYQG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var sendRef = firebase.database().ref('send');

//Listen for form submit
document.getElementById('contact-form').addEventListener('submit', SubmitForm);

// Submit form
function SubmitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, email, message);
    
    // Show alert
    document.getElementById('alert-msg').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
       document.getElementById('alert-msg').style.display = 'none'; 
    }, 3000);
    
    // Clear form after submit
    document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
    var newsendRef = sendRef.push();
    newsendRef.set({
        name: name,
        email: email,
        message: message
    });
}


/*===== UPDATE THE ELEMENT TO CURRENT YEAR =====*/
// Update the element to the current year //
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));

