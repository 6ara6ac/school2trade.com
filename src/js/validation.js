import axios from "axios";

const userPhone = document.getElementById("user-tel");
const errorPhone = document.querySelector(".error__phone");

const userMail = document.getElementById("userEmail")
const errorMail = document.querySelector(".error__mail");

const checkbox = document.querySelector('.checkbox__input')



const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

userPhone.addEventListener ('change', onInputPhone)
userMail.addEventListener ('change', onInputMail)

async function onFetchPhone (){
const resp = await axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=3a01629a553144ad864910dc15af87e6&phone=${userPhone.value}`)
return resp;
}

async function onInputPhone (){
    await onFetchPhone ()
    .then(response => {
            console.log(response.data);
            if (response.data.valid !=true) {
                errorPhone.style="display: block"
            }
            else {
                errorPhone.style="display: none"
            }
        })
        .catch(error => {
            console.log(error);
        });
}






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
