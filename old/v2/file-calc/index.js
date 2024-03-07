var outputText = document.getElementById("output")
var outputVal = "";
if (outputText) {
    outputVal = outputText.value
}
var inputText = document.getElementById("input")

inputText.addEventListener('input', base64);

function base64() {
    var textArray = input.value.split(" ")
    console.log(textArray)
    var command = textArray.splice(0, 1)
    console.log(command)
    var targetPhrase = textArray.join(" ")
    console.log(targetPhrase)
    if (command[0] === "") {
        outputText.value = ""
    }
    if (command[0] === "encode") {
        var encoded = btoa(targetPhrase)
        console.log(btoa(targetPhrase))
        outputText.value = encoded
    }
    if (command[0] === "decode") {
        var encoded = atob(targetPhrase)
        console.log(atob(targetPhrase))
        outputText.value = encoded
    }
}

/* function rotation() { // LBH QVQ VG!
    var textArray = input.value.split(" ")
    console.log(textArray)
    var command = textArray.splice(0, 1)
    console.log(command)
    var factorNumber = textArray.splice(0,1)
    console.log(factorNumber)
    if (!isNaN(factorNumber[0])) {
        var factor = factorNumber[0]
    } else {
        var factor = 13;
    }
    var targetPhrase = textArray.join(" ")
    console.log(targetPhrase)
    if (command[0] === "") {
        outputText.value = ""
    }
    if (command[0] === "encode") {
        var re = new RegExp("[a-z]", "i");
        var min = 'A'.charCodeAt(0);
        var max = 'Z'.charCodeAt(0);
        var result = "";
        str = str.toUpperCase();
        
        for (var i=0; i<str.length; i++) {
          result += (re.test(str[i]) ?
            String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
        }
        outputText.value = result
    }
    if (command[0] === "decode") {

    }
    
  }
 */


