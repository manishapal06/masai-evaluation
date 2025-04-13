function reverseWords(str){
    let words=str.trim().split(/\str+/);
    return words.reverse().join(" ");
}
let input="the sky is blue";
console.log(reverseWords(input));