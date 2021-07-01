/* ====================================================
 *  handleClickMoreSpeakers
 *  -This is the function that controls the menu button
 *  of the speakers section. It behaves in the following
 *  way:
 *       1 - When only a layout (2 speakers) are showing
 *       the button shows 'MORE'. When pressed another
 *       layout taking other 100vh will appear.
 *       2 - When 2 layouts are shown and the total
 *       height of the speaker section is 200vh, the
 *       'MORE' button keeps showing. When pressed,
 *       the last layout will show.
 *       3 - When the 3 layouts are showing the button
 *       text changes from 'MORE' to 'LESS'. If pressed
 *       the last layout will be removed. And so on.
 *
 *    The variable 'groupsOnScreen' helps to keep track of
 *    the number of groups that are actually showing on
 *    the screen. By default its value will be one.
 *    Modifying the div 'buttons' to show 'display: flex'
 *    or 'grid' at the same time that giving to the element
 *    'button-mobile-speakers' the propperty 'display:none'
 *    will make this appear taking 50% of the available
 *    space or dissapear.
 *  * ====================================================
 */
let groupsOnScreen = 1;

function handleClickMoreSpeakers(e) {
  const caller = e.currentTarget.id;
  const btnM = document.getElementById('button-mobile-speakers-more');
  const btnL = document.getElementById('button-mobile-speakers-less');
  const group2 = document.getElementsByClassName('group-2');
  const group3 = document.getElementsByClassName('group-3');
  const buttonsSection = document.getElementsByClassName('buttons');
  if (caller === 'button-mobile-speakers-more') {
    if (groupsOnScreen === 1) {
      btnL.style.display = 'block';
      buttonsSection[0].style.display = 'grid';
      group2[0].style.display = 'block';
    }

    if (groupsOnScreen === 2) {
      btnL.style.display = 'block';
      btnM.style.display = 'none';
      buttonsSection[0].style.display = 'flex';
      group3[0].style.display = 'block';
    }
    groupsOnScreen += 1;
  } else {
    if (groupsOnScreen === 3) {
      btnL.style.display = 'block';
      btnM.style.display = 'block';
      buttonsSection[0].style.display = 'flex';
      group3[0].style.display = 'none';
    }

    if (groupsOnScreen === 2) {
      btnL.style.display = 'none';
      buttonsSection[0].style.display = 'flex';
      group2[0].style.display = 'none';
    }
    groupsOnScreen -= 1;
    document.getElementById('speakers').scrollIntoView();
  }
}

// This first function ensures that the document has being already created
document.addEventListener('DOMContentLoaded', () => {
  const btnMore = document.getElementById('button-mobile-speakers-more');
  btnMore.addEventListener('click', handleClickMoreSpeakers, false);
  const btnLess = document.getElementById('button-mobile-speakers-less');
  btnLess.addEventListener('click', handleClickMoreSpeakers, false);
});
