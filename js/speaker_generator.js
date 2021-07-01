/* ====================================================
 *  Speaker Generator
 *  - This is the group of functions needed to handle
 *  the dynamic creation of the 'speakers section'.
 *   To propperly work it requires of a data object
 *  called 'speakers' and imported from './data_speakers.js'
 *  The data from that object will be injected in the
 *  different functions resulting in the finale template
 * ====================================================
 */
/**  This data object contains all the information about every individual speaker */
import speakers from './data_speakers.js';

/**  This functions generates a single group with the data injeted in it */
function groupFiller(speakers) {
  const group = `          <div class=${speakers[0].group}>
            <div class="card">
              <div class="images">
                <img class="chess" src="./images/chess.svg" alt="chess" />
                <img
                  class="speaker"
                  src=${speakers[0].image}
                  alt="speaker-picture"
                />
              </div>
              <div class="text">
                <h3>${speakers[0].name}</h3>
                ${
  speakers[0].short === null
    ? `<h6 style="display:none;"> ${speakers[0].short}</h6>`
    : `<h6> ${speakers[0].short}</h6>`
}
          
                <div class="gray-line"></div>
                <p>
                ${speakers[0].text}
                </p>
              </div>
            </div>
            <div class="card">
              <div class="images">
                <img class="chess" src="./images/chess.svg" alt="chess" />
                <img
                  class="speaker"
                  src=${speakers[1].image}
                  alt="speaker-picture"
                />
              </div>
              <div class="text">
                <h3>${speakers[1].name}</h3>
                ${
  speakers[1].short === null
    ? `<h6 style="display:none;"> ${speakers[1].short}</h6>`
    : `<h6> ${speakers[1].short}</h6>`
}
                <div class="gray-line"></div>
                <p>
                  ${speakers[1].text}
                </p>
              </div>
            </div>
          </div>`;
  return group;
}

/**  This constant contains the reference to the Html object section 'speakers' */
const speakersSection = document.getElementById('speakers');

function filler() {
  const group1 = [speakers[0], speakers[1]];
  const group2 = [speakers[2], speakers[3]];
  const group3 = [speakers[4], speakers[5]];
  const groups = [group1, group2, group3];
  const groupTemplates = [];
  groups.forEach((g) => {
    groupTemplates.push(groupFiller(g));
  });
  const template = `   
   <div class="speakers-title">
          <h3>Featured Speakers</h3>
          <div class="red-line"></div>
        </div>
        <div class="cards">   
         ${groupTemplates[0]}
         ${groupTemplates[1]}
         ${groupTemplates[2]}
         
        </div>
        <div class="buttons">
          <button id="button-mobile-speakers-more" class="btn-2 btn-more">
            MORE<img class="btn-arrow-down" src="./images/arrow-down.svg" alt="arrow-down" />
          </button>
          <button id="button-mobile-speakers-less" class="btn-2 less btn-less">
            LESS<img class="btn-arrow-up" src="./images/arrow-down.svg" alt="arrow-up" />
          </button>
        </div>`;

  speakersSection.innerHTML += template;
}

/**  Calling filler when the document loads will run the generator   */
filler();
