const login = document.getElementById("l");
const mid = document.getElementById("mid");
const paraMidLog = mid.querySelector("p");

const sign = document.getElementById("s");


sign.addEventListener("click",signup);
function signup(e){
    const userInputL = prompt("Create Login");
    const userInputP = prompt("Create strong password");
    sign.remove();
    alert("Now You can login to your account!");
};


const listItemsUl = mid.querySelector("UL");
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit",addToList);

function addToList(e){
    e.preventDefault();
    const myInput=document.getElementById("myInput");
    
    const newLi = document.createElement("li");
   newLi.innerHTML = myInput.value;
    listItemsUl.appendChild(newLi);
    
    myForm.reset();//usefull clear our typebar
}


login.addEventListener("click",log);
function log(e){
    const loInput=prompt("Enter your login");
    const pasInput=prompt("Enter your password");

    const userInputL=sign.querySelector("userInputL");
    const userInputP=sign.querySelector("userInputP");
   
    console.log(loInput);
    console.log(pasInput);
    console.log(userInputL);
    console.log(userInputP);
    if(loInput===userInputL && pasInput===userInputP){
        alert("Logged succesfuly to your account!")
    }else{ alert("Wrong password!")};
    

}


/*const SignUp = document.getElementById("s");
const buttonSign=SignUp.querySelector(".button");
buttonSign.addEventListener("click",AlertSign);
function AlertSign(e){
    prompt("aaa");
} */
