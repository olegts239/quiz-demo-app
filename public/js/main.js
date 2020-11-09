var addr = "ws://localhost:3000"
var socket = new WebSocket(addr)
socket.onopen = function() {
    console.log('Connection established')

    socket.send(JSON.stringify({'method': 'getActiveSlide'}))

    var previousButton = document.getElementById('previous-button')
    if(previousButton) {
        previousButton.onclick = () => {
            socket.send(JSON.stringify({'method': 'previousSlide'}))
        }
    }

    var nextButton = document.getElementById('next-button')
    if(nextButton) {
        nextButton.onclick = () => {
            socket.send(JSON.stringify({'method': 'nextSlide'}))
        }
    }
}

socket.onclose = function(event) {
if (event.wasClean) {
    console.log('Connection closed')
} else {
    console.log('Connection problem')
}
console.log('Code: ' + event.code + ' reason: ' + event.reason)
}

socket.onmessage = function(event) {
    var activeSlide = JSON.parse(event.data)
    document.getElementById("card-title").innerHTML = activeSlide.title
    document.getElementById("card-question").innerHTML = activeSlide.question
    document.getElementById("card-answer").innerHTML = activeSlide.answers
    document.getElementById("card-img").src= activeSlide.img;
}

socket.onerror = function(error) {
    console.log("Error: " + error.message)
}
