const UP   = 1;
const LEFT = 2;
const UL   = 4;

function nw(s1, s2, op) {
  op = op || {};
  const G = op.G || 2;
  const P = op.P || 1;
  const M = op.M || -1;
  var mat   = {};
  var direc = {};
// initialization
  for(var i=0; i<s1.length+1; i++) {
    mat[i] = {0:0};
    direc[i] = {0:[]};
    for(var j=1; j<s2.length+1; j++) {
      mat[i][j] = (i == 0) 
        ? 0
        : (s1.charAt(i-1) == s2.charAt(j-1)) ? P : M
      direc[i][j] = [];
    }
  }

// calculate each value
  for(var i=0; i<s1.length+1; i++) {
    for(var j=0; j<s2.length+1; j++) {
      var newval = (i == 0 || j == 0)
          ? -G * (i + j)
          : Math.max(mat[i-1][j] - G, mat[i-1][j-1] + mat[i][j], mat[i][j-1] -G);

      if (i > 0 && j > 0) {
        if( newval == mat[i-1][j] - G) direc[i][j].push(UP);
        if( newval == mat[i][j-1] - G) direc[i][j].push(LEFT);
        if( newval == mat[i-1][j-1] + mat[i][j]) direc[i][j].push(UL);
      }
      else {
        direc[i][j].push((j == 0) ? UP : LEFT);
      }
      mat[i][j] = newval;
    }
  }

  // get result
  var chars = [[],[]];
  var I = s1.length;
  var J = s2.length;
  const max = Math.max(I, J);
  while(I > 0 || J > 0) {
    switch (direc[I][J][0]) {
      case UP:
        I--;
        chars[0].push(s1.charAt(I));
        chars[1].push('-');
        break;
      case LEFT:
        J--;
        chars[0].push('-');
        chars[1].push(s2.charAt(J));
        break;
      case UL:
        I--;
        J--;
        chars[0].push(s1.charAt(I));
        chars[1].push(s2.charAt(J));
        break;
       default: break;
    }
  }
  return chars.map(function(v) {
    return v.reverse().join('');
  });
}
function main() {
  var w1 = (document.getElementById('txt1').value);
  var w2 = (document.getElementById('txt2').value);
  var r = nw(w1,w2);
  var l=r[0].length;
  var l1=w1.length;		
  var l2=w2.length;	
		var match=0;
		var mismatch=0;
		for (var i = 0; i < l; i++) {
			if (r[0].charAt(i)== r[1].charAt(i)) {
				match++;
			}
			else
				mismatch++;
		}
 var perc_id = (match*100)/(l);
 alert("Query Sequence 1:\n"+w1+"\nQuery Sequence 2:\n"
 +w2+"\n\nSequence Alignment:\n"+r[0]+"\n"+r[1]+"\n\nPercent Identity\n"+perc_id);
}
var process =document.getElementById('calculate');

process.onclick = main;

/*module.exports = nw;
if (process.argv[1] == __filename) {
  main();
}*/





	/* var str1;
	 var str2;
	 var match =0;
	 var mismatch =0;
	 
     str1= (document.getElementById('txt1').value);
	 str2= (document.getElementById('txt2').value);
	 var l1=str1.length;
	 var l2=str2.length;
	 
	if(l1<=l2)
	{
		mismatch+=(l2-l1);
		for (var i = 0; i < l1; i++) {
			if (str1.charAt(i)== str2.charAt(i)) {
				match++;
			}
			else
				mismatch++;
		}
	}
    else
	{
     mismatch+=(l1-l2);
	 for (var i = 0; i < l2; i++) {
			if (str1.charAt(i)== str2.charAt(i)) {
				match++;
			}
			else
				mismatch++;
		}

	}
		
 var perc_id = (match*100)/(l1 + l2);
 
 alert(perc_id);*/



