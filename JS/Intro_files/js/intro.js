
//JS statements are ACTIONS we tell Javascript to perform
//change this content, update or add this, change the look of that

//using the console for testing
console.log("Hello World this is blaine");


//STRINGS are pieces of text and must alway go WITHIN quotes



//conversely, NUMBERS do not go within quotes



//Numbers allows you to do math stuff like seeing if something is less than something else




//simple variables
//variables are temporary holders of data - it can change depending on conditions that we set in the code
let animal;



//we give variables a VALUE when we want them to hold something

animal = "unicorn";
animal = "platypus";

//variables also don't have quotes when we want to use them - although their values can
console.log(animal);



//we can overwrite or set an NEW VALUE to a pre-existing variable 
//when we do so, we don't use the keyword var again
animal = "minotaur";
console.log(animal);
let a;
let b;
a = 10;
b = 12;
console.log(a+b);
console.log("My favourite animal is ", animal);



//as you can see what is printed out to the console the second time is different because we changed the value of the variable

//CONCATENATION - This is the fancy coding word for 'adding things together'. Not in a math sense but adding bit of text or values together
//for example, what is we want to pring to the console "My favourite animal is [and whatever is in the animal variable"




//We aren't bound to just putting stuff in the console!!! This is a great way to test and debug and find errors

//Changing the DOM - Document Object Model
//We can change the content on ANY element on a page with it's ID
//we use the JavaScript METHOD getElementById() to select something
//We use the PROPERTY .innerHTML to state that we want to change the HTML that is inside of it
document.getElementById('column1').innerHTML = "<h1>HOME</h1> <p>ALONE SCREAM</p>";
document.getElementById('column1').innerHTML += "HOLY SHIT IT CHANGED";
//document.getElementById('column1').innerHTML += "<img class= 'image-fluid' src='images/code.jpg'> ";




//We can change more than just the content! We can change the looks
//This time we will add the id 'column2' to the next column over and then change the css of it!
//we will select it by the id
//Then use the .style to say we want to change the css of it and then state which property we want to change

document.getElementById("column2").style.color="red";
document.getElementById("column2").style.fontsize="48pt";
document.getElementById("column2").style.backgroundColor="orange";


//LOGIC!
//THE MOST powerful aspect about any kind of coding is that we can use logic to create a custom interaction with the user
//This means we can give the browser instructions on what to do depending on something else
//For example, in a game, perhaps you can pick up a better weapon, which in turn causes more damage
//So the amount of damage points is BASED on which weapon is being used 



//we will create a variable that holds the 'weapon' that the user has	



//Then we will print out content to the page depending on which weapon they have
//This is LOGIC
//we will use an 'IF STATEMENT' to change the message they receive based on the variable holding the weapon
//animal = "fish"
if(animal=="minotaur"){console.log("correct")

}
else{ console.log("incorrect")

}
let count = 0;
while (count <= 20){
    console.log(count);
    count++;
}

//Let's take it a step further and say the opponent has a health of 100 points
let weapon = "BFG";

if(weapon == "fists"){document.getElementById("column3").innerHTML += "<p>You have fists</p>"}
else if (weapon == "BFG"){document.getElementById("column3").innerHTML += "<p>You're holding a BFG</p>"}
else {
    document.getElementById("column3").innerHTML += "<p>You need a weapon to continue</p>"};

let damage = 5
if(weapon =="fists"){console.log(damage = 5)

}else if(weapon == "sword"){
    damage = 10;
}else if(weapon == "BFG"){
    damage = 65;

}else{damage = 0};

console.log(damage);

//Send a message to column3 with what the opponent's health is
let health = 100;
document.getElementById("column3").innerHTML += weapon + " has damage of: " + damage;
//if(damage > 0){console.log(health - damage)};
if (damage > 0){console.log(health - damage)}
document.getElementById("column3").innerHTML += " <p>your health is now: " +(health - damage)+"</p>";
let health1 = health - damage


//then we will define damage points for each type of weaapon




//use the console to test is the damage variable is working correctly



//Let's change column3 and send the user a message
//CONCATENTATE the 'weapon' name and the STRING ' have this much damage: ' and then the 'damage' amount



//Now let's say the user has hit the opponent with their weapon
//We need to MINUS the 'damage' from the opponents 'health'



//then send the message with the new 'health' value



//Hit them AGAIN and send the new health message
 health1 - damage;



//then send the message with the new 'health' value
document.getElementById("column").innerHTML +=
"<p>Health is now: " + health1 +"</p>";

