import axios from "axios";

const userPhone = document.getElementById("user-tel");
const errorPhone = document.querySelector(".error__phone");

const userMail = document.getElementById("userEmail")
const errorMail = document.querySelector(".error__mail");




const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

userMail.addEventListener ('change', onInputMail)






function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

export function onInputMail() {
	if (isEmailValid(userMail.value)) {
		errorMail.style = 'display: none';
	} else {
		errorMail.style = 'display: block';
	}
}
