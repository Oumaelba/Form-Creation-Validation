document.addEventListener("D0MContentLoaded", function (){
	async function fetchUserData() {

		const apiUrl = 'https://jsonplaceholder.typicode.com/users';
		const dataContainer = document.getElementById("api-data");
		
		try{
			const response = await fetch(apiUrl);
			const users = await response.json();
			dataContainer.innerHTML = '';
			const userList = document.createElement('ul');
			users.forEach(user => {
				user = document.createElement('li');
				user.textContent = user.name; 
				userList.appendChild(user);
			})
			dataContainer.appendChild(userList);
		}
		catch{
			dataContainer.innerHTML = '';
			dataContainer.textContent = 'Failed to load user data.';
		}
	}
})
