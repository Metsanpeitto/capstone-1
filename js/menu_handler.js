/* ====================================================
 *  handleClickMenu
 *  -This is the function that controls the menu button
 *   that shows up in the mobile version. It controls
 *   the display of a modal layout with the menu and its
 *   buttons
 * ====================================================
 */
function handleClickMenu() {
  const menu = document.getElementById('menu-buttons');
  const menuBtn = document.getElementById('menu-btn');
  const main = document.getElementById('main');
  const main2 = document.getElementById('main-2');

  if (menu.classList.contains('dawn') || menu.classList.contains('init')) {
    menuBtn.classList.remove('open');
    menuBtn.classList.add('close');
    menu.classList.add('rise');
    menu.classList.remove('dawn');
    menu.classList.remove('init');
    main.style.display = 'none';
    if (main) {
      main.style.display = 'none';
    }
    main2.style.display = 'none';
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('rise');
    menuBtn.classList.add('open');
    menu.classList.add('dawn');
    if (main) {
      main.style.display = 'block';
    }
    main2.style.display = 'block';
  }
}

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', handleClickMenu, false);
