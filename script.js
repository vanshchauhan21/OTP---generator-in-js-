
function getOTP() {
    let showOtp = document.getElementById("otp");
    let digits = "1234567890";
    let otp = "";

    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    showOtp.innerHTML = `<span></span>`;

    setTimeout(() => {
        showOtp.innerHTML = otp;
    }, 1000);
}
