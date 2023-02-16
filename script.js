let hamburger = document.querySelector('.hamburger');
    let nav = document.querySelector('nav.page-navigation');
    hamburger.addEventListener('click', (e) => {
      if(e.target.classList.contains('hamburger') || e.target.parentNode.classList.contains('hamburger')) {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        console.log(nav);
      }
    })

let links = document.querySelectorAll('nav.page-navigation a');
for(let link of links) {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  })
}