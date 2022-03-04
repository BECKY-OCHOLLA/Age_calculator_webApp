var submit =document.getElementById("submit");
submit.onclick=()=>{
    var value=document.getElementById("myName");
    var printDate =document.getElementById ("result");
    var getMyBirthday=document.form.myBirthday.value;
    var myDate=new Date(getMyBirthday);

    var myDay=myDate.getDay();

    var dayArray=(["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",],["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]);
    
//     if(document.getElementById('male').checked){
//         document.write("male radio button is checked");

//     }else if(document.getElementById('female').checked){
//         document.write("female radio button is checked")
//     }else {  
//         document.write("no radio button is selected");   
// }  

//  if(male === true){
//      document.write(["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]);

//  }else{
//      document.write(["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]);
//  }

    printDate.innerHTML= "Your Akan name is" && dayArray[myDay];

}

    