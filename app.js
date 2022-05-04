const dateofbirth= document.querySelector("#date-of-birth");
const luckynumber= document.querySelector("#lucky-number");
const checknumberbutton=document.querySelector("#check-number");
const outputboxdiv= document.querySelector("#output-box")

function comparevalue(sum,luckynumber){
    if(sum%luckynumber===0){
        outputboxdiv.innerText="your birthday is lucky❤🤩";
    }else {
        outputboxdiv.innerText="sorry,your birthday is not lucky😞";
    }
}

function checkbirthdaydateislucky(){
    const dob  = dateofbirth.value;
    const numbertocheck=luckynumber.value;
    const sum = calculatesum(dob,numbertocheck);
    if(sum&&dob&&numbertocheck)
    comparevalue(sum,luckynumber.value);
    else
    outputboxdiv.innerText="please enter both the fields😡";
}

function calculatesum(dob){
dob = dob.replaceAll("-","");
let sum = 0;
for(let index=0; index<dob.length; index++){
    sum = sum + Number (dob.charAt(index));
}
return sum;
}
checknumberbutton.addEventListener("click", checkbirthdaydateislucky)