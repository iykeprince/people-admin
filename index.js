import convertFrom12To24HourFormat from "./libs/convertFrom12To24HourFormat.js";
import minMaxSum from "./libs/minMaxSum.js";

//1.
var str = "02:55:45 PM";
var result = convertFrom12To24HourFormat(str);
console.log("[convertFrom12To24HourFormat]:", result);

// 2.
const arr = [1, 3, 5, 7, 9];
const result2 = minMaxSum(arr).join(" ");
console.log("[minMaxSum]:", result2);
