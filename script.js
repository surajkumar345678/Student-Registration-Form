function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    console.log(password, confirm - password);
    let message = document.getElementById("message");
    if (password.length != 0) {
      if (password == confirmpassword) {
        message.textContent = "Password match";
        message.style.color = "#00FF00"
      } else {
        message.textContent = "Password does not match";
        message.style.color = "#FF0000";
      }
    }
    else {
      alert("All details are compulsory. Please fill all details.");
      message.textContent = "";
    }
  }

  var uploadField = document.getElementById("myfile");

uploadField.onchange = function() {
    if(this.files[0].size > 102400){
       alert("File is too big! File size should be 100kb.");
       this.value = "";
    };
};