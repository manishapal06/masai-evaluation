function reverseWords(s){
    let words=s.trim().split(/\s+/);
    return words.reverse().join(" ");
}
let input="the sky is blue";
console.log(reverseWords(input));
