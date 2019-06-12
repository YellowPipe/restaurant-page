import './scss/index.scss';
import header from './header';
import home from './home';
import menu from './menu';
import contacts from './contacts';
import footer from './footer';

const changeTab = (content) => {
	let tab = document.getElementById("tab");
	tab.remove()
	let header = document.getElementById("header");
	let newElement = null;
	switch (content) {
		case "contacts": 
			newElement = contacts(); 
			break;
		case "home":
			newElement = home();
			break;
		case "menu": 
			newElement = menu();
			break;
	}
	header.insertAdjacentElement("afterEnd", newElement);
}

function addEvents() {
	let links = document.getElementsByClassName("nav-link");
	for (let i=0; i<links.length; i++) {
		let linkPath = links[i].id
		links[i].addEventListener("click", () => { changeTab(linkPath) } );
	}
}

function addContent() {
	const element = document.getElementById("content");
	element.appendChild(header());
	element.appendChild(home());
	element.appendChild(footer());
	addEvents();
}

addContent();
 	