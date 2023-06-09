//1.get a reference to the button ->querySelector
let button = document.querySelector('#clickMe');
//2.define a function to alert user
function alertUser()
{
    alert('you clicked!')
    button.removeEventListener('click', alertUser)//remove the alert message, make sure one show once
}
//3.add the function as event listener
button.addEventListener('click',alertUser);//if use alertUser(), the function will be called ONLY once
// button.addEventListener('click', () =>{
//     alert('Button clicked, Hello!')
// })
//#####button.addEventListener('click',alertUser,{once:true})//second option to remove listener with object true

function addNewElements()
{
    //createelement *2 ->button, p
    const newPara = document.createElement("p");
    const newButton = document.createElement("button");
    //change color to new button when mouseover
    newButton.addEventListener("mouseover", changeBGPink);
    //appendChild*2
    document.body.appendChild(newPara);
    document.body.appendChild(newButton);
    //add textContent*2
    newButton.textContent = "purple";
    newPara.textContent = "something"

}

button.addEventListener("click", addNewElements)


function changeBGPink()
{
    document.body.style.background='pink';
    document.body.style = 'background-color: pink'; //not recommended
    document.body.classList.add("pinkBG")//prefered, can use toggle
}
button.addEventListener("click", changeBGPink);

function changeText()
{
    //if it says click me change it to clicked
    //else change it to click me
    if(button.textContent ==='Click Me!')
    {
        button.textContent = 'clicked';
    }else{
        button.textContent = 'Click Me!';
    }
    // let isclick = false;
    // if(!isclick)
    // {
    //     button.textContent = 'Clicked!';
    //     isclick = true;
    // }
    // else
    // {
    //     button.textContent = 'Click Me!';
    //     isclick = false;
    // }
    
}
button.addEventListener("click", changeText)


//1.find the div
const buttonContainer = document.querySelector(".button-container");

//2.define change BGGreen function
function changeBGGreen(event)
{
    console.log(event.target)
    //change the style of event.target to have green bg
    event.target.style.background = 'green'
    if(event.target.tagName === "Button"){//newPara will not turn green even if we add eventListener,but only button
        event.target.classList.add('greenBG')
    }
}
buttonContainer.addEventListener('click',changeBGGreen);
//3.add the func as event listener


//2.define a function to change textcolor
function changeTextColor(event)
{
    //if red button is clicked -> the text color should be red
    event.target.style.color = event.target.textContent;
    event.target.classList.add(event.target.textContent) 

}

//3.event listener
buttonContainer.addEventListener("click",changeTextColor);

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



