function colorManipulate()
{
  var paragraph = document.getElementById("paraColor");
  var redV = document.getElementById("redVal").value;
  var greenV = document.getElementById("greenVal").value;
  var blueV = document.getElementById("blueVal").value;
  paragraph.style.borderColor = "rgb(" + redV + ", " + greenV + ", " + blueV + ")";
  var bWidth = document.getElementById("widthVal").value;
  paragraph.style.borderWidth = bWidth + "px";
  var redBack = document.getElementById("backRed").value;
  var greenBack = document.getElementById("backGreen").value;
  var blueBack = document.getElementById("backBlue").value;
  paragraph.style.backgroundColor = "rgb(" + redBack + ", " + greenBack + ", " + blueBack + ")";

}
