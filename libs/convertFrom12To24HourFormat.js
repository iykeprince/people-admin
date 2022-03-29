/**
 * The task required a 24 hour format time format
 * hence the hard-coded date 1/1/1970
 */
const convertFrom12To24HourFormat = (str) => {
  const dt = new Date("1/1/1970 " + str);
  return formattedTime(dt);
};

const formattedTime = (dt) => {
  const HH = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
  const MM = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
  return `${HH}:${MM}`;
};

export default convertFrom12To24HourFormat;
