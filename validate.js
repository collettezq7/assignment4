$(document).ready(function()	{

	$(".form").submit(function(event) {
		var validEntry = true;
		var name = $(".name").val();
		var address = $(".address").val();
		var address2 = $(".address2").val();
		var phone = $(".phoneNumber").val();
		var email = $('.emailAddress').val();
// Defined all variables

		if (name.length == 0) {
			$(".name").addClass("invalidEntry");
			validEntry = false;
		} 
		

		if (address.length == 0) {
			$(".address").addClass("invalidEntry");
			validEntry = false;
		}


		if (address2.length == 0) {
			$(".address2").addClass("invalidEntry");
			validEntry = false;
		} 

//address and name have the same requirements of at least one character
//address line 3 is not included, becasue not all people have a third line to their address

		if (phone.length == 0 || phone.length != 10) {
			$(".phoneNumber").addClass("invalidEntry");
			validEntry = false;
		} 
//if phone field is empty or less than 10 digits

		if (email.indexOf("@") == -1 ) {
			$(".emailAddress").addClass("invalidEntry");
			validEntry = false;
		}
//must include an "@" in the copy

		if (validEntry == false) { 
			event.preventDefault(); 
		}
	});
// If the variable "validEntry" is false for any field, throw errors laid out below
	
	$(".phoneNumber").keyup(function(evt) {
		var phoneValue = $(".phoneNumber").val();
		if(phoneValue.length != 10){
			$(".phoneNumber").addClass("invalidEntry");
		} 
//If the requirements are not met, use ".invalidEntry" css - red outline

		else {
			$(".phoneNumber").addClass("phone10");
				var FormatedNumber = "(" + phoneValue[0] + phoneValue[1] + phoneValue[2] + ")" + phoneValue[3] + phoneValue[4] + phoneValue[5] + "-" + phoneValue[6] + phoneValue[7] + phoneValue[8] + phoneValue[9];
				$(".phoneNumber").val(FormatedNumber);
//If entered correctly, use ".phone10" css to outline in green and format the number properly
		}		
	});


	$(".btn").click(function(evt) {
		$(".form").submit();
//Submits form if all is filled out correctly
	});
});	
