export default function secondsToHms(d) {
  d = Number(d);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);

  if (s < 10) {
    return Number(m) + ":0" + Number(s);
  } else {
    return Number(m) + ":" + Number(s);
  }

}
