function checkAnswers() {
    var answers = document.querySelectorAll('.word');
    var correctTranslations = document.querySelectorAll('.translation');

    var correctCount = 0;
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        var translationId = 'translation' + (i + 1);
        var translation = document.getElementById(translationId);

        if (answer.innerText.toLowerCase() === translation.innerText.toLowerCase()) {
            answer.style.backgroundColor = 'lightgreen';
            correctCount++;
        } else {
            answer.style.backgroundColor = 'pink';
        }
    }

    var resultElement = document.getElementById('result');
    if (correctCount === answers.length) {
        resultElement.innerText = 'Congratulations! All answers are correct.';
    } else {
        resultElement.innerText = 'You have ' + correctCount + ' out of ' + answers.length + ' correct answers. Keep practicing!';
    }
}