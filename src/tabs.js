const home = () => {
	const main = document.createElement('main');
	const h1 = document.createElement('h1');
	const p = document.createElement('p');

	main.classList.add("inner", "cover");
	h1.classList.add("cover-heading");
	p.classList.add("lead")

	p.innerHTML = "best best best best best best best best best best best best best best best"
	h1.innerHTML = "Best restaurant in the city"

	main.appendChild(h1)
	main.appendChild(p);

	main.id = "tab";
	
	return main;
}


export default home