const alphabetSort = (alphabet) => {
  let end = false;

  while (!end) {
    end = true;
    for (let i = 1; i < alphabet.length; i++) {
      if (alphabet[i - 1] > alphabet[i]) {
        end = false;
        let tmp = alphabet[i - 1];
        alphabet[i - 1] = alphabet[i];
        alphabet[i] = tmp;
      }
    }
  }
  return alphabet;
};

console.log(alphabetSort(['z','d','a','b']));