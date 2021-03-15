var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var text = document.querySelector("p");

const change=(id)=> {
    if(id==green){
        text.style.color = "green";
    }
    else if(id==red){
        text.style.color = "red";
    }
    else if(id==blue){
        text.style.color = "blue";
    }
}
green.addEventListener("click", ()=>{change(green)});
red.addEventListener("click", ()=>{change(red)});
blue.addEventListener("click", ()=>{change(blue)});