
   
  // Optional: Prevent form submission for demonstration purposes
 
  
  let otpSent = '';  // Store the sent OTP for verification (for demo purposes)

  function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Toggle visibility of forms
    if (formType === 'login') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      loginBtn.classList.add('active');
      signupBtn.classList.remove('active');
    } else {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
      signupBtn.classList.add('active');
      loginBtn.classList.remove('active');
    }
  }

  // Simulate sending OTP from backend (for demo purposes)
  function sendOTP(formType) {
    const phoneNumber = formType === 'login' ? document.getElementById('login-phone').value : document.getElementById('signup-phone').value;
    if (!phoneNumber.trim()) {
      alert('Please enter a valid phone number');
      return;
    }

    // Simulating backend OTP generation
    otpSent = Math.floor(100000 + Math.random() * 900000);  // Generate a 6-digit OTP

    // Show OTP input field
    if (formType === 'login') {
      document.getElementById('otp-container-login').style.display = 'block';
    } else {
      document.getElementById('otp-container-signup').style.display = 'block';
    }

    alert(`OTP sent to ${phoneNumber}: ${otpSent}`);  // Simulate OTP sent
  }

  // Simulate verifying OTP
  function verifyOTP(formType) {
    const enteredOTP = formType === 'login' ? document.getElementById('otp-login').value : document.getElementById('otp-signup').value;

    if (!enteredOTP.trim()) {
      alert('Please enter the OTP');
      return;
    }

    // Check if the entered OTP matches the sent OTP
    if (enteredOTP === otpSent.toString()) {
      alert('OTP Verified Successfully!');
      // Proceed with form submission (can replace with backend logic)
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  // Optional: Prevent form submission for demonstration purposes
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login form submitted');
  });

  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup form submitted');
  });


  