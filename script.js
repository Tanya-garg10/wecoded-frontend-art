const glass = document.getElementById("glass");
const message = document.getElementById("message");

glass.addEventListener("click", function(){

glass.classList.add("break");

setTimeout(()=>{
message.style.display = "block";
},700);

});
