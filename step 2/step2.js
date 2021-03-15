var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var p = document.querySelector("#texte");

const change=(id)=> {
    if(id==show){
        p.style.display = "block" ;
    }
    else if(id==hide){
        p.style.display = "none";
    }
}
show.addEventListener("click", ()=>{change(show)});
hide.addEventListener("click", ()=>{change(hide)});