const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },

  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// const navItem = document.getElementsByTagName('a');
// navItem.innerHTML = siteContent['nav']['a']

let links = document.querySelectorAll('a');
links[0].textContent = siteContent.nav['nav-item-1'];
links[1].textContent = siteContent.nav['nav-item-2'];
links[2].textContent = siteContent.nav['nav-item-3'];
links[3].textContent = siteContent.nav['nav-item-4'];
links[4].textContent = siteContent.nav['nav-item-5'];
links[5].textContent = siteContent.nav['nav-item-6'];



//----------CTA--------------------

const ctaHead = document.querySelector('.cta h1');
ctaHead.innerHTML = siteContent['cta']['h1']

const ctaBtn = document.querySelector('.cta button');
ctaBtn.innerHTML = siteContent['cta']['button']

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


//--------MAIN-----------------------

let mainHeads = document.querySelectorAll('.main-content h4');
mainHeads[0].textContent = siteContent['main-content']['features-h4'];
mainHeads[1].textContent = siteContent['main-content']['about-h4'];
mainHeads[2].textContent = siteContent['main-content']['services-h4'];
mainHeads[3].textContent = siteContent['main-content']['product-h4'];
mainHeads[4].textContent = siteContent['main-content']['vision-h4'];



let topContent = document.querySelectorAll('.main-content p');
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];
topContent[2].textContent = siteContent['main-content']['services-content'];
topContent[3].textContent = siteContent['main-content']['product-content'];
topContent[4].textContent = siteContent['main-content']['vision-content'];



const mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])



//--------------CONTACT-----------------

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4']


let contactLinks = document.querySelectorAll('.contact p');
contactLinks[0].textContent = siteContent.contact['address'];
contactLinks[1].textContent = siteContent.contact['phone'];
contactLinks[2].textContent = siteContent.contact['email'];


//-------------FOOTER------------------

const footLine = document.querySelector('footer p');
footLine.textContent = siteContent['footer']['copyright'];