import * as languages from "./languages.js";

export {timeago};




const SECONDS_IN_TIME = [
  1,         // 1 second
  60,        // 1 minute
  3600,      // 1 hour
  86400,     // 1 day
  604800,    // 1 week
  2419200,   // 1 month
  29030400   // 1 year
];



/*
 * The language array to which <convert> defaults.
 */
const en_US=[
  "just now",     "seconds ago",
  "a minute ago", "minutes ago",
  "an hour ago",  "hours ago",
  "a day ago",    "days ago",
  "a week ago",   "weeks ago",
  "a month ago",  "months ago",
  "a year ago",   "years ago"
]



/*
 * A given period of time starts at "x" seconds and ends at "y" seconds.
 * A second starts at 1 second, an hour at 3600, a day at 86400 and so on.
 *
 * With that in mind, we iterate over <SECONDS_IN_TIME> to find 
 * the matching period of time.
 *
 * We divide the difference <diff> by the seconds in that period of time.
 * That way we find the amount of "units" (seconds, minutes etc.) elapsed.
 *
 * We prepend the amount of <time_elapsed> to <lang> values if plural, 
 * or leave as is otherwise.
 *
 * If <time_elapsed> is greater than 2 we return the plural value,
 */
function convert(el, timestamp, lang) {

  let now = Math.floor(new Date / 1000);
  let diff = (now - timestamp) || 1; // prevent undefined val when diff == 0

  for (let i = 6; i>=0; i--) {

    if (diff >= SECONDS_IN_TIME[i]) {

      let time_elapsed = Math.floor(diff / SECONDS_IN_TIME[i]);
      let adverbs = languages[lang] || en_US;
      let sentence = adverbs.map((el,idx) => idx % 2 == 0 ? el : time_elapsed +" "+ el);

      return time_elapsed >= 2 ? sentence[i * 2 + 1] : sentence[i * 2];

    }

  }

}



/*
 * For every <el>ement in the page we set its value formatted
 * with the function above and <update_every> second(s).
 */
function timeago(el="time", update_every=30, lang) {
  let time_elements = document.querySelectorAll("."+el);

  time_elements.forEach(el =>
    el.innerHTML = convert(el, el.dataset.timestamp, lang)
  )

  /*
   * Recursive setTimeout call to timeago to execute the first time
   * and then every n seconds, where n = <update_every>.
   *
   */
  setTimeout( () => 
    timeago(el, (update_every),lang), 
    update_every * 1000);

}
