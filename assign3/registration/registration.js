

function validateForm(){
	
	
	var falsecount=0;
	var error_msg="";
	
	//first name validation
	var namepatt=/^[a-z ]+$/i;
	var fname=document.getElementById("firstName").value;
	var fnameres=namepatt.test(fname);
	
	if (fnameres==0){
		
		falsecount++;
		error_msg+="First name not valid. Only letters allowed<br>";
	}
	
	//last name validation
	
	var lname=document.getElementById("last_Name").value;
	var lnameres=namepatt.test(lname);
	
	if (lnameres==0){
		
		falsecount++;
		error_msg+="Last name not valid. Only letters allowed<br>";
	}
	
	
	//phonenum validation
	var phonepatt=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
	var phone=document.getElementById("phone").value;
	var phoneres= phonepatt.test(phone);
	
	if (phoneres==0){
		
		falsecount++;
		error_msg+="\nPhone Number not valid. Format (999-999-9999)<br>";
		
	}
	
	//username validation
	var userpatt=/^[A-Za-z]+[0-9A-Za-z]{6,}$/;
	var username=document.getElementById("username").value;
	var useres= userpatt.test(username);
	
	if (useres==0) {
		
		falsecount++;
		error_msg+="Username does not meet requirements. Must start with letter and be at least 6 characters.<br>";
		
	}
	
	//password validation
	var passpatt= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/;
	var pass1= document.getElementById("password1").value;
	var pass2= document.getElementById("password2").value;
	
	if (pass1.toLowerCase().indexOf(pass2.toLowerCase())!= -1) {
		
		var passres= passpatt.test(pass1);
		
		if (passres==0) {
			
			falsecount++;
			error_msg+="Passowrds do not meet requirements.<br>Must contain at least 1 digit, 1 uppercase, start with a letter and must be 8 characters long.<br>";
			
		}
		
		
	}
	else {
		
		falsecount++;
		error_msg+="Passwords do not match.<br>";
		
		
	}
	
	//unit validation
	
	var unitpatt=/^[0-9]+$/;
	var unit=document.getElementById("unit").value;
	var unitres=unitpatt.test(unit);
	
	if (unitres==0) {
		
		falsecount++;
		error_msg+="Unit number invalid. Must be all digits.<br>";
		
	}
	//street validation
	
	var streetpatt=/^[a-z ]+$/i;
	var street=document.getElementById("street").value;
	var streetres=streetpatt.test(street);
	
	if (streetres==0){
		
		falsecount++;
		error_msg+="Street invalid. Must only contain letters.<br>";
	}
	
	//city validation
	
	var citypatt=/^[A-Za-z]*$/;
	var city=document.getElementById("city").value;
	var cityres=citypatt.test(city);
	
	if (cityres==0){
		
		falsecount++;
		error_msg+="City invalid<br>";
		
	}
	
	//postal validation
	
	var postalpatt=/^[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/;
	var postal=document.getElementById("postalcode").value;
	var postalres=postalpatt.test(postal);
	
	if (postalres==0){
		
		falsecount++;
		if (falsecount<8){
		error_msg+="Postal Code invalid. Format eg (L3W3E6)";
		}
		else if (falsecount>8){
			error_msg+="Too many errors!";  
			ok=false;
			document.getElementById('errors').innerHTML = error_msg;
			return ok=false;}
	}
	
	//if there are no errors in the file it iwll save the username and password
	if (falsecount==0){
		
		localStorage.setItem("password", pass1);
		localStorage.setItem("username", username);
		alert('All information valid');
		
		ok=true;
	}
	else {
		ok=false;
		
		document.getElementById('errors').innerHTML = error_msg;
		
	}
	return ok;
	
}

	function clearErrors(){
		
		document.getElementById('errors').innerHTML = " ";
		
	}
	