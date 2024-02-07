
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=0tL8CzbfmF5poGm9puqALR',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec64a88c5bmsh997f9c6ecad6ccdp1dea9ajsndcc1e2a278d2',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	$("#load").hide()
    $("#tracks").show()

	let chris = response.albums[0].artists[0].name
	$("#chris").text(chris)
	// $("#chris").text(response.albums[0].artists[0].name)

	let done = response.albums[0].name
	$("#done").text(done)

	let date = response.albums[0].release_date
	$("#date").text(date)

	let items = response.albums[0].tracks.items
	let list = ""
	for (var i = 0; i < items.length; i++){
		list += `<li>${items[i].name}</li>`
	}
	$("#list").html(list)

	console.log(items);
});

