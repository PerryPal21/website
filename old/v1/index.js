function switchdisplay() {
    var visDiv = document.querySelector(".visible")
    var hiddenDiv = document.querySelector(".hidden")
    if (visDiv.style.display === "block" && hiddenDiv.style.display === "none") {
        visDiv.style.display = "none"
        hiddenDiv.style.display = "block"
    } else {
        visDiv.style.display = "block"
        hiddenDiv.style.display = "none"
    }
}