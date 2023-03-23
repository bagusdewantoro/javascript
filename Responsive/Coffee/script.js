
// Toggle class active

// When hamberger menu is clicked:
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu'); 
hamburger.onclick = () => {
	navbarNav.classList.toggle('active')
}

// When clicked again everywhere in the document
document.addEventListener('click', e => {
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active')
	}
})
