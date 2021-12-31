/*
to decode Api i will do that =>
1. convert to array at each space by using split
2. iterat and convert every element from binary to dicimal 
3. convert dicial number to text 
4. reverse the array thin convert it again to string
*/
const axios = require("axios")

function binaryToText(str) {
  return str
    .split(" ")
    .map((code) => String.fromCharCode(parseInt(code, 2)))
    .reverse()
    .join("");
}

function test (){
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((res)=>{
        console.log(res.data[30].currencies)
        console.log(res.data[30].region)
        console.log(res.data[30].languages)
    })
    
}
test()
