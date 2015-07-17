$(document).on('ready', function() {

	/**
	 * This function, will validate Student Name
	 */
	$('#sname').keyup(function() {
	    // wrapping Student Name into $this
	    var $this = $(this);
	    
	    // Username Validation
	    if( !$this.val() ) { // if there's no value inside of the Name Field
	        showMessage($this.parent(), 'Name is Required', 'error');
	        return false;
	    } else if( !$this.val().match(/^[A-Za-z ]*$/) ) { // if the value containes special characters or numbers
	    	showMessage($this.parent(), 'Only Letters', 'error');
	        return false;
	    } else if($this.val().match(/^[A-Za-z ]*$/)) {
	        clearMessage($this.parent()); // if the user type again, hide message
	    }

	});

	/**
	 * This function, will validate Student ID
	 */
	$('#sid').keyup(function() {
		// wrapping Student ID into $this
		var $this = $(this);

		if(!$this.val()) { // if there's no value inside of the ID Field
	    	showMessage($this.parent(), 'ID is Required', 'error');
	        return false;
	    } else if( !$this.val().match(/^[0-9]*$/) ) { // if the value containes special characters or letters
	    	showMessage($this.parent(), 'Enter Only Numbers', 'error');
	    	return false;
	    } else {
	    	clearMessage($this.parent()); // if the user type again, hide message
	    }
	});

	/**
	 * This function, will validate Student Email
	 */
	$('#semail').keyup(function() {
		// wrapping Student ID into $this
		var $this = $(this);
		var $parent = $this.parent();

		if(!$this.val()) { // if there's no value inside of the Email
	    	showMessage($parent.parent(), 'Enter Email', 'error');
	        return false;
	    } else if( !$this.val().match(/^[A-Za-z0-9_.-]*[A-Za-z0-9][A-Za-z0-9_.-]*$/) ) { // if the value contains Spaces
	    	showMessage($parent.parent(), 'No Spaces', 'error');
	    } else if ($this.val().match(/^[A-Za-z0-9_.-]*[A-Za-z0-9][A-Za-z0-9_.-]*$/)) {
	    	clearMessage($parent.parent()); // if the user type again, hide message
	    }
	});

	/**
	 * This function, will validate Student PhoneNumber
	 */
	$('#sphone').keyup(function() {
		// wrapping Student ID into $this
		var $this = $(this);

		if(!$this.val()) { // if there's no value inside of the Phone Number
	    	showMessage($this.parent(), 'Enter Phone Number', 'error');
	        return false;
	    } else if( !$this.val().match(/^[0-9]*$/) ) { // if the value contains Spaces
	    	showMessage($this.parent(), 'Only Numbers and no spaces', 'error');
	    } else if ($this.val().match(/^[0-9]*$/)) {
	    	clearMessage($this.parent()); // if the user type again, hide message
	    }
	});

	/**
	 * Passing three arguments 
	 * $formControl: will receive the parent field of the $this which in this case is #sname
	 * message: is defined on the keyup function and receives the message there
	 * cls: is the class we are going to add to then show the message, we will add this class
	 * on the showMessage function as a parameter.
	 * Basically, we are telling the function to look over $formControl and find the class
	 * with the name '.error-message' and add a new class called 'error' and apply the message there.
	 */
	function showMessage( $formControl, message, cls ) {
	    $formControl.find('.error-message').addClass(cls).html('<i>' + message + '</i>');
	}

	/**
	 * Once the user typing again. This function will be executed and is going to look on
	 * the $formControl and remove the class we added.
	 */
	function clearMessage( $formControl ) {
	    $formControl.removeClass('error');
	}

	// $('#myButton').click(function(e) {

	// 	e.preventDefault();
	// 	// alert('your form is submitted');
	// });

});