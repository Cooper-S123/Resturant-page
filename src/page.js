import "./page.css";
import { home_page } from "./page-exports.js";
import { check_button } from "./functional-exports.js"; 

function navigate_page() {
    home_page();
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
       button.addEventListener("click", () => {
          check_button(button); 
       });
    });
}

navigate_page();