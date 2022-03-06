

    var goBack= document.getElementById("goBack");
    var date = document.getElementById("month")
    var month = document.getElementById("date")
    var year = document.getElementById('year')
    var birthDay= new Date(year+ '/' +month + '/' + date)
    var dayOfWeek=birthDay.getDay()

    

    function myFunc(year,date,month){
       
        if (year.toString().length!=4){
            alert("incorrect enty,four digits needed i.e 1996");
            // year.style.border = "solid 3px red";
            return false;
            
        }
        else if (date.toString().length <2) {
            alert("incorrect entry ,should 2 digits i.e 06");
            // date.style.border = "solid 3px red";
            return false;
        }
       
        else if (month.toString().length <2){
            alert( "incorrect entry,two digits needed i.e 02");
            // month.style.border = "solid 3px red";
            return  false;
        }
        else{
           return true;
         }
       
    }
  
    document.getElementById("submitButton").addEventListener("click",function (){
        var year = document.getElementById('year').value
        var date = document.getElementById('date').value
        var month = document.getElementById('month').value
        
       
        var birthDay= new Date(year+ '-' +month + '-' + date)
       
        var dayOfWeek=birthDay.getDay()
       
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    

    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
     myFunc(year,date,month)
   


    if (Number(date) <=0 && Number(date)>31){
        document.getElementById("result").innerHTML="Please enter a valid date!"
    }
    else if(Number(month)<0 && Number(month)>12){
        alert("Please enter a valid month!")
    }
    else if((gender != "female") && (gender != "male")){
        alert("Please select gender!")
    }
    else if (gender == "male"){
        document.getElementById("result").innerHTML="Your birth day is "+ days[dayOfWeek]+" while "+" Your Akan name is "+maleName[dayOfWeek]
    }
    else if (gender == "female"){
        document.getElementById("result").innerHTML="Your birth day is "+days[dayOfWeek]+" while "+" Your Akan name is "+femaleName[dayOfWeek]
    }
    else{document.getElementById("result").innerHTML=" Please check your entry! "}
   
 } )


    





