/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hr = parseInt(time, 10);
  if(hr < 12){
    return "Good Morning"
  }else if (hr > 12 && hr < 17) {
    return "Good Afternoon"
  }else{
    return "Good Evening"
  }
}

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg;
}
