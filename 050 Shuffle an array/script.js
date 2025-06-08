//shuffle an array
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

// cards.sort(() => Math.random() - 0.5);
//the larger the array becomes, the method becomes inefficient
//So sort() shouldn.t be used

//Instead use the Fisher-Yates algorithm
shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i>0; i--){
        const ran = Math.floor(Math.random() * (i+1));
        //it will generate a random index or position
        //destructuring for swapping the elements
        [array[i],array[ran]] = [array[ran],array[i]];
    }
}