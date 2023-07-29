

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
    }else{
	    let success = document.getElementById('success-cont');
      success.classList.add('show-Sucess');

      // Clear input fields after successful submission
      document.getElementById('Fname').value = '';
      document.getElementById('Lname').value = '';
      document.getElementById('Email').value = '';
      document.getElementById('Pnumber').value = '';
      document.getElementById('Date').value = '';
      document.getElementById('Time').value = '';

      const audio = new Audio("./ting1.mp3");
	    audio.play();
    
      setTimeout(() => {
        success.classList.remove('show-Sucess');
      },2000);
	     console.log("FirstName: " + FirstName);
    console.log("LastName: " + LastName);
    console.log("Email: " + Email);
    console.log("Pnumber: " + Pnumber);
    console.log("Date: " + Dates);
    console.log("Time: " + Time);
    // console.log('I was clicked');
    }


});





