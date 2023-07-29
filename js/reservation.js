

let ReserveButton = document.getElementById('submitReservation');

ReserveButton.addEventListener('click', (event) =>{
    event.preventDefault();

    let FirstName = document.getElementById('Fname').value;
    let LastName = document.getElementById('Lname').value;
    let Email = document.getElementById('Email').value;
    let Pnumber = document.getElementById('Pnumber').value;
    let Dates = document.getElementById('Date').value;
    let Time = document.getElementById('Time').value;



    // check if input is empty

    if (!FirstName || !LastName || !Email || !Pnumber || !Dates || !Time) {
       
        let warning = document.getElementById('message-warning');
        warning.classList.add('show-Sucess');
      
        setTimeout(() => {
            warning.classList.remove('show-Sucess'); 
        },2000);
        return; 
    }

    
    console.log("FirstName: " + FirstName);
    console.log("LastName: " + LastName);
    console.log("Email: " + Email);
    console.log("Pnumber: " + Pnumber);
    console.log("Date: " + Dates);
    console.log("Time: " + Time);
    // console.log('I was clicked');

    // Convert the time value to a Date object
    let timeObj = new Date(`2000-01-01T${Time}:00`);

    // Get the time string with AM/PM designation
    let formattedTime = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });




    // const emailjs = require('emailjs-com');
    // require('dotenv').config();
    
    // Initialize EmailJS with your user ID (EmailJS API key)
   // Initialize EmailJS with your user ID (EmailJS API key)
   emailjs.init("anloU0pCTeppqV9lu");


  // Function to send the email
    emailjs.send("service_2cednt4", "template_isxz23g", {
      Firstname: FirstName,
      Lastname: LastName,
      Email: Email,
      Pnumber: Pnumber,
      Dates: Dates,
      Time: formattedTime,
      from_name: "Crave Solution Website",
    })

    // success
    .then(function(response) {
      console.log("Email sent successfully:", response);
      let success = document.getElementById('success-cont');
      success.classList.add('show-Sucess');

      // Clear input fields after successful submission
      document.getElementById('Fname').value = '';
      document.getElementById('Lname').value = '';
      document.getElementById('Email').value = '';
      document.getElementById('Pnumber').value = '';
      document.getElementById('Date').value = '';
      document.getElementById('Time').value = '';


      console.log('Status code:', response.status);
      console.log('Response text:', response.text);
      console.log('Parsed JSON data:', response.json);

      const audio = new Audio("./ting1.mp3");
	    audio.play();
    
      setTimeout(() => {
        success.classList.remove('show-Sucess');
      },2000);

    //   error
    }, function(error) {
      console.log("Email failed to send:", error);
    let errs = document.getElementById('error-cont');
        errs.classList.add('show-Sucess');
        setTimeout(() => {
            errs.classList.remove('show-Sucess');
        },2000);
    });
});





