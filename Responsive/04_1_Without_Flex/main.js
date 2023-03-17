
// Wait to the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {

	"use strict";
	
	const theBody = document.querySelector('body');

	// Below function merely toggle the class
	const toggleClass = () => {
		theBody.classList.toggle("OffCanvas-Active");
		console.log('OffCanvas-Active');
	};

	// When the header is clicked, we fire the function to toggle the class
	document.querySelector('.Header').addEventListener('click', toggleClass)


	// The section below merely deals with resize events

	// This debounce function merely stops functioned 
	//  firing too often on repetitive events (such as resize/scroll)
	function debounce(fn, delay) {
		let timer = null;
		return function () {
			const context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function() {
				fn.apply(context, args);
			}, delay)
		}
	}

	// Removing the class from the body inside a debounce
	const debouncedA = debounce(function() {
		theBody.classList.remove('OffCanvas-Active');
		console.log('Remove OffCanvas-Active');
	}, 250);

	// When the window is resized, we want to fire the debouncedA function
	window.onresize = debouncedA;
})