var mainText = document.getElementById("main-text");
var wordsMain = ['Noel-Dev', 'Game-Developer', 'Web-Developer', 'Programmer']
var aboutText = document.getElementById("hire-text");
var wordsAbout = ['Contact', 'Hire']
var typeDelay = 150;
var textDisplayTime = 500;
var notextDisplayTime = 100;


function drawWord(wordToDraw, textBoxToDrawIn, wordList, wordNum)
{
    wordNum += 1;
    console.log(wordNum)
    if(wordNum >= wordList.length)
    {
        wordNum = 0;
    }
    var splitedWords = wordToDraw.split('');
    textBoxToDrawIn.innerText = "";
    setTimeout(() => removeWord(wordToDraw,textBoxToDrawIn, wordList, wordNum), (typeDelay * splitedWords.length) + textDisplayTime)
    for (let index = 0; index < splitedWords.length; index++) {
        setTimeout(() => drawLetter(splitedWords[index], textBoxToDrawIn), typeDelay * index);
    }
}
function removeWord(wordToRemove, textBoxToDrawIn, wordList, wordNum)
{
    console.log(wordNum)
    if(wordNum >= wordList.length)
    {
        wordNum = 0;
    }
    var wordLenght = wordToRemove.length;
    textBoxToDrawIn.innerText = "";
    var splittedWord = wordToRemove.split('')
    setTimeout(() => drawWord(wordList[wordNum], textBoxToDrawIn, wordList, wordNum), (typeDelay * wordLenght) + notextDisplayTime)
    for (let index = 0; index < wordLenght; index++) {
        setTimeout(() => {
            splittedWord.pop();
            removeLetter(splittedWord, textBoxToDrawIn)
        }, typeDelay * index);
    }
}

function drawLetter(letterToDraw, textBox)
{
    textBox.innerText += letterToDraw;
}
function removeLetter(currentWord ,textBox)
{
    textBox.innerText = "";
    for (let index = 0; index < currentWord.length; index++) {
        textBox.innerText +=  currentWord[index];
    }
}

drawWord(wordsMain[0], mainText, wordsMain, 0);
drawWord(wordsAbout[0], aboutText, wordsAbout, 0);
