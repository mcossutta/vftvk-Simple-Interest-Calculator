function compute()
{
    var principal = document.getElementById("principal");
    
    // send an alert if the value of principal is less or equal to zero
    if (principal.value <= 0) {
    alert("Enter a positive number");
    principal.focus();}
    else{
    // else compute the interest and display the result in the element with id result
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    console.log(years)
    var interest = principal.value * years * rate/100 ;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal.value+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>.\<br\>";
    }
}

function updateRate()
{

document.getElementById("rate_val").innerText = document.getElementById("rate").value+"%"
}
        