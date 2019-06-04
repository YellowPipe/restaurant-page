import './scss/index.scss';
import header from './header';
import home from './tabs';
import footer from './footer';

function component() {
	const element = document.createElement('div');
	element.classList.add("cover-container", "d-flex", "w-100", "h-100", "p-3", "mx-auto", "flex-column");
    element.appendChild(header());
    element.appendChild(home());
    element.appendChild(footer());
    return element;
  }

  const changeTab = (content) => {
		let tab = document.getElementById("tab");
		while (tab.firstChild) {
		    tab.removeChild(tab.firstChild);
		}
		const newElement = document.createElement('div');
		newElement.innerHTML = content;
		tab.appendChild(newElement);
  }

  function add_events() {
  	let links = document.getElementsByClassName("nav-link");
  	for (let i=0; i<links.length; i++) {
  		let linkPath = links[i].id
  		links[i].addEventListener("click", () => { changeTab(linkPath) } );
  	}

  }

  document.body.appendChild(component());
  add_events();