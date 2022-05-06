
 var Mt_triger=document.querySelector("#More-trvl");
 var callpop=document.querySelector(".popUp-cont");
 var bodyr=document.querySelector("body");
 var count=0;
 var countsign=0;
 bodyr.addEventListener("click",function(e){
  if(e.target!==bodyr)return;
  else{
  callpop.classList.remove("triger-pop")
  show_sinbar.classList.remove("show-singbar")
  }

  count=0;
  countsign=0;
 })
  
  Mt_triger.addEventListener("click",function(e){
      count++;
   if(count%2!==0){
    callpop.classList.add("triger-pop")
   
   }
   else
   {
    callpop.classList.remove("triger-pop")
   }
    // console.log("hi")
  })

 
 
  var bodd=document.querySelector("body")
var expdia=document.querySelector("#logo");



expdia.addEventListener("click",function(){
  window.location.href="landing.html";
})

var triger_lang=document.querySelector(".for-bg")
triger_lang.addEventListener("click",function(e){
  if(e.target!==triger_lang)return;
  else{
  triger_lang.classList.remove("triger-bg")
  bodd.style.position="unset"

  }
})
var lang_btn=document.querySelector("#language-btn");

lang_btn.addEventListener("click",function(e){

triger_lang.classList.add("triger-bg")

bodd.style.position="fixed"


})


var sign_triger=document.querySelector("#sign-in");
var show_sinbar=document.querySelector(".signIn-pop")

sign_triger.addEventListener("click",function(){
  countsign++;
  console.log(countsign)
  
  if( countsign%2!==0){
    show_sinbar.classList.add("show-singbar")
   
    console.log("ok")
  }
  else
  {
    show_sinbar.classList.remove("show-singbar")
  }
 
  // console.log("hiiii")
})

var signIn_redirect=document.querySelector("#redt-signIn");
var signUp_redirect=document.querySelector("#redt-signUp");

signIn_redirect.addEventListener("click",function(){
  window.location.href="login.html"
})

signUp_redirect.addEventListener("click",function(){
  window.location.href="signUp.html"
})










