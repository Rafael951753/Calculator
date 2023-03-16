

let y=10;
let x=0;
let r=0;
let s=0;
let adun=false;
let scad=false;


let display=document.getElementById("screen");

function show(n)
{
    display.value += n;
}

function clearrr()
{
    display.value = display.value.slice(0, -1);
 
}

function calc()
{
    display.value = eval(display.value);
}
 
function allclear()
{
    display.value = "";
}
  


  /*function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }*/

   let dark=true;
   
   const ti=document.getElementById("tit");
 const btn = document.getElementById('btndark');
 const p = document.querySelectorAll("#p1, #p2, #p3 , #p4, #p5, #p6,#p7, #p8, #p9, #p0,#punct ,#adunare,#scadere,#inmultire,#impartire,#axb,#egal,#del");
 const cl=document.getElementById("clear");
 const dk=document.getElementById("dk");
 const cerc_dk=document.getElementById("btndark");

 

function darkmode(){
  

  const ecr=document.getElementById("ecran");
  const ti=document.getElementById("tit");
  if( dark==true)
  {
    
    document.body.style.background ="rgb(3, 0, 28)";
  document.body.style.transition="all 0.5s ease 0s"


  ecr.style.borderColor="white";
  ecr.style.color="white";

  ti.style.color="white";

  cl.style.backgroundColor="#8B4000";
  cl.style.transition="all 0.5s ease 0s"
   cl.style.boxShadow = "0px 8px 15px rgba(173, 216, 230, 0.2)";

   display.style.color="white";
    display.style.transition="all 0.5s ease 0s";

    

   cl.addEventListener('mouseover', function handleMouseOver() {

    cl.style.backgroundColor="darkorange";
   });

   cl.addEventListener('mouseout', function handleMouseOver() {

    cl.style.backgroundColor="#8B4000";
   });
 
 
btn.style.backgroundColor="white";
btn.style.color="black";
btn.style.transition="all 0.5s ease 0s";
btn.style.transform="translateX(33px)";


dk.style.color="white";

  p.forEach((element) => {
    element.style.backgroundColor = "rgb(19, 0, 90)";
    element.style.transition="all 0.5s ease 0s"
    element.style.color="white";
    element.style.boxShadow = "0px 8px 15px rgba(173, 216, 230, 0.2)";
    
  });


p.forEach(function(element){
element.addEventListener('mouseover', function handleMouseOver() {

  element.style.backgroundColor = "rgb(182, 234, 218)";
    element.style.transition="all 0.5s ease 0s"
    element.style.color="black";
    element.style.boxShadow = "0px 8px 15px rgba(173, 216, 230, 0.2)";
});
});
    
p.forEach(function(element){
  element.addEventListener('mouseout', function handleMouseOut() {
  
    element.style.backgroundColor = "rgb(19, 0, 90)";
    element.style.transition="all 0.5s ease 0s"
    element.style.color="white";
    element.style.boxShadow = "0px 8px 15px rgba(173, 216, 230, 0.2)";
  });
  });
      





dark=false;}else
  {
    document.body.style.background ="white";
    document.body.style.transition="all 0.7s ease 0s"
    cl.style.backgroundColor="rgba(204, 13, 13, 0.678)";
       cl.style.transition="all 0.5s ease 0s"
   cl.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
   cl.addEventListener('mouseover', function handleMouseOver() {

    cl.style.backgroundColor="red";
   });

   cl.addEventListener('mouseout', function handleMouseOver() {

    cl.style.backgroundColor="rgba(204, 13, 13, 0.678)";
   });

   ecr.style.borderColor="black";
   ecr.style.color="black";

   
  ti.style.color="black";

  btn.style.backgroundColor="rgb(22, 20, 20)";
btn.style.color="white";
btn.style.transition="all 0.5s ease 0s";
btn.style.transform="translateX(0px)";

dk.style.color="black";
dk.style.transition="all 0.5s ease 0s";


     display.style.color="black";
    display.style.transition="all 0.5s ease 0s";

    p.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.transition="all 0.5s ease 0s"
      element.style.color="black";
      element.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
      
    });


    p.forEach(function(element){
      element.addEventListener('mouseover', function handleMouseOver() {
      
        element.style.backgroundColor = "#919191";
          element.style.transition="all 0.5s ease 0s"
          element.style.color="white";
          element.style.boxShadow = "0px 15px 20px rgba(0, 0, 0, 0.4);";
      });
      });

                
      p.forEach(function(element){
        element.addEventListener('mouseout', function handleMouseOut() {
        
          element.style.backgroundColor = "white";
          element.style.transition="all 0.5s ease 0s"
          element.style.color="black";
          element.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
        });
        });


  dark=true;


  }
       

}

/*const p = document.querySelectorAll("#p1, #p2, #p3 , #p4, #p5, #p6,#p7, #p8, #p9, #p0,#punct ,#adunare,#scadere,#inmultire,#impartire,#axb,#egal,#del");



function darkmode(){

  document.body.setAttribute("class","body1");
  document.getElementById("ecran").setAttribute("class","ecran1");
  document.getElementsById("tit").style.color="white";
  

}*/

