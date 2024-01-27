function sendOTP(){
    const email =document.getElementById('email');
    const otpverify=document.getElementsByClassName('otpverify')[0];

    //password for SMTP: 3824B8B5C5F423EEDA87354AE631A0A3AB72
    //port 2525
    //secure token: f0e4cc38-5f57-41f1-981e-6d08f735f44f
    let otp_val=Math.floor(Math.random()*10000);
    let emailbody=`<h2>Your OTP is </h2>${otp_val}`;

    Email.send({
    SecureToken : "f0e4cc38-5f57-41f1-981e-6d08f735f44f",
    To : email.value,
    From : "tssanjayvarma29@gmail.com",
    Subject : "OTP from Sanjay",
    Body : emailbody
    }).then(
      message => {
        if(message==='OK'){
            alert("OTP sent to your mail: "+email.value);
            otpverify.computedStyleMap.display='flex';
            const otp_inp=document.getElementById('otp_inp');
            const otp_btn=document.getElementById('otp_btn');
            otp_btn.addEventListener('click',()=>{
                if(otp_inp.value==otp_val){
                    alert('You are good to go')
                }
                else{
                    alert('Ypu entered a in valid OTP. Please enter Correctly')
                }
            })
            
        }
      }
    );
}

// function sendOTP() {
// 	const email = document.getElementById('email');
// 	const otpverify = document.getElementsByClassName('otpverify')[0];

// 	let otp_val = Math.floor(Math.random() * 10000);

// 	let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
// 	Email.send({
//     SecureToken : "f0e4cc38-5f57-41f1-981e-6d08f735f44f",
//     To : email.value,
//     From : "abc@gmail.com",
//     Subject : "Email OTP using JavaScript",
//     Body : emailbody,
// }).then(

// 	message => {
// 		if (message === "OK") {
// 			alert("OTP sent to your email " + email.value);

// 			otpverify.style.display = "flex";
// 			const otp_inp = document.getElementById('otp_inp');
// 			const otp_btn = document.getElementById('otp-btn');

// 			otp_btn.addEventListener('click', () => {
// 				if (otp_inp.value == otp_val) {
// 					alert("Email address verified...");
// 				}
// 				else {
// 					alert("Invalid OTP");
// 				}
// 			})
// 		}
// 	}
// );
// }