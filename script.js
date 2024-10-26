document.addEventListener("DOMContentLoaded", () => {
	const form= document.getElementById("registration-form");
	const feedbackDiv = document.getElementById("form-feedback");

	form.addEventListener('submit', e => {
		e.preventDefault();
		const tusername = document.getElementById("username");
		const temail = document.getElementById("email");
		const tpassword = document.getElementById("password");
		
		const username = tusername.value.trim();
		const email = temail.value.trim();
		const password = tpassword.value.trim();

		let isValid = true;
		let messages = [];

		if(username.length < 3){
			isValid = false;
			messages.push = "Username must have more than 3 characters";
		}
		if(!email.include("@") || !email.include(".")){
			isValid = false;
			messages.puch = "Email must include @ and .";
		}
		if(password.length < 8){
			isValid = false;
			messages.push = "Password must be at least 8 characters"
		}
		if(isValid == true){
			feedbackDiv.textContent("Registration successful!");
		}else if (isValid == false){
			
		}
	})
})