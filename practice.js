let size= 'XL';
if (size==='XL') {
    console.log("Price is Rs. 250");
}  else if (size==='L') {
    console.log("Price is Rs. 200");
}   else if (size ==='M') {
    console.log("Price is Rs. 100");
} else {
    console.log("Price is Rs.50");
}

let marks = 95;
if (marks >=33) {
    console.log("pass");
    if (marks >=80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
}  else {
    console.log("Better Luck next time!");
}

let msg = "     hello     ";

let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass);


let name ='supriya';
let ans = "error";

console.log(ans.toUpperCase());



let doc = "  ILoveCoding   ";
let newMsg = doc.trim();
console.log("after trim:", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase :", newMsg);
let NewMsg = doc.trim().toUpperCase();
console.log(NewMsg);


let cod = "praveen";
console.log(cod.slice(4, cod.length));
console.log(cod.slice(-2));


let str = "ILoveCoding";
let fruit = "Mango";