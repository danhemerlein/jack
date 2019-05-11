export default function secondsToHms(d) {
  d = Number(d);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);
  return Number(m) + ":" + Number(s);
}
