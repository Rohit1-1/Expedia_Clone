var passIn=document.querySelector("#passwrd");
var seePass=document.querySelector("#seen");
seePass.addEventListener("click",function(){
    var type=passIn.getAttribute("type")
    if(type==="password"){
        type="text";
    }
    else{
        type="password"
    }
 
   console.log(type)
   passIn.setAttribute("type",type)
   this.classList.toggle("fa-eye-slash")
    console.log("I'm in")

})