const login = document.getElementById("l");
const mid = document.getElementById("mid");
const paraMidLog = mid.querySelector("p");

const sign = document.getElementById("s");


sign.addEventListener("click",signup);
function signup(e){
    const userInputL = prompt("Create Login");
    globalThis.userInputL=userInputL;
    const userInputP = prompt("Create strong password");
    globalThis.userInputP=userInputP;
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

    if(loInput===userInputL && pasInput===userInputP){
        alert("Logged succesfuly to your account!")
    }else{ alert("Wrong password!"); myForm.remove();};       // If we type wrong password Aplication to do list will dissappear 
    

}


/*const SignUp = document.getElementById("s");
const buttonSign=SignUp.querySelector(".button");
buttonSign.addEventListener("click",AlertSign);
function AlertSign(e){
    prompt("aaa");
} */
