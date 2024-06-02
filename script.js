document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // You can perform further actions here, like sending the form data to a server
        // Example: You can use fetch API to send the form data to a server endpoint
         fetch('your-server-endpoint', {
             method: 'POST',
             body: formData
        })
         .then(response => response.json())
         .then(data => {
             console.log('Success:', data);
        })
        .catch(error => {
             console.error('Error:', error);
         });
        
        // For demonstration purposes, let's just log the form data
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    });
});    