

let sendMessage = document.getElementById('sendMessage');

sendMessage.addEventListener('click', () =>{



    let Fullname = document.getElementById('Fullname').value;
    let Phonenumber = document.getElementById('PhoneNumber').value;
    let Useremail = document.getElementById('Useremail').value;
    let message = document.getElementById('message').value;


    document.getElementById('Fullname').value = '';
    document.getElementById('PhoneNumber').value = '';
    document.getElementById('Useremail').value = '';
    document.getElementById('message').value = '';

    if (!Fullname || !Phonenumber || !Useremail || !message) {
       
        let messageWarn = document.getElementById('warning-cont');
        messageWarn.classList.add('show-Sucess');

        // let errsar = document.getElementsByClassName('errs');
        // errsar.classList.add('errs-arr');
      
        setTimeout(() => {
            messageWarn.classList.remove('show-Sucess');
        },2000);
        return; 
    }else{
        let messageSent = document.getElementById('message-sent');
        messageSent.classList.add('show-Sucess');
        const audio = new Audio("./ting1.mp3");
	    audio.play();
      
        setTimeout(() => {
            messageSent.classList.remove('show-Sucess');
        },2000);

        console.log("Fullname: "+ Fullname);
        console.log("Phonenumber: "+ Phonenumber);
        console.log("User mail: " + Useremail);
        console.log("Message: " + message);

    }
})

