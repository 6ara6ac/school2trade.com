

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-AUTH-TOKEN", "baa0045b-fd5d-4e62-a0b7-7337ff7d3d55");

const submit = document.querySelectorAll ('.modal__button');



submit.forEach(data => data.addEventListener('click', onClickForm));

function onClickForm () {
  
    console.log (document.getElementById("user-tel").value);
    console.log (document.getElementById("userEmail").value);
	
var raw = JSON.stringify({
"hash":"01F071E1-D216-43A1-AAC5-47AA319AD559",
"interest":{
  "account_type":1,
  "campaign_type":2},
"identification":{
  "email": document.getElementById("userEmail").value,
  "phone": document.getElementById("user-tel").value,
  "external_id":0},
"utm":{
  "utm_medium": "utm_medium",
  "utm_source":"https://school2trade.com/",
  "utm_campaign":"LearningCenter",
  "utm_content":"utm_content",
  "utm_term":"utm_term",
  "xtm_medium":"xtm_medium",
  "xtm_source":"xtm_source",
  "xtm_campaign":"xtm_campaign",
  "xtm_content":"xtm_content",
  "xtm_term":"xtm_term"},
"url":"https://school2trade.com/",
"date":Math.floor(Date.now()/1000),
"ip":"",
"user-agent":window.navigator.userAgent,
"agent_id":"",
"personal":{
  "name": document.getElementById("user-name").value,
  "lastname":"",
  "middlename":"",
  "is_male":true,
  "language":"en"}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("https://crm.just2trade.online/_/api/interest/new", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));

event.preventDefault();
setTimeout(() => {
window.location = "/register_ru.html";},2000)
}