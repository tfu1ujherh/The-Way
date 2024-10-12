function validateSignUp() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const repassword = document.querySelector('input[name="repassword"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
  
    if (password !== repassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Add further validation logic here
    alert('Sign up Successful!');
  }
  