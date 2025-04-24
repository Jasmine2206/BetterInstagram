// script.js

// Store the dragged element globally
let dragged = null;

// Wait for the DOM to load pictures
window.addEventListener("DOMContentLoaded", () => {
  const imageDivs = document.querySelectorAll(".image");

  imageDivs.forEach((div, index) => {
    // Assign ID from div1 to div6
    div.id = `div${index + 1}`;

    // Set background from CSS 
    const computedStyle = getComputedStyle(div);
    div.style.backgroundImage = computedStyle.backgroundImage;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    // Drag start handler
    div.addEventListener("dragstart", (e) => {
      dragged = div;
      div.classList.add("selected");
    });

    // Drag over handler to allow drop
    div.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // Drag leave to reset UI
    div.addEventListener("dragleave", () => {
      div.classList.remove("selected");
    });

    // Drop handler for swapping
    div.addEventListener("drop", (e) => {
      e.preventDefault();
      if (dragged !== div) {
        const temp = div.style.backgroundImage;
        div.style.backgroundImage = dragged.style.backgroundImage;
        dragged.style.backgroundImage = temp;
      }
      dragged.classList.remove("selected");
      dragged = null;
    });

    // Drag end handler
    div.addEventListener("dragend", () => {
      div.classList.remove("selected");
    });
  });
});
