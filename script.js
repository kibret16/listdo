if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function(reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}




// var counter = 0*60;
// var spot = document.getElementById("counter");
// spot.innerHTML = ("Add Tasks");
// setInterval(function(){
//   var minutesRemaining = Math.floor(counter / 60);
//   spot.innerHTML = ("Everything will be deleted in " + minutesRemaining + ":" + zeroPad(counter - (minutesRemaining*60), 2));
//   if (counter > 0) counter--
//   if (counter == 0) {
//     spot.innerHTML = ("Add Tasks");
//     //document.getElementById("myUL").innerHTML = "";
//   }
// }, 1000);

enter = "enter";

addTask2 = function () {
  var term = document.getElementById("task-input").value;
  word = term.trim();
  word = word.toLowerCase();
  word = word.substring(word.length - 5, word.length);
  console.log(word);
  input = term.replace(word, "");
  if (word == enter) {
    newElement(enter);
  }
}


const zeroPad = (num, places) => String(num).padStart(places, '0')

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("✔");
  span.className = "close";
  myNodelist[i].appendChild(span);
  span.appendChild(txt);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(clean = "") {
  event.preventDefault();
  var li = document.createElement("li");

  var inputValue = document.getElementById("task-input").value;
  inputValue = inputValue.replace(clean, "");

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("task-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("✔");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // counter = counter+(1*60);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}