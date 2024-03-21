//First we need to create a button in order for the background to change
let button = document.createElement("button");
button.textContent = "button";
document.body.appendChild(button);

//Next we need to define a list of colors. I will use magenta, aqua, light blue and light pink.
const colors = ["#de268e", "#26dec2", "#c0d5fa", "#f59fbd"];

button.addEventListener("click", function(){
  //We need to define an index that represents the randomized color
  let index = Math.floor(Math.random() * colors.length);

  /*
  Now that we can use colors[index] to represent a random color on click,
  we will add an eent handler for when the button is clicked to change the
  background color.
  */
  document.documentElement.style.backgroundColor = colors[index];
});


