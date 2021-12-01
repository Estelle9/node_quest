const studentInfo = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `hello I'm ${studentInfo.student} from  ${studentInfo.campus}`,
    e: "oO",
    T: "U "
}));