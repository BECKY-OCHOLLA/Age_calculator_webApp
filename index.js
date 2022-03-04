var submit =document.getElementById("submit");
submit.onclick=()=>{
    var printDate =document.getElementById ("result");
    var getMyBirthday=document.form.myBirthday.value;
    var myDate=new Date(getMyBirthday);

    var myDay=myDate.getDay();
    var dayArray=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    printDate.innerHTML=dayArray[myDay];
}