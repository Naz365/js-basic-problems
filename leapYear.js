 function leapYear(num){
    if ((num%4==0 && num%100!=0) || num%400==0){
        console.log("this is a leapYear")
    }
    else{
        console.log("this isn't an leapYear")
    }
 }
 leapYear(2025)