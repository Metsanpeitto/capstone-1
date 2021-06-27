/**
 * ====================================================
 *  Menu Handler
 *  This is all the code needed to manage the menu and
 *  its different features.
 * ====================================================
 */
/**
 * ====================================================
 *  observer Section detector
 *  -This is the function that controls the bar bellow the
 *  menu buttons. It will change depending on the section
 *  that is currently shown in the viewport at the time.
 * ====================================================
 */

function applyBorder(id) {
  // This function is used by two other different functions
  // Sometimes it will receive a parameter with the suffix '-btn'
  // in that case there is no need to add it. So the concatenating
  // step is skipped.
  let idBtn = id;
  if (!idBtn.includes('-btn')) {
    idBtn = `${id}-btn`;
  }
  // These lines restart the style border bottom to none before assigning
  // the border style to the right one in this case.
  document.getElementById('about-btn').style.borderBottom = 'none';
  document.getElementById('program-btn').style.borderBottom = 'none';
  document.getElementById('speakers-btn').style.borderBottom = 'none';
  const button = document.getElementById(idBtn);
  button.style.borderBottom = '2px solid gray';
}

const observer = new IntersectionObserver(
  (entries) => {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    const elementId = entries[0].target.id;
    if (entries[0].isIntersecting === true) {
      // After knowing if the section is visible, the applyBorder function
      // will set the style propperty border bottom to the desired button.
      // applyBorder(elementId)
    }
  },
  { threshold: [0] },
);
// This line uses observe to keep track of the desired sections
observer.observe(document.querySelector('#about'));
observer.observe(document.querySelector('#program'));
observer.observe(document.querySelector('#speakers'));

/**
 * ====================================================
 *  handleClickMenu
 *  -This is the function that controls the menu button
 *   that shows up in the mobile version. It controls
 *   the display of a modal layout with the menu and its
 *   buttons
 * ====================================================
 */
function handleClickMenu(e) {
  const menu = document.getElementById('menu-buttons');
  const menuBtn = document.getElementById('menu-btn');
  if (menu.classList.contains('dawn') || menu.classList.contains('init')) {
    console.log(e.currentTarget);

    menuBtn.classList.remove('open');
    menuBtn.classList.add('close');
    menu.classList.add('rise');
    menu.classList.remove('dawn');
    menu.classList.remove('init');
  } else {
    console.log(e.currentTarget);

    menuBtn.classList.remove('close');
    menu.classList.remove('rise');
    menuBtn.classList.add('open');
    menu.classList.add('dawn');
  }
  console.log(menuBtn.classList);
}

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', handleClickMenu, false);
