function evenNumbers() {

    var $inputLastEvenNumber = $('#last-even');
    var $inputEvenNumbers = $('#even-numbers');


    $inputLastEvenNumber.on('change', function () {
        var evenNumbers = [];
        $inputEvenNumbers.val('');

        var $lastEvenNumber = $(this).val();
            if ($lastEvenNumber < 2) {
                $inputEvenNumbers.val('Вы ввели число меньше 2')
            } else {
                for (var evenNumber = 2; evenNumber <= $lastEvenNumber; evenNumber++) {
                    if (evenNumber % 2 == 0) {
                        evenNumbers.push(' ' + evenNumber)
                    }
                }
                $inputEvenNumbers.val(evenNumbers);
                console.log($inputEvenNumbers.val().length);
            }
    })

}

evenNumbers();

function resizeInput() {

}