var SERVICE_ID = "service_om3wmdm"
var TEMPLATE_ID = "template_qqxi5wf"
var USER_ID = "FHDYgIigPYO7jVw2y"
///////////////sending form////////////////////////

const form = document.getElementById("myForm")


let formDataJSON = {};
form.addEventListener('submit', function(event){
	event.preventDefault(); // Prevent the form from submitting

	// Get form data
	var formData = new FormData(event.target);

	formData.forEach(function(value, key){
		formDataJSON[key] = value;
	});
console.log(formDataJSON)

let data = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: "8RXc5FJTnXE0syC0H",
    template_params: formDataJSON,
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
	method: 'POST',
	body: JSON.stringify(data)
})
.then(response => {
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
})
.then(data => {
	alert("message sent successfully")
	// console.log('POST request successful:', data);
})
.catch(error => {
	alert("Something went wrong please try again")
	// console.error('Error:', error);
});

})

