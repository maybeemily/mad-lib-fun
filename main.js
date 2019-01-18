//Let's make a big pot of soup. We need to add broth, spices,
// and vegetables. It needs to cook for 50 minutes. Serve with bread.


function makeSoup() {
    var string1 = "Let's make a "
    var adj1 = document.getElementById('adj1').value;
    var string2 = " pot of soup. We need to add ";
    var noun1 = document.getElementById('noun1').value;
    var string7 = ", "
    var noun2 = document.getElementById('noun2').value;
    var string3 = " and ";
    var noun3 = document.getElementById('noun3').value;
    var string4  =". It needs to ";
    var verb1 = document.getElementById('verb1').value;
    var string5 = " for ";
    var number1 = document.getElementById('number1').value;
    var string6 =" minutes. Serve with ";
    var noun4 = document.getElementById('noun4').value;
    var string8 = ".";

    var madLib = string1 + adj1 + string2 + noun1 + string7 + noun2 + string3 + noun3 + string4 + verb1 +
string5 + number1 + string6 + noun4 + string8;

    var display = document.getElementById('output');
    display.textContent = madLib;


}
