var topics = ['skate', 'shoe', 'trains', 'planes', 'cats', 'dogs', 'history']




var createBtn = function(){
	// empty btn-section div
	$('#btn-section').empty();

	for(var i = 0; i < topics.length; i++){
		// create a new button
		var newBtn = $('<button>');

		newBtn.attr('data-type',topics[i]);

		newBtn.attr('class', 'gif btn btn-danger');

		newBtn.text(topics[i]);

		$('#btn-section').append(newBtn);

		// console.log(i);
	}
}


var submit = function(){
	$('#submit-btn').on('click',function(event){

		event.preventDefault();
		// get the value of the users input
		var userInputVal = $('#userInput').val().trim();

		topics.push(userInputVal);

		createBtn();

		console.log(userInputVal);
		console.log(topics);

	});
}


var displayGif = function(){
	 var btnVal = $(this).data('type');
	 console.log(btnVal);

	 var apiKey = 'dc6zaTOxFJmzC';
	 var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + btnVal + '&apiKey=' + apiKey;

	  $.ajax({
        url: apiUrl,
        method: "GET"
      }).done(function(response) {
      		$('.gifSection').empty();

      		for(var i = 0; i < 10; i++){
      			stillImgUrl = response['data'][i]['images']['fixed_height_still']['url'];
      			animateImgUrl = response['data'][i]['images']['fixed_height']['url'];

      			var newImg = $('<img>');

      			newImg.attr('data-still', stillImgUrl);
      			newImg.attr('data-animate', animateImgUrl);
      			newImg.attr('src', stillImgUrl);
      			newImg.attr('data-type', 'still');
      			newImg.addClass('class', 'gifImage')

      			$('.gifSection').append(newImg);

      			console.log('button value = ' + btnVal);
      			console.log('still image = ' + stillImgUrl);
      			console.log('animate image = ' + animateImgUrl);


      		}
      });
	
}

var gifAnimate = function(){



	console.log(true);
}

createBtn();
submit();

$(document).on('click', '.gif', displayGif);

$(document).on('click', '.gifImage', gifAnimate);
// Create buttons for each topic after click event of "submit" button




	