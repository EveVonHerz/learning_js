function resizeInput() {

    // Как узнать ширину родительского элемента?

    var $input = $(this);
    console.log($('div').find(".resizeInput"));
}

function evenNumbers() {

    // Сделать проверку на буквы

    var $inputLastEvenNumber = $('#last-even');
    var $inputEvenNumbers = $('#even-numbers');


    $inputLastEvenNumber.on('change', arrayOfNumbersWithCondition($inputLastEvenNumber, $inputEvenNumbers, 'even'));

    //
    // $inputLastEvenNumber.on('change', function () {
    //     var evenNumbers = [];
    //     $inputEvenNumbers.val('');
    //
    //     var $lastEvenNumber = $(this).val();
    //     if ($lastEvenNumber < 2) {
    //         $inputEvenNumbers.val('Вы ввели число меньше 2')
    //     } else {
    //         for (var evenNumber = 2; evenNumber <= $lastEvenNumber; evenNumber++) {
    //             if (evenNumber % 2 == 0) {
    //                 evenNumbers.push(' ' + evenNumber)
    //             }
    //         }
    //         $inputEvenNumbers.val(evenNumbers);
    //     }
    // })



}

function arrayOfNumbersWithCondition(input, result, condition) {
    var array = [];
    input.val('');

    var lastNumber = $(input).val();
    if (lastNumber < 2) {
        result.val('Вы ввели число меньше 2')
    } else {

        if (condition == 'even') {
            for (var num = 2; num <= lastNumber; num++) {
                if (num % 2 == 0) {
                    array.push(' ' + num)
                }
            }
        }

        if (condition == 'simple') {
            for (var num = 2; num <= lastNumber-1; num++) {
                if (num % 2 != 0) {
                    array.push(' ' + num)
                }
            }
        }

        result.val(array);
    }
}

// function simpleNumbers() {
//
//     var $inputLastSimpleNumber = $('#last-simple');
//     var $inputSimpleEvenNumbers = $('#simple-numbers');
//
//     $inputLastSimpleNumber,on('change', function)
//
// }

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