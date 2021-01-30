//define text we want to use
const texts = ['websites', 'sweet cakes', 'brownies', 'and more'];
//look at each individual word
let count = 0;
//keep track of individual letters in words
let index = 0;
//currently selected text
let currentText = '';
//specifiy individual letter
let letter = '';

//typing effect function but we need to get self invoked directly - immeadiately - at the moment when it is read- iife
(function type(){
  //if our count === texts.length, so if it goes through all the words, reset it
  if(count === texts.length){
    count = 0;
  }
  //currrent text will be current word chosed by count
  currentText = texts[count];
  //everytime function runs it will add a letter, increment one character at the time
  letter = currentText.slice(0, ++index);

  //select our typing class and look at the text content
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    //everytime it ends, it goes to next word
    count++;
    //and reset index back to zero
    index = 0;
  }
  setTimeout(type, 400);
})();
