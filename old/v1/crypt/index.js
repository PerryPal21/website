var outputText = document.getElementById("output")
var outputVal = "";
if (outputText) {
    outputVal = outputText.value
}
var inputText = document.getElementById("input")

inputText.addEventListener('input', base64);

function base64() {
    var textArray = inputText.value.split(" ")
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



