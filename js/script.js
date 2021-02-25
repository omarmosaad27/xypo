// sliding the side nav bar 
const sideBarIcon = document.querySelector(".side-bar-icon")
const sideNav = document.querySelector(".side-nav")


sideBarIcon.addEventListener("click", ()=>{
    sideNav.classList.toggle("side-nav-on");
    
})


// smooth scroll to section when clicking nav bar links

const allNavLinks = document.querySelectorAll(".side-nav .nav-list li");


allNavLinks.forEach(link =>{
    link.addEventListener("click", (e) =>{
        
        document.querySelector(e.target.dataset.scroll).scrollIntoView({
            behavior: 'smooth'
        })
    })
})