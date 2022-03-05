

//DOM variables

const welcome=document.getElementById("description1");

const myForm=document.getElementById("myForm");

const myOutput=document.getElementById("result");

const goBtn=document.getElementById("goBtn");

const submitBtn= document.getElementById("submit");

const goBack= document.getElementById("goBack");

const akanNAme= document.getElementById("displayAkanName");

goBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    description1.style.display="none";
    myForm.style.display="flex";
  
    myForm.classList.add("changeSmooth");
  })


goBack.addEventListener("click", (e)=>{
    e.preventDefault();
    description1.style.display="none";
    myForm.style.display="flex";
    myOutput.style.display="none";
  })
  //Suubmit button event
  submit.addEventListener("click", (e)=>{
    e.preventDefault();


    let gender= document.form.gender.value;

    let birthDay= document.getElementById("birthDay").value;
  
    let birthDayDate= new Date(birthDay);

    let myDay=birthDayDate.getDay();







// var submit =document.getElementById("submit");
// submit.onclick=()=>{
   
//     var printDate =document.getElementById ("result");
//     var getMyBirthday=document.form.myBirthday.value;
//     var myDate=new Date(getMyBirthday);

//     var myDay= myDate.getDay();

let maleAkanName= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]; 
let femaleAkanName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]; 

    if(gender===""){
        alert("Err:Select Your Gender!")
      }else if(birthDay===""){
        alert("Err:Enter Your Birthday!")
      }else{
        if(gender==="male"){
          akanNAme.innerHTML= maleAkanName[myDay]
        }else{
          akanNAme.innerHTML= femaleAkanName[myDay]
        }
        myOutput.style.display="flex";
        description1.style.display="none";
        myForm.style.display="none";
    
        akanNAme.classList.add("type-animation");
    
        myOutput.classList.add("changeSmooth");
      }
    
     
    })

// var dayArray=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// printDate.innerHTML= dayArray[myDay];


    
