function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('#contact-form-holder').html('<h5>Message sent</h5>'); 
		jQuery('#output-contact').html('<p>' + jQuery('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	// or use 
	// if (!$('input[@name=email]').fieldValue()) { 
	if (!form.name.value) { 
		jQuery('#output-contact').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		jQuery('#output-contact').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.subject.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Subject field!</div>'); 
		return false; 
	}
	else if (!form.message.value) {
		jQuery('#output-contact').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 jQuery('#output-contact').html('Sending message...!');  		
		return true;
	}
}

function showResponseReserv(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('#reservation-form-holder').html('<h5>Message sent</h5>'); 
		jQuery('#output-reserv').html('<p>' + jQuery('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequestReserv(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	// or use 
	// if (!$('input[@name=email]').fieldValue()) { 
	if (!form.name_reserv.value) { 
		jQuery('#output-reserv').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email_reserv.value) {
		jQuery('#output-reserv').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email_reserv.value.search(validRegExp) == -1) {
		jQuery('#output-reserv').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.datepicker.value) {
		jQuery('#output-reserv').html('<div class="output2">Please fill the Date field!</div>'); 
		return false; 
	}
	else if (!form.time_reserv.value) {
		jQuery('#output-reserv').html('<div class="output2">Please fill the Time field!</div>'); 
		return false; 
	}
	else if (!form.persons_reserv.value) {
		$('#output-reserv').html('<div class="output2">Please fill the Number of persons field!</div>'); 
		return false; 
	} else if ( isNaN(form.persons_reserv.value)) {
		$('#output-reserv').html('<div class="output2">Please enter a valid Number of persons!</div>'); 
		return false;
	}else if (!form.phone_reserv.value) {
		$('#output-reserv').html('<div class="output2">Please fill the Phone field!</div>'); 
		return false; 
	}else if (!form.message_reserv.value) {
		$('#output-reserv').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 jQuery('#output-reserv').html('Sending message...!');  		
		return true;
	}
}


jQuery(document).ready(function() { 
    var options = { success: showResponse, beforeSubmit: showRequest}; 
    jQuery('#contact-form').submit(function() { 
        jQuery(this).ajaxSubmit(options); 
        return false; 
    });
	
	jQuery("#datepicker").datepicker();								
  
	var options2 = { success: showResponseReserv, beforeSubmit: showRequestReserv}; 
    jQuery('#reservation-form').submit(function() { 
        jQuery(this).ajaxSubmit(options2); 
        return false; 
    });
	
}); 