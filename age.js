var begin = prompt("När föddes du? (år-månad-dag)");
var currentTime = new Date();
var today = currentTime.getTime();
var diffms = today - (Date.parse(begin));
var days = diffms/(1000*3600*24);
var years = Math.round(days/365.25);
var restDays = Math.round(days - (years*365.25));
alert("Du är " + years + " år och " + restDays + " dagar gammal");
