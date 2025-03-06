const inputbox = document.getElementById("input-box");
const listcontinear = document.getElementById("list-continear");

function addTask() {
  if (inputbox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontinear.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
   savedata()
}

listcontinear.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
       savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); 
       savedata();
    }
  },
  false
);
function savedata(){
  localStorage.setItem("data", listcontinear.innerHTML);
}
function showtask(){
  listcontinear.innerHTML = localStorage.getItem("data")
}
showtask();