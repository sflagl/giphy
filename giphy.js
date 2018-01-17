var topics = ['skate', 'shoe', 'trains', 'planes', 'cats', 'dogs', 'history']




var createBtn = function(){
	// empty btn-section div
	$('#btn-section').empty();

	for(var i = 0; i < topics.length; i++){
		// create a new button
		var newBtn = $('<button class="btn btn-danger">');

		newBtn.attr('data-type',topics[i]);

		newBtn.text(topics[i]);

		$('#btn-section').append(newBtn);

		// console.log(i);
	}
}


var submit = function(){
	$('#submit-btn').on('click',function(event){

		event.preventDefault();
		// get the value of the users input
		var userInputVal = $('#userInput').val();

		topics.push(userInputVal);

		createBtn();

		console.log(userInputVal);
		console.log(topics);

	});
}

createBtn();
submit();

// Create buttons for each topic after click event of "submit" button




	