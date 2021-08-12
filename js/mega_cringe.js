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
    xhttp.open("GET", "https://zuma206.github.io/js/cringe.txt", true);
    xhttp.send();
}

loadDoc();