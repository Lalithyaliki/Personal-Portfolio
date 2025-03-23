
function togglemenu() {
    document.querySelector('.nav-links').classList.toggle('active');
};

const but=document.getElementById('button');
const hom=document.getElementById('home-sec');

but.addEventListener('click',function() {
    hom.scrollIntoView({behavior : 'smooth'});
});