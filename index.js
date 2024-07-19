// Get the modal section and the cancel button
const modal = document.getElementById('modal');
const cancelButton = document.getElementById('cancel-button');

// Get all the "Place Order" buttons
const orderButtons = document.querySelectorAll('#button');

// Add an event listener to each "Place Order" button
orderButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Prevent the default behavior of the button
    e.preventDefault();

    // Show the modal
    modal.classList.remove('hidden');

    // Add an event listener to the cancel button
    cancelButton.addEventListener('click', () => {
      // Hide the modal
      modal.classList.add('hidden');
    });

    // Add an event listener to the "Create Task" button
    document.querySelector('button.bg-black').addEventListener('click', () => {
      // Get the order name from the input field
      const orderName = document.querySelector('input[name="input"]').value;

      // Create a new order object
      const order = {
        name: orderName,
        // Add other order details here if needed
      };

      // Send the order to the server or perform any other action
      console.log('Order has been made:', order);

      // Hide the modal
      modal.classList.add('hidden');

       // Send the order to the server using fetch API
       fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Order created successfully:', data);
        responseMessage.textContent = 'Order created successfully!'; // Display success message
        responseMessage.classList.add('success'); // Add success class to the response message element
      })
      .catch(error => {
        console.error('Error creating order:', error);
        responseMessage.textContent = 'Error creating order. Please try again.'; // Display error message
        responseMessage.classList.add('error'); // Add error class to the response message element
      });
    });
  });
});