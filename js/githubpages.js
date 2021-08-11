isMobile = false;
if (/Mobi/.test(navigator.userAgent)) {
	isMobile = true;
}
path = window.location.href.replace(/https:/i, "").replace(/zuma206.github.io/, '').replace('/', '').replace('/', '');
newPath = "https://web.zuma206.repl.co" + path;
if (isMobile) {
	window.location.href = newPath;
}else {
	document.getElementById('repliframe').src = newPath;	
}
function developer_mode() {
	path = window.location.href.replace(/https:/i, "").replace(/zuma206.github.io/, '').replace('/', '').replace('/', '');
	newPath = "https://web.zuma206.repl.co" + path;
	window.location.href = newPath;
}