document.addEventListener("DOMContentLoaded", function() {
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
			messages.push("Username must have more than 3 characters");
		}
		if(!email.includes("@") || !email.includes(".")){
			isValid = false;
			messages.push("Email must include @ and .");
		}
		if(password.length < 8){
			isValid = false;
			messages.push("Password must be at least 8 characters");
		}
		feedbackDiv.style.display = "block";
		if(isValid){
			feedbackDiv.textContent("Registration successful!");
			feedbackDiv.style.color = "#28a745";
			feedbackDiv.innerHTML = "";
		}else {
			feedbackDiv.innerHTML = messages.join("<br>");
			feedbackDiv.style.color = "#dc3545";
		}
	})
})