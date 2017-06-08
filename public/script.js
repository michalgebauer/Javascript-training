window.addEventListener("load", function() {
    console.log("Started");

    document.querySelector("#add").addEventListener("click", function(e) {
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    console.log(httpRequest.responseText);
                }
            }
        }
        var text = document.querySelector("#text").value;

        httpRequest.open("POST", "add");
        // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(JSON.stringify({ text: text }));

        e.preventDefault();
    });

});