
$("button").on("click", function() {
	console.log("button clicked");

	var url = "https://api.nytimes.com/svc/topstories/v2/business.json";
		url += '?' + $.param({
		  'api-key': "b6b9abf034a44842aafe3607a6870eb7",
		  'callback': "data"
		});

		$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result) {
			  	
			  	console.log(result["results"][0]["title"]);
			  	// var i = 0
				$("p#first").text(result["results"][0]["title"]);
				$("p#second").text(result["results"][1]["title"])
				$("p#third").text(result["results"][2]["title"])
				$("p#forth").text(result["results"][3]["title"])
				$("p#fifth").text(result["results"][4]["title"])
				  // var nextArticle = function(number) {
				  // var name = result["results"][number]["name"];
				  // console.log(name);


				//   var country = trip[number]["country"];
				//   $("h1").text(city + ", " + country);
				//   $("img").attr("src", trip[number]["photo"]);
				// };

				// 	$("button#first").on("click", function() {
				// 	  nextArticle(0);
				// 	});
				// 	$("button#second").on("click", function() {
				// 	  nextAsrticle(1);
				// 	});
				// 	$("button#third").on("click", function() {
				// 	  nextArticle(2);
				// 	});


			}).fail(function(err) {
			  throw err;
			 });
			
		

});


// $.getJSON("http://www.omdbapi.com/?t="+movie, function(omdb) {
// 		console.log(omdb["Rated"]);
// 		var title = omdb["Title"];
// 		$("h1.title").text(title);
// 		$("h4.year").text(omdb["Year"]);
// 		$("img.poster").attr("src", omdb["Poster"]);
// 		$("p.plot").text(omdb["Plot"]);

// 		var liThatIMade = $("<li>"+title+"</li>");
// 		$("ul.search-history").append(liThatIMade);
// 		});

