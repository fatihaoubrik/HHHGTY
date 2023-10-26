function calcul(){
var d=+document.getElementById("D").value;
var s=+document.getElementById("S").value;
var h=+document.getElementById("H").value;
var q=Math.sqrt(2*s*d/h);
document.getElementById("Q").value=q;
var n=d/q;
document.getElementById("N").value=n;
}