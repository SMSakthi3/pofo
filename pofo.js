
window.setInterval(()=>{
    window.document.title="sakthi's PortFolio"

},1000);
window.addEventListener('scroll',()=>{
    let nav=document.querySelector(".navbar");
    nav.classList.toggle('sticky',window.scrollY > 0)
})