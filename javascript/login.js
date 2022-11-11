const firebaseConfig = {
    apiKey: "AIzaSyCSG1sB1kZI9ojtRVT7N5b3uVA4EpKdWAQ",
    authDomain: "testing-cbb70.firebaseapp.com",
    projectId: "testing-cbb70",
    storageBucket: "testing-cbb70.appspot.com",
    messagingSenderId: "932753464171",
    appId: "1:932753464171:web:8a4c941a490f65c693ca2e",
    measurementId: "G-DK0Z9NR4SX"
};

const app = firebase.initializeApp(firebaseConfig);
const appVerifier = window.recaptchaVerifier;

const sendOTP = (event) => {
    location.replace("../index.html")
}

const checkValidUserName = (userName) =>{
    return userName.length > 0;
}

const checkValidPhoneNumber = (phoneNumber) => {
    return phoneNumber.length == 10;
}


