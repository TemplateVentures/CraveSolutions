// app.js
document.getElementById('submitReservation').addEventListener('click', (event) => {
    event.preventDefault();
  
    // Get form input values
    const FirstName = document.getElementById('Fname').value;
    const LastName = document.getElementById('Lname').value;
    const Email = document.getElementById('Email').value;
    const Pnumber = document.getElementById('Pnumber').value;
    const Dates = document.getElementById('Date').value;
    const Time = document.getElementById('Time').value;
  
    // Check if input is empty
    if (!FirstName || !LastName || !Email || !Pnumber || !Dates || !Time) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Prepare the data object to send to the server
    const data = {
      FirstName,
      LastName,
      Email,
      Pnumber,
      Dates,
      Time,
    };
  
    // Make an HTTP POST request to the server-side API endpoint
    axios.post('/send-email', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Email sent successfully:', response.data);
        alert('Reservation successful. Thank you!');
        // Clear input fields after successful submission
        document.getElementById('Fname').value = '';
        document.getElementById('Lname').value = '';
        document.getElementById('Email').value = '';
        document.getElementById('Pnumber').value = '';
        document.getElementById('Date').value = '';
        document.getElementById('Time').value = '';
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Reservation failed. Please try again later.');
      });
  });
  