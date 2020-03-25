function getDogImage(num, breed) {
	fetch(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
		.then(response => response.json())
		.then(responseJson => displayResults(responseJson))
		.catch(error => {console.log(breed); alert('Something went wrong. Try again later.')});
}

function displayResults(responseJson) {
	console.log(responseJson);
	//replace the existing image with the new one
	let img = responseJson.message.map(
		url => `<img src="${url}" class="results-img">`
	);

	$('.results').html(img);
	//display the results section
	$('.results').removeClass('hidden');
}

function watchForm() {
	$('form').submit(event => {
		event.preventDefault();
		let num = $('#dog-num').val() ? $('#dog-num').val() : 3;
		let breed = $('#dog-breed').val();


		parseInt(num) <= 50 && parseInt(num) > 0
			? getDogImage(num, breed)
			: alert('number must be between 1 to 50');
	});
}

$(function() {
	console.log('App loaded! Waiting for submit!');
	watchForm();
});
