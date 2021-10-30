function menu(content) {
	const menuTitle = document.createElement('div');
	menuTitle.textContent = 'OUR MENU';
	menuTitle.classList.add('contact');
	content.appendChild(menuTitle);
	content.style.height = '4000px';

	content.appendChild(
		createItem(
			content,
			'BAKED SMOKED HADDOCK FILLET', 
			'crispy panko coated Cheddar & potato cake, creamed leeks, chive oil 16.50',
			'img/Baked Haddock with Brown Butter.png',
			));

	content.appendChild(
		createItem(
			content,
			'HAND PRESSED SHORT CRUST PASTRY PIES', 
			'CHOOSE BETWEEN STEAK, GUINNESS & ONION OR MUSHROOM, LEEK & TARRAGON with your choice of hand cut twice cooked chunky chips & mushy peas or buttered mash & seasonal vegetables, with rich roast gravy 13.95 Why not add a Stilton or Cheddar topping? Please add 2.00',
			'img/Home-Style-Cran-Raspberry-Pie_exps42413_CWC1597098D56_RMS.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'LENTIL, FRENCH ONION & ROOT VEGETABLE STEW', 
			'herby mash, steamed dumpling & buttered green beans (V) 12.95',
			'img/French-Lentil-Soup-with-Bacon.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'CONFIT DUCK LEG', 
			' creamy celeriac mashed potatoes, wilted spinach, parsnip crisps, red wine & blackberry jus (GFO) 16.50',
			'img/Duck-Confit-photo-_8-SQ.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'SLOW COOKED CRISPY BELLY PORK', 
			'mini sea-salt roast potatoes, braised red cabbage, port, onion & sage gravy (GFO) 14.75',
			'img/slow-roasted-pork-belly-crispy-skin-3059509-7_preview-5b16dcbb1d6404003605a196.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'BUTTERNUT SQUASH & SAGE RISOTTO', 
			'topped with sauteed wild mushrooms & crumbled goat’s cheese (GFO)(VO) 13.75',
			'img/butternut-risotto-2.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'SALMON & DILL FISHCAKE', 
			'dressed baby leaves, lemon scented creme fraiche & crispy baby capers 6.95',
			'img/Fishcakes.jpg',
			));

	content.appendChild(
		createItem(
			content,
			'PAN SEARED CHICKEN BREAST', 
			'gruyere & thyme potato terrine, buttered kale, wild mushrooms & red wine jus (GFO) 14.95',
			'img/pan-seared-chicken-with-creamy-garlicky-wine-sauce_UserCommentImage_ID-3639265.jpg',
			));
}

function createItem(content, name, desc, img) {
	const item = document.createElement('div');
	item.classList.add('item')
	content.appendChild(item);
	const image = document.createElement('img');
	image.classList.add('item-image');
	image.src = img;
	item.appendChild(image);
	const title = document.createElement('div');
	title.classList.add('item-title');
	title.textContent = name;
	item.appendChild(title);
	const description = document.createElement('div');
	description.textContent = desc;
	item.appendChild(description);

	return item;
}