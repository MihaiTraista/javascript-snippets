//  https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
//  revisit Q3, 

function setup() {
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((b, index) => {
    b.addEventListener('click', (e) => {
      const parentDiv = e.target.parentNode;
      parentDiv.remove();
    })
  })
}

setup();