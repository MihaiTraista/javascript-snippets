for (let i = 0; i < 5; i++){
  const child = document.createElement("div");
  child.innerHTML = String(i);
  child.class
  child.onclick = function() {
    alert("div #" + i);
  }
  box.appendChild(child);
}

const arr = [1, 2, 3];

console.log(Array.isArray(arr), Object.prototype.toString.call(arr));

const purple = document.getElementById("itemC");

purple.addEventListener("mouseover", () => {
  console.log("hover!");
});