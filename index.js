const fs = require("fs");

var st = fs.readFileSync('01.txt');
fs.appendFileSync('02.txt',st.toString());