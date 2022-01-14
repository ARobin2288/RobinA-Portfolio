var quoteArray = ["Frontend Developer | DIY Creator"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#typewriter").innerHTML = 
    quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

    if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);