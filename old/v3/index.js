function switchImg() {
    var main = document.querySelector(".perry")
    var levi = document.querySelector(".levi")
    if (levi.style.display === "none") {
        levi.style.display = "block"
        main.style.display = "none"
    } else {
        levi.style.display = "none"
        main.style.display = "block"
    }
}
function switchToHome() {
    var mainDiv = document.querySelector(".main")
    mainDiv.style.backgroundColor = "black"
    var textDiv = document.querySelector(".text")
    var projectDiv = document.querySelector(".projects")
    var otherDiv = document.querySelector(".other")
    if (textDiv.style.display === "none") {
        textDiv.style.display = "block"
        projectDiv.style.display = "none"
        otherDiv.style.display = "none"
        
    }
}

function switchToProjects() {
    var mainDiv = document.querySelector(".main")
    var textDiv = document.querySelector(".text")
    var projectDiv = document.querySelector(".projects")
    var otherDiv = document.querySelector(".other")
    if (projectDiv.style.display === "none") {
        mainDiv.style.backgroundColor = "transparent"
        textDiv.style.display = "none"
        projectDiv.style.display = "block"
        otherDiv.style.display = "none"
        
    }
}


function switchToOther() {
    var mainDiv = document.querySelector(".main")
    mainDiv.style.backgroundColor = "black"
    var textDiv = document.querySelector(".text")
    var projectDiv = document.querySelector(".projects")
    var otherDiv = document.querySelector(".other")
    if (otherDiv.style.display === "none") {
        textDiv.style.display = "none"
        projectDiv.style.display = "none"
        otherDiv.style.display = "block"
        
    }
}



particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":203,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;