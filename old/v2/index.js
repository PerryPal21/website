function switchdisplay() {
    var projectbutton = document.querySelector(".projectButton")
    var hiddenDiv = document.querySelector(".projects")
    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block"
    } else {
        hiddenDiv.style.display = "none"
    }
}