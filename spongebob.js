function spongeMeme(sentence) {
    let meme = '';
    for (let i = 0; i < sentence.length; i++) {
      if (i % 2 == 0) {
        meme += sentence[i].toUpperCase();
      } else {
        meme += sentence[i].toLowerCase();
      }
    }
    return meme;
}
