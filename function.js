$(document).on('ready', function() {

	/**
	 * This function, will validate Student Name
	 */
	$('#sname').keyup(function() {
	    // wrapping Student Name into $this
	    var $this = $( this );
	    
	    // Username Validation
	    if( !$this.val() ) { // if there's no value inside of the Name Field
	        $this.controlMessage('Name is Required', 'error');
	        return false;
	    } else if( !$this.val().match(/^[A-Za-z ]*$/) ) { // if the value contains special characters or numbers
	    	$this.controlMessage('Only Letters', 'error');
	        return false;
	    } else if( $this.val() !== "" ) {
	        $this.controlMessage(); // if the user type again, hide message
	    }

	});

	/**
	 * This function, will validate Student ID
	 */
	$('#sid').keyup(function() {
		// wrapping Student ID into $this
		var $this = $( this );

		if(!$this.val()) { // if there's no value inside of the ID Field
	    	$this.controlMessage('ID is Required', 'error');
	        return false;
	    } else if( !$this.val().match(/^[0-9]*$/) ) { // if the value containes special characters or letters
	    	$this.controlMessage('Enter Only Numbers', 'error');
	    	return false;
	    } else if( $this.val() !== "" ) {
	    	$this.controlMessage(); // if the user type again, hide message
	    }
	});

	/**
	 * This function, will validate Student Email
	 */
	$('#semail').keyup(function() {
		// wrapping Student ID into $this
		var $this = $( this );
		var $parent = $this.parent('.form-group');

		// console.log($this);
		// console.log($parent);

		if(!$this.val()) { // if there's no value inside of the Email
	    	$this.controlMessage( 'Enter Email', 'error');
	        return false;
	    } else if( !$this.val().match(/^[A-Za-z0-9_.-]*[A-Za-z0-9][A-Za-z0-9_.-]*$/) ) { // if the value contains Spaces
	    	$this.controlMessage('No Spaces', 'error');
	    	return false;
	    } else if ( $this.val() !== "" ) { // if the user type again, hide message
	    	$this.controlMessage(); 
	    }
	});

	/**
	 * This function, will validate Student PhoneNumber
	 */
	$('#sphone').keyup(function() {
		// wrapping Student ID into $this
		var $this = $( this );

		if(!$this.val()) { // if there's no value inside of the Phone Number
	    	$this.controlMessage('Enter Phone Number', 'error');
	        return false;
	    } else if( !$this.val().match(/^[0-9]*$/) ) { // if the value contains Spaces
	    	$this.controlMessage('Only Numbers and no spaces', 'error');
	    	return false;
	    } else if ( $this.val() !== "" ) {
	    	$this.controlMessage(); // if the user type again, hide message
	    }
	});

	/**
	 * This function, will validate Student Comments
	 * The comment textarea is specific for 200 characters 
	 * 
	 */
	// $('#comment').keyup(function() {
	// 	// wrapping Student ID into $this
	// 	var $this = $( this );
	// 		formGroup = $this.parent();
	// 		comment = $this.val();
	// 		required = 30;
	// 		left = required - comment.length;

	// 		if( left > 0 ) {
	// 			formGroup.find('.comments-prompt').replaceWith('<span class="help-block">Characters Left ' + left + '</span>');
	// 			return true;
	// 		}



		// if(!$this.val()) { // if there's no value inside of the Phone Number
	 //    	showMessage($this.parent(), 'Enter Phone Number', 'error');
	 //        return false;
	 //    } else if( !$this.val().match(/^[0-9]*$/) ) { // if the value contains Spaces
	 //    	showMessage($this.parent(), 'Only Numbers and no spaces', 'error');
	 //    } else if ( $this.val() !== "" ) {
	 //    	clearMessage( $this.parent() ); // if the user type again, hide message
	 //    }
	// });


	/**
	 * Passing three arguments 
	 * $formControl: will receive the parent field of the $this which in this case is #sname
	 * message: is defined on the keyup function and receives the message there
	 * cls: is the class we are going to add to then show the message, we will add this class
	 * on the showMessage function as a parameter.
	 * Basically, we are telling the function to look over $formControl and find the class
	 * with the name '.error-message' and add a new class called 'error' and apply the message there.
	 */
	// function showMessage( $formControl, message, cls ) {
	//     $formControl.find('.error-message').addClass(cls).html('<i>' + message + '</i>');
	// }

	/**
	 * Once the user typing again. This function will be executed and is going to look on
	 * the $formControl and remove the class we added.
	 */
	// function clearMessage( $formControl ) {
	//     $formControl.removeClass('error');
	// }

	// $('#myButton').click(function(e) {

	// 	e.preventDefault();
	// 	// alert('your form is submitted');
	// });

});
