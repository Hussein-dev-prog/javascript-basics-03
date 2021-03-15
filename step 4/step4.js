var password = document.querySelector("#password");
var confirmation = document.querySelector("#confirmation");
var button = document.querySelector("button");



button.addEventListener("click",()=>{
    if (password.value != confirmation.value){
        password.style.border = "3px solid red";
        confirmation.style.border = "3px solid red";
    }
})