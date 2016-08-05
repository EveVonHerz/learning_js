function resizeInput() {

    // Как узнать ширину родительского элемента?

    var $input = $(this);
    console.log($('div').find(".resizeInput"));
}

function evenNumbers() {

    // Сделать проверку на буквы

    var $inputLastNumber = $('#last-even');
    var $lastNumber = $('#last-even').val();

    var $inputResult = $('#even-numbers');

    $inputLastNumber.on('change', function() {even($lastNumber, $inputResult)});

    function even(lastNumber, inputResult) {
        var array = [];

        if (lastNumber < 2) {
            inputResult.val(lastNumber)
        } else {
            for (var number = 2; number <= lastNumber; number++) {
                if (number % 2 == 0) {
                    array.push(' ' + number)
                }
            }
            inputResult.val(array);
        }
    }

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function over100() {
    var answers = ['Не тупите', 'Да, ладно, хватит уже...', 'Ну, и долго я буду ждать?'];
    var number = prompt('Введите число больше 100', '');
    while ((number < 100) || (number == '') || (number == undefined)) {
        number = prompt(answers[randomNumber(0, 2)], '')
    }
}


evenNumbers();