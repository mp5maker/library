function setup() {
    createCanvas(500, 500);
    textSize(20);
    noStroke();

    push()
    var words = RiTa.tokenize("I scream, you scream we all screen for Ice Cream")
    translate(width / 2, height / 2)
    for (let i = 0; i < words.length; i++) {
        text(words[i], 10, i * 20)
    }
    pop()

    push()
    var phonemesWords = RiTa.getPhonemes("Boom Shakalaka")
    text(phonemesWords, 25, 25, 300, 100)
    pop()

    push()
    var stressesWords = RiTa.getStresses("What the hell!!")
    text(stressesWords, 100, 100, 300, 100)
    pop()

    push()
    let sentence = "My love for my macaroni. Oh They Lord!!"
    var posTagWords = RiTa.getStresses(sentence)
    let posTag = RiTa.getPosTags(posTagWords)
    for (let i = 0; i < posTagWords.length; i++) {
        text(posTag[i], i * 20, 300, 200, 200)
    }
    text(RiTa.getWordCount(sentence), 0, 400, 200, 200)
    pop()

    push()
    let lexicon = new RiLexicon();
    text(lexicon.randomWord('jj'), width / 2, height / 4)
    pop()
}

function draw() {
    /* Clear Rect */
    // background(255);
}