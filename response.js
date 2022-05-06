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

var arrow=document.querySelector("#arrow").addEventListener("click",function(){
    window.history.back();
})

// SAVING USER DETAIL///////////////////

var signUp_data=document.querySelector("#singForm");

var signUpData=JSON.parse(localStorage.getItem("SignUpData"))||[]
signUp_data.addEventListener("submit",function(){
event.preventDefault();
var SupData={
    email:signUp_data.email.value,
    Fname:signUp_data.Fname.value,
    Sname:signUp_data.Sname.value,
    passwrd:signUp_data.passwrd.value,
}
signUpData.push(SupData)
if(SupData.email===""||SupData.Fname===""||SupData.Sname===""||SupData.passwrd===""){
 var p= document.querySelector("#alert")
 p.innerText="Please Fill All Information !";
 
 
}
else{
localStorage.setItem("SignUpData",JSON.stringify(signUpData))
var p= document.querySelector("#alert")
p.innerText="";
console.log(signUpData)
}
})


              // LOGIN PRocesss////////

    var getData=JSON.parse(localStorage.getItem("SignUpData"));

     var
