document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.section');
	const liNavLinks = document.querySelectorAll('.dotstyle li');
	const navLinks = document.querySelectorAll('.dotstyle li a');
  
	function changeCurrentLink() {
	  let index = sections.length;
  
	  while (--index && window.scrollY + 250 < sections[index].offsetTop) {}
  
	  liNavLinks.forEach((link) => link.classList.remove('current'));
	  liNavLinks[index].classList.add('current');
	}
  
	function scrollToSection(event) {
	  event.preventDefault();
	  const targetId = event.target.getAttribute('href');
	  const targetElement = document.querySelector(targetId);
  
	  window.scrollTo({
		top: targetElement.offsetTop,
		behavior: 'smooth'
	  });
	}
  
	navLinks.forEach((link) => {
	  link.addEventListener('click', scrollToSection);
	});
  
	changeCurrentLink();
	window.addEventListener('scroll', changeCurrentLink);
  });