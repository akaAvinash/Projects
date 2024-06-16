function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    if (isNaN(length) || length < 4 || length > 50) {
      alert("Please enter a valid password length (between 4 and 50 characters).");
      return;
    }
    
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").value = password;
  }
  