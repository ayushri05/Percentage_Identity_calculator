function get_struct()
{

var struct = document.getElementById('struct').value;



var str1 = "https://www.ncbi.nlm.nih.gov/structure/?term=" +struct;
var replaced = str1.replace(" ","+");
  window.open(str1);

}
	

// your code goes herealert(AlignmentA+"  "+AlignmentB);


var process = document.getElementById('structure');

process.onclick = get_struct;

