// Sign Up Btn Start's__________________________

const user_name = document.getElementById('user_name')
const signup_mail = document.getElementById('user_signup_email')
const signup_password = document.getElementById('user_signup_password')

function signup_btn() {

}

// Sign Up Btn End's__________________________


// Login Btn Start's__________________________

const login_mail = document.getElementById('user_login_email')
const login_password = document.getElementById('user_login_password')

// Login Btn End's__________________________


// Teleporter Start's__________________________

const signup = document.getElementById('signup_box');
const login = document.getElementById('login_box');

function teleporter(params) {
    if (params === 'sgnup_to_lgn') {
        // console.log(`pass`);
        signup.classList.add('hide');
        login.classList.remove('hide');
        return
    }
    else if (params === 'lgn_to_sgnup') {
        // console.log('pass2');
        login.classList.add('hide');
        signup.classList.remove('hide');
        return
    }
}

// Teleporter End's__________________________