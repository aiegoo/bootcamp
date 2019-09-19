function popUp() {
	window.open("tonyresume.html", "popup", "width=500px, height=500px, scrollbars=no, menubar=no, toolbar=no, location=no, resizable=no, status=no, top=200px, left=800px");
}
function modalOpen() {
	$("#modal-bg").show(0);
	$("#modal-wrap").css("display", "table-cell");
}
function modalClose() {
	$("#modal-bg").hide();
	$("#modal-wrap").css("display", "none");
}