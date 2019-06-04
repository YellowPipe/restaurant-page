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

  document.body.appendChild(component());