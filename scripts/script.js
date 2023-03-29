//1.get a reference to the button ->querySelector
let button = document.querySelector('#clickMe');
//2.define a function to alert user
function alertUser()
{
    alert('you clicked!')
    button.removeEventListener('click', alterUser)//remove the alert message, make sure one show once
}
//3.add the function as event listener
button.addEventListener('click',alertUser);//if use alertUser(), the function will be called ONLY once
// button.addEventListener('click', () =>{
//     alert('Button clicked, Hello!')
// })
//#####button.addEventListener('click',alertUser,{once:true})//second option to remove listener with object true



// let button = document.querySelector("button");
//   function once() {
//     console.log("Done.");
//     button.removeEventListener("click", once);
//   }
//   button.addEventListener("click", once);


//   let button = document.querySelector("button");

//     button.addEventListener("click", () =>{
//         document.body.style.background = 'pink';
//     });


// let button = document.querySelector("button");
// let isClicked = false;
// button.addEventListener("click", () => {
//   if (!isClicked) {
//     button.textContent = "Clicked!";
//     isClicked = true;
//   } else {
//     button.textContent = "Click Me!";
//     isClicked = false;
//   }
// });

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   let shoppingCart = document.querySelector("#shoppingCart");
//   shoppingCart.src = "images/shoppingCart.png";
//   shoppingCart.alt = "Shopping Cart";
//   shoppingCart.width = "50";
//   shoppingCart.height = "50";
// });


	
