function indiceLetters(string) {

 var answer = {};
 string = string.split(" ").join("").toLowerCase();
  for(var char of string) {
    if (answer[char] === undefined) {
      answer[char] = [];
    }
    if (answer[char].length === 0) {

      answer[char].push(string.indexOf(char, 0));
    }

    else {
      var lastIndex = answer[char].length - 1;
      answer[char].push(string.indexOf(char, answer[char][lastIndex] + 1));
    }
  }

 console.log(answer);
}




indiceLetters("lighthouse in the house");
