function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            x = this.responseText.split("\n");
						randomx = x[Math.floor(Math.random() * x.length)];
						x = document.getElementById('splash');
						x.innerText = randomx;
       }
    };
    xhttp.open("GET", "https://web.zuma206.repl.co/js/cringe.txt", true);
    xhttp.send();
}

loadDoc();