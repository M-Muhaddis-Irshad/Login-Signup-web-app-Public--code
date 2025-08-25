// Sign Up Btn Start's__________________________

const user_name = document.getElementById('user_name')
const signup_mail = document.getElementById('user_signup_email')
const signup_password = document.getElementById('user_signup_password')

// console.log(document.getElementsByTagName('button')[0]);
// console.log(document.getElementsByTagName('button')[1]);

const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function signup_btn() {

    if (!user_name.value.trim() || !signup_mail.value.trim() || !signup_password.value.trim()) {
        Swal.fire({
            icon: "error",
            title: "Error! All fields are required",
            text: "Something went wrong!",
        });
        return;
    }
    else if (!email_regex.test(signup_mail.value)) {
        Swal.fire({
            icon: "error",
            title: "Error! Enter valid email address",
            text: "Something went wrong!",
        });
        // console.error("Enter valid email address");
        return
    }
    else if (signup_mail.value === localStorage.getItem("User Email")) {
        teleporter(params = "sgnup_to_lgn")
        Swal.fire({
            icon: "error",
            title: "Please login \nThis email is already registered",
            text: "Something went wrong!",
        });
        return
    }
    else {
        // console.log("Corrct email");
        localStorage.setItem("User Name", user_name.value)
        localStorage.setItem("User Email", signup_mail.value)
        localStorage.setItem("User Password", signup_password.value)

        Swal.fire({
            title: "Account successfully created",
            icon: "success",
            draggable: true
        });
    }

}

// Sign Up Btn End's__________________________


// Login Btn Start's__________________________

// const login_mail = document.getElementById('user_login_email')
// const login_password = document.getElementById('user_login_password')

// function login_btn(params) {

// }

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