function validateLogin() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    if (username === 'admin' && password === '1234') {
      alert('Login Successful');
    } else {
      alert('Incorrect Username or Password');
    }
  }
  