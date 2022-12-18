let toggleBtn = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navList = document.querySelector('.nav-list');
let navItems = document.querySelectorAll('.nav-item');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('active');
  navList.classList.toggle('active');
});


navItems.forEach(el => el.addEventListener('click', function(){
	toggleBtn.classList.remove('active');
	nav.classList.remove('active');
	navList.classList.remove('active'); 
}));