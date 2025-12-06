console.log("Hello World!");
function write(){
console.log("Hello worrrld from inside this thing");

let userName = document.getElementById("fname").value;
let weapon = document.getElementById("weapon").value;
let location;
let adj = document.getElementById("adj").value;
let monster = document.getElementById("monster").value;
let num = document.getElementById("num").value;
let verb = document.getElementById("verb").value;
let food = document.getElementById("food").value;
let body = document.getElementById("body").value;
let excl = document.getElementById("excl").value;
console.log(userName);
console.log(weapon);
console.log(adj);
console.log(monster);
console.log(num);
console.log(verb);
console.log(food);
console.log(body);
console.log(excl);


if(document.querySelector("input[name='location']:checked") !=null){
    location = document.querySelector("input[name='location']:checked").value;
    console.log(location);
    }

document.getElementById("story").innerHTML += "<p> The " +adj+ " hero known as " +userName+ " ventured into the " +location+ " armed only with a trusty " +weapon+ ". " + "After walking for " +num+ " hours, they heard a strange sound, something was " +verb+ " in the shadows. " +excl+ "! " +userName+ " shouted as a massive " +monster+ " emerged from the darkness. The beast looked hungry, but our hero had a plan. They reached into their bag and pulled out a " +food+ ", tossing it toward the monster. The " +monster+ " sniffed it curiously, then devoured it in one bite. Satisfied, the beast wandered away, leaving behind a treasure chest containing " +num+ " gold coins and a mysterious map in the shape of a " +monster+ "with an 'X' marked right over its " +body+ ". And so " +userName+ " lived to adventure another day.</p>"
}