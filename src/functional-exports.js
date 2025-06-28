import { home_page, menu_page, about_page } from "./page-exports.js";

export function check_button(button) {
  const content = document.querySelectorAll("#content-wrapper");
  if (button.textContent === "Home") {
     content.forEach((piece) => {
       piece.remove();
     });
     home_page();
  }
  else if (button.textContent === "Menu") {
     content.forEach((piece) => {
      piece.remove();
     });
     menu_page();
  }
  else if (button.textContent === "About") {
     content.forEach((piece) => {
        piece.remove();
     });
     about_page();
  }
}