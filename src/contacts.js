const contacts = () => {
	const main = document.createElement('main');
	const h1 = document.createElement('h1');
	const p = document.createElement('p');

	main.classList.add("inner", "cover");
	h1.classList.add("cover-heading");
	p.classList.add("lead")

	p.innerHTML = "contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts contacts"
	h1.innerHTML = "Contacts"

	main.appendChild(h1);
	main.appendChild(p);

	main.id = "tab";
	
	return main;
}


export default contacts