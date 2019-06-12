const contacts = () => {
	const main = document.createElement('main');
	const h1 = document.createElement('h1');
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');
	const p3 = document.createElement('p');

	main.classList.add("inner", "cover");
	h1.classList.add("cover-heading");
	p1.classList.add("lead");
	p2.classList.add("lead");
	p3.classList.add("lead")

	p1.textContent = "address: Town, Street 23"
	p2.textContent = "phone: 555-55-55"
	p3.textContent = "email: restaurant@email.com"
	h1.textContent = "Contacts"

	main.appendChild(h1);
	main.appendChild(p1);
	main.appendChild(p2);
	main.appendChild(p3);

	main.id = "tab";
	
	return main;
}


export default contacts