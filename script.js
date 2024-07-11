function validateForm() {
  var isValid = true;


  var nameInput = document.getElementById('name');
  var nameError = document.getElementById('nameError');
  var name = nameInput.value.trim();
  var length = name.length;
  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    nameError.textContent = '';
  }
   if(length<4){
    nameError.textContent = 'Name must contain atleast 4 charecters';
   }else{
    nameError.textContent = '';
   }


  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var email = emailInput.value.trim();
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else {


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Enter a valid email address';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  }

  var messageInput = document.getElementById('message');
  var messageError = document.getElementById('messageError');
  var message = messageInput.value.trim();
  var messaeLength= message.length;
  if (message=== '') {
      messageError.textContent = 'message is required';
    isValid = false;
  } else {
      messageError.textContent = '';
  }


  return isValid;
}

$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxmnnBhv-EElHJol5LjCriHvMZdsgSsxRm1T7s_KSAEQc2uawDKXA6dieWl57NT_MP2bg/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
          alert("Form submitted successfully")
          window.location.reload()
      },
      error: function (err) {
        console.log(err);
          alert("Something Error")

      }
  })
})