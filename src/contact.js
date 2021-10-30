function contact(content) {
	const title = document.createElement('div');
	title.textContent = 'CONTACT US';
	title.classList.add('contact');
	content.appendChild(title);

	const messageLabel = document.createElement('div');
	messageLabel.innerHTML = 'MESSAGE';
	content.appendChild(messageLabel);

	const messageInput = document.createElement('textarea');
	messageInput.classList.add('input')
	content.appendChild(messageInput);

	const messageButton = document.createElement('button');
	messageButton.classList.add('button');
	messageButton.innerHTML = 'Submit';
	messageButton.addEventListener('click', () => alert('Thank you for your message'));
	content.appendChild(messageButton);
	content.style = null;
}