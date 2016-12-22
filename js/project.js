
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
			  	
			  	console.log(result["results"][4]["title"]);
			  	
				$("p#first").text(result["results"][0]["title"]);
				$("p#second").text(result["results"][1]["title"]);
				$("p#third").text(result["results"][2]["title"]);
				$("p#forth").text(result["results"][3]["title"]);
				$("p#fifth").text(result["results"][4]["title"]);


				console.log(result["results"][4]["byline"]);

				$("p#author1").text(result["results"][0]["byline"]);
				$("p#author2").text(result["results"][1]["byline"]);
				$("p#author3").text(result["results"][2]["byline"]);
				$("p#author4").text(result["results"][3]["byline"]);
				$("p#author5").text(result["results"][4]["byline"]);

				console.log(result["results"][0]["url"]);
				var link1 = result["results"][0]["url"];
				$("a#link1").attr("href", link1);
				var link2 = result["results"][1]["url"];
				$("a#link2").attr("href", link2);
				var link3 = result["results"][2]["url"];
				$("a#link3").attr("href", link3);
				var link4 = result["results"][3]["url"];
				$("a#link4").attr("href", link4);
				var link5 = result["results"][4]["url"];
				$("a#link5").attr("href", link5);


				console.log(result["results"][0]["multimedia"][0]["url"]);

				var photo1 = result["results"][0]["multimedia"][0]["url"];
				$("img#photo1").attr("src", photo1);
				var photo3 = result["results"][2]["multimedia"][0]["url"];
				$("img#photo3").attr("src", photo3);
				var photo4 = result["results"][3]["multimedia"][0]["url"];
				$("img#photo4").attr("src", photo4);
				var photo5 = result["results"][4]["multimedia"][0]["url"];
				$("img#photo5").attr("src", photo5);
				var photo2 = result["results"][1]["multimedia"][0]["url"];
				$("img#photo2").attr("src", photo2);

				

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

