/* const paragraph = document.querySelector('.text');
paragraph.addEventListener('mouseover', function addText() {
  const text = document.querySelector('.text');
  const newText= '<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>';
  text.innerHTML = text.innerHTML + newText;
});
 */
// const buttonElement = document.querySelector('.button');

function changeColor(event) {
  switch(event.key) {
    case 'r':
      document.body.style.backgroundColor = "red";
      break;
    case 'm':
      document.body.style.backgroundColor = "purple";
      break;
    default:
      return
  }
}

document.addEventListener("keydown", changeColor);