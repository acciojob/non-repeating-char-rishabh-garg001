function firstNonRepeatedChar(str) {
 // Write your code here
	let temp = new Array(26).fill(0)
let flag =0 
for(let i=0;i<str.length;i++){
  temp[str.charCodeAt(i) - 97]++
}

for(let i=0;i<temp.length;i++){
  if(temp[i] == 1){
    return String.fromCharCode(i+97)
    flag = 1
  }

}
if(flag != 1){
  return "" 
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
