module.exports = function check(str, bracketsConfig) {
var s = str;
var arr = bracketsConfig; 
var arr2 = []; 
var k = 0; 
var i = 0, j = 0, jBracket = null;
for (i = 0; i < s.length; i++) { 
  k = 0; jBracket = null;
check: for (j = 0; j < arr.length; j++) { 
          if (s[i] == arr[j][1] && s[i] == arr[j][0]) {
            if (arr2[arr2.length - 1] == s[i]) {
                if (arr2.length == 0) return false;
                arr2.pop(); k = 2; break check}
            else {
                arr2.push(s[i]); k = 2; break check;
            }
        }
            if (s[i] == arr[j][1]) {
                jBracket = j;
            }
            if (s[i] == arr[j][0]) { 
            arr2.push(s[i]); 
            k = 1; 
            }
    } 
    if (k == 0 && arr2.length == 0) return false;
    if (k == 0) { 
        if (arr2[arr2.length-1] == arr[jBracket][0]) {
            arr2.pop();
        } else return false;
    }
}
if (arr2.length == 0) return true; else return false;
}
