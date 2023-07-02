 // Array to store registration details
 var registrations = [];

 // Get the form element
 var form = document.getElementById("registrationForm");
 
 // Add a submit event listener
 form.addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent form submission
   
   // Get the input values
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var gender = document.getElementById("gender").value;
   var image = document.getElementById("image").files[0];
   var Website=document.getElementById("Website").value;
   var Skills=document.getElementById("Skills").value;
   // Create an object with registration details
   var registration = {
     name: name,
     email: email,
     gender: gender,
     image: image,
     Website: Website,
     Skills: Skills
     
   };

   // Add the registration to the array
   registrations.push(registration);

   // Display all registrations
   displayRegistrations();

   // Reset the form
   form.reset();
 });

 // Function to display all registrations
 function displayRegistrations() {
   var outputHTML = "<h3>Registration Details:</h3>";
   if (registrations.length > 0) {
     outputHTML += "<table>";
     outputHTML += "<tr><th>Name</th><th>Email</th><th>Gender</th><th>Image</th><th>Website</th><th>Skills</th><</tr>";
     for (var i = 0; i < registrations.length; i++) {
       outputHTML += "<tr>";
       outputHTML += "<td>" + registrations[i].name + "</td>";
       outputHTML += "<td>" + registrations[i].email + "</td>";
       outputHTML += "<td>" + registrations[i].gender + "</td>";
       outputHTML += "<td><img src='" + URL.createObjectURL(registrations[i].image) + "' alt='Uploaded Image' width='100'></td>";
       outputHTML += "<td>" + registrations[i].Website + "</td>";
       outputHTML += "<td>" + registrations[i].Skills + "</td>";
       outputHTML += "</tr>";
     }
     outputHTML += "</table>";
   } else {
     outputHTML += "<p>No registrations yet.</p>";
   }

   document.getElementById("registrationData").innerHTML = outputHTML;
 }