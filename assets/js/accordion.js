"use strict";

/* ======= FAQ accordion ======= */
const accordionTogglers = document.querySelectorAll('.accordion .accordion-button');
 
accordionTogglers.forEach((accordionToggler) => {
	accordionToggler.addEventListener('click', function () {
		
		
		let togglerIcon = accordionToggler.querySelector('.svg-inline--fa');
		
		if (togglerIcon.getAttribute('data-icon') == 'square-plus') {
			togglerIcon.setAttribute('data-icon', 'square-minus');
		} else {
			togglerIcon.setAttribute('data-icon', 'square-plus');
		}
		
		
	});
});
 

 
 
