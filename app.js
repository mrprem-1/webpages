// opening links using navtoggle
const navtoggle=document.querySelector('.nav-toggle');
const linkscontainer=document.querySelector('.links-container');
const navbar=document.getElementById('nav');
const links=document.querySelector('.links');
const ntg=document.querySelectorAll('.ntg');
navtoggle.addEventListener('click', ()=>{
    const containerheight=linkscontainer.getBoundingClientRect().height;
    const linksheight=links.getBoundingClientRect().height;
    if(containerheight === 0){
        linkscontainer.style.height= `${linksheight}px`;
        linkscontainer.style.opacity=1;
    }
    else{
        linkscontainer.style.height=0;
        linkscontainer.style.opacity=0;
        
    }
})
// set date
const date=document.querySelector('.date');
date.innerHTML=new Date().getFullYear();
// fixed navbar
const toplink=document.querySelector('.arrow');
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 540) {
        linkscontainer.style.height = 'auto';
        linkscontainer.style.opacity = '1';
    } else {
        linkscontainer.style.height = '0';
        linkscontainer.style.opacity = '0';
    }
});
ntg.forEach((btn)=>{
window.addEventListener('scroll', ()=>{
    const scrollheight=window.scrollY;
    const navheight=navbar.getBoundingClientRect().height;
    
    if(scrollheight > navheight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }
    if(scrollheight > 500){
        toplink.classList.add('show-links');
    }
    else{
        toplink.classList.remove('show-links');
    }
    if (window.innerWidth > 540) {
        linkscontainer.style.height = 'auto';
        linkscontainer.style.opacity = '1';
    }
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 540) {
        linkscontainer.style.height = 'auto';
        linkscontainer.style.opacity = '1';
    } else {
        linkscontainer.style.height = '0';
        linkscontainer.style.opacity = '0';
    }
});

});
// smmoth scrooll
const scrolllink=document.querySelectorAll('.scroll-link');
scrolllink.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navheight = navbar.getBoundingClientRect().height;
        const containerheight = linkscontainer.getBoundingClientRect().height;
        const fixednav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navheight;
        
        if (!fixednav) {
            position = position - navheight;
        }
        if (navheight > 82) {
            position = position + containerheight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linkscontainer.style.height = 0;
        linkscontainer.style.opacity = 0;
    });
});