const age = 20;
if(age > 18){
    console.log("You can vote")
}
else{
    console.log("You go sleep")
}

// structure 

/* 
three parts
?         :
condition ? do something when true   : do something when false 

*/

age >= 19 ? console.log("You can vote") : console.log("You go sleep")


let price =700;
const isLeader= false;

price = isLeader=== true ? 0 : price + 100;
console.log(price)


// another example 


price = isLeader=== true ? 
    price > 1000 ? 
        price= price/2 :  0 
            : price + 1000;
             console.log(price)