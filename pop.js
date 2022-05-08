var Mt_triger=document.querySelector("#More-trvl");
var callpop=document.querySelector(".popUp-cont");
var bodyr=document.querySelector("body");
var count=0;
bodyr.addEventListener("click",function(e){
 if(e.target!==bodyr)return;
 callpop.classList.remove("triger-pop")
 count=0;
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
   console.log("hi")
 })
