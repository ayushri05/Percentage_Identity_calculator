function google()
{
var strtype = document.getElementById('seqtype').value;
var strpart = document.getElementById('part').value;



var str="https://www.ncbi.nlm.nih.gov/" +strtype+ "/?term=" +strpart;
var replaced=str.replace(" ","+");
  window.open(str);
}

var process =document.getElementById('search');

process.onclick = google;

