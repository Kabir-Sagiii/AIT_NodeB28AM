var gender = "male";
function studentDetails() {
  var name = "Raj";
  var city = "Delhi";

  console.log(name, city);
}

module.exports = { studentDetails, gender }; // This is the way to export function from JS file using common JS Module Pattern
