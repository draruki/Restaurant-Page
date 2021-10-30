function home(content) {
	const logo = document.createElement('img');
	logo.id = 'logo';
	logo.src = "img/Logo-for-WEBSITE-Red-Lion-Kegworth.png";

	const headline = document.createElement('div');

	headline.innerHTML = 
	'WELCOME';
	headline.classList.add('headline');

    const copy = document.createElement('div');
    copy.innerHTML = 
    'Welcome to THE RED LION\
     - a place for you to engage your senses and discover a whole new\
      world of dining options!<br><br>\
      Our dining facilities have had an amazing upgrade and we now offer three unique dining areas to cater to your needs – our restaurant, café and sports & cocktail lounge. Our restaurant menu offers you a range of entrees, cook to order a-la-carte mains and we also have a delicious new dessert menu to finish your dining experience.<br><br>\
      We have options to cater to both small and large appetites plus your personal dietary requirements. Our full table service over lunch and dinner allows you sit back, relax and enjoy time with your family and friends, while we look after you and your guests.<br><br>\
      Relax in our tranquil café and enjoy coffee or tea with a piece of cake, fresh sandwich or some delicious comfort food from our hot food menu.<br><br>\
      Or if you’re enjoying the live action in the sports bar we have a range of flavour bursting meals that’ll hit the spot!<br><br>\
      We have temporarily ceased providing takeaway for our members and guests at this time.';
    copy.classList.add('copy');

	content.appendChild(logo);
	content.appendChild(headline);
	content.appendChild(copy);
	content.style = null;
}