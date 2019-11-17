function validate(){
	
	var user=document.getElementById('username').value;
	var pass=document.getElementById('password1').value;
	
	var storeduser=localStorage.getItem("username");
	var storedpass=localStorage.getItem("password");
	console.log(pass);
	console.log(storedpass);
	console.log(storeduser);
	console.log(user);
	if ((storedpass==pass) && (storeduser==user)) {
		
		alert('Login Successful!');
		
	}
	else {
		
		alert('Username or password incorrect');
		
	}
}
