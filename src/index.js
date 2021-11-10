
header();
let content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);
footer();
changeTab('home');

function header() {
	let header = document.createElement('div');
	header.innerHTML = '';
	header.classList.add('header');
	let homeTab = document.createElement('div');
	homeTab.textContent = 'Home';
	homeTab.classList.add('tab');
	let menuTab = document.createElement('div');
	menuTab.textContent = 'Menu';
	menuTab.classList.add('tab');
	let contactTab = document.createElement('div');
	contactTab.textContent = 'Contact';
	contactTab.classList.add('tab');

	header.appendChild(homeTab);
	header.appendChild(menuTab);
	header.appendChild(contactTab);
	document.body.appendChild(header);

	homeTab.addEventListener("click", () => changeTab('home'));
	menuTab.addEventListener("click", () => changeTab('menu'));
	contactTab.addEventListener("click", () => changeTab('contact'));
}

function changeTab(v) {
	content.innerHTML = '';

	switch (v) {
		case 'contact': {
			contact(content);
			break;
		}
		case 'menu': {
			menu(content);
			break;
		}
		case 'home': {
			home(content);
			break;
		}
	}
}

function footer() {
	let footer = document.createElement('div');
	footer.innerHTML = 'Copyright © 2021 op127 All Rights Reserved | Legal | Privacy Statement | Anti-Spam Policy | Terms & Conditions';
	footer.classList.add('footer');
	document.body.appendChild(footer);
}