// script.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Send a POST request to the backend with the userData
    // You'll need to replace this with actual backend integration
    // For example, you can use fetch or Axios to send the data to your backend API.

    // Replace the URL below with your backend endpoint
    const backendURL = "https://your-api-url.com/signup";
    
    // Example using fetch
    fetch(backendURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        // Handle the response from the backend here
        // You may want to redirect the user or display a message based on the response.
        console.log(response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
