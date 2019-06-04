const footer = () => {
	const footer = document.createElement('footer');
	const div = document.createElement('div');
	const p = document.createElement('p');

	footer.classList.add("mastfoot", "mt-auto");
	div.classList.add("inner");

	p.innerHTML = "best best best best best best best best best best best best best best best";

	div.appendChild(p);
	footer.appendChild(div);

	return footer;
}


export default footer