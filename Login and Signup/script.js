// Function to open a specific modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Function to close a specific modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Get modals
var loginModal = document.getElementById('loginPopup');
var signupModal = document.getElementById('signupPopup');

// Get triggers for each modal
var loginTrigger = document.getElementById('loginTriggerButton');
var signupTrigger = document.getElementById('signupTriggerButton');

// Get switches for each modal
var switchToSignup = document.getElementById('switchToSignup');
var switchToLogin = document.getElementById('switchToLogin');

// Event listeners for opening each modal
loginTrigger.onclick = function() {
    openModal(loginModal);
};

signupTrigger.onclick = function() {
    openModal(signupModal);
};

// Switching from login to sign up
switchToSignup.onclick = function() {
    closeModal(loginModal);
    openModal(signupModal);
};

// Switching from sign up to login
switchToLogin.onclick = function() {
    closeModal(signupModal);
    openModal(loginModal);
};

// Close modals when clicking on the close button or outside of the modal
window.onclick = function(event) {
    if (event.target === loginModal || event.target === signupModal) {
        closeModal(event.target);
    }
};

// Get all close buttons
var closeButtons = document.getElementsByClassName('close-button');
for (var i = 0; i < closeButtons.length; i++) {
    var closeButton = closeButtons[i];
    closeButton.onclick = function() {
        var modal = this.closest('.modal');
        closeModal(modal);
    };
}


// Function to handle the opening and closing of the login popup
function togglePopup(popupId, show) {
    var popup = document.getElementById(popupId);
    if (show) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const loginTriggerButton = document.getElementById('loginTriggerButton');
    const signupTriggerButton = document.getElementById('signupTriggerButton');
    const loginPopup = document.getElementById('loginPopup');
    const loginCloseButton = loginPopup.querySelector('.close-button');
    
    // Event listener to open the login popup
    loginTriggerButton.addEventListener('click', function() {
        togglePopup('loginPopup', true);
    });

    // Event listener to close the login popup
    loginCloseButton.addEventListener('click', function() {
        togglePopup('loginPopup', false);
    });

    // Handling the login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Login Successful');
                togglePopup('loginPopup', false); // Close the popup
                // Redirect or update UI here
            } else {
                alert('Login Failed: ' + data.message); // Show error from server
                loginForm.reset(); // Clear the form
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login Failed: Could not connect to the server');
        });
    });

    // Handling the signup form submission
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const zip = document.getElementById('signupZip').value;

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password, zip: zip}),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Signup Successful');
                togglePopup('signupPopup', false); // Close the popup
                // Redirect to login page or update UI
            } else {
                alert('Signup Failed: ' + data.message); // Show error from server
                signupForm.reset(); // Clear the form
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Signup Failed: Could not connect to the server');
        });
    });


});
