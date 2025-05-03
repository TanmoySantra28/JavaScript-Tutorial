const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(words);
console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;
}