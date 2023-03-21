const content = document.querySelector('.sticky');
const closeRisk = document.querySelector('.close_risk');

closeRisk.addEventListener("click",onclick);

function onclick(){
  content.style.display = "none";
}

