 function leapYear(num){
    if ((num%4==0 && num%100!=0)  || num%400==0){
        console.log("this is a leapYear");
    }
    else{
        console.log("this isn't an leapYear");
    }
 }
 leapYear(2022);

/*To determine whether a year is a leap year, follow these steps:

01. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
02. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
03. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
04. The year is a leap year (it has 366 days).
05. The year is not a leap year (it has 365 days).*/
