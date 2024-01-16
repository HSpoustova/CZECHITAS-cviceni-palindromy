console.log('Funguju!');

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

/*function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");

*/
const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

const polozky = document.querySelectorAll('li');
polozky.forEach((prvek) => {
  const upraveneSlovo = prvek.textContent.toLowerCase().replaceAll(' ', '');
  if (upraveneSlovo === textPozpatku(upraveneSlovo)) {
    prvek.classList.add('palindrom');
  }
});
