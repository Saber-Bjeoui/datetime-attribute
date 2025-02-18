import { MILLISECONDS_PER_WEEK } from './utils/const.js'
import { datetime, weekNumber } from './index.js'

export class DateTime extends Date {

  /**
   * Returns the week of the year (`1`–`53`) of the specified date according to
   * local time, as defined by the WHATWG and the ISO-8601 specs:
   *
   * - a week starts on Monday (https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-week);
   * - the first week of the year includes a Thursday;
   * - week numbers go from 1 to 53 (https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#week-number-of-the-last-day).
   *
   * @returns {number}
   */
  getWeek() {
    return weekNumber(this)
  }

  /**
   * Set the week number.
   *
   * @param {number} weekNumber
   * @returns {number} Milliseconds since midnight on January 1, 1970, UTC
   */
  setWeek(weekNumber) {
    const weeksDiffInMs = (weekNumber - this.getWeek()) * MILLISECONDS_PER_WEEK
    return this.setTime(this.getTime() + weeksDiffInMs)
  }

  /**
   * Converts a date to a string following the ISO 8601 Extended Format.
   *
   * @param {string} precision
   * @returns {string}
   */
  to(precision) {
    return datetime(this, precision)
  }
}
