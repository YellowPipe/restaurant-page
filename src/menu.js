const menu = () => {
	const main = document.createElement('main');
	const h1 = document.createElement('h1');
	// const p = document.createElement('p');
	const table = document.createElement('table');
	let row = document.createElement('tr');
	let column1 = document.createElement('th');
	let column2 = document.createElement('th');
	main.classList.add("inner", "cover");
	h1.classList.add("cover-heading");
	table.classList.add("border",  "border-white", "py-5")

	const menu = {
		dish: 123,
		soup: 33,
		salad: 11,
		fish: 32,
		chicken: 344
	}

	const menuArray = Object.entries(menu);



	h1.innerHTML = "Menu"
	column1.innerHTML = "Dish"
	column2.innerHTML = "Price"


	
	row.appendChild(column1)
	row.appendChild(column2)
	table.appendChild(row)
	main.appendChild(h1);
	for (const [dish, price] of menuArray) {
	  let row = document.createElement('tr');
	  let column1 = document.createElement('td');
	  let column2 = document.createElement('td');
	  column1.innerHTML = dish;
	  column2.innerHTML = price;
	  row.appendChild(column1);
	  row.appendChild(column2);
	  table.appendChild(row);
	}
	main.appendChild(table);



	main.id = "tab";
	
	return main;
}


export default menu