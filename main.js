let navitens = document.querySelectorAll(".navbar .nav-item");
console.log(navitens);
for (let i = 0; i < navitens.length; i++) {
  navitens[i].addEventListener('click', function() {
    for (let j = 0; j < navitens.length; j++){
      navitens[j].classList.remove('active');}
    this.classList.add('active');
  });
}
