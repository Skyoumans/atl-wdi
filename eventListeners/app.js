window.onload = function() {
    var button = document.getElementById("buttonOne")
        button.addEventListener("click", function(){
            alert("I've been clicked");
        });

    var nextButton = document.getElementById("buttonTwo");
    var p = document.createElement("p");
    nextButton.addEventListener("click", function(){
        p.innerHTML = 'A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).'
        document.body.appendChild(p);
        })

    var lastButton = document.getElementById("buttonThree");
        lastButton.addEventListener("click", function(){
            document.body.removeChild(p);
        })
}

