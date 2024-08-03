const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = `<span>${inputBox.value}</span> <i class="fas fa-trash delete"></i>`;
  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

window.addEventListener("load", showTask);
