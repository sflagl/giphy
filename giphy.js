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
	 var btnVal = $(this).data('name');
	 console.log(btnVal);


	
}

createBtn();
submit();

$(document).on('click', '.gif', displayGif);


// Create buttons for each topic after click event of "submit" button




	