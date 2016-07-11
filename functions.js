function function1() {
    console.log('Уруру!');
}

var buttonConsole = $('#button-console');
buttonConsole.on('click', function1);

var buttonDelete = $('#button-delete');
buttonDelete.on('click', function () {
    // $ и jQuery это одно и тоже

    jQuery(this).hide();

    // var buttonClass = $(this).attr('class');
    // $(this).removeClass(buttonClass).addClass('btn btn-info');
});

// ДЗ! Написать скрипт который будет по нажатию на кнопку "скрыть", скрывать
// текстовый блок, при этом текст на кнопке после нажатия будет менять на "Показать",и при повторном нажатии,
// текст будет показывать и текст на кнопке будет меняться на "Скрыть".

var buttonHide = $('#button-hide');
var textBlock = $('#text-block');

function hideBtn() {

    if (textBlock.attr('style') == 'display: block;') {
        textBlock.hide('slow');  // Добавить красивую анимацию
        buttonHide.text('Показать');
    } else {
        textBlock.show('slow');
        buttonHide.text('Скрыть');
    }

}

buttonHide.on('click', hideBtn);

var testBtn = $('#test-button');
var test = $('#test');

function toggle() {
    test.slideToggle('normal');
}

testBtn.on('click', toggle);


/*
 $('body').append('<div>');
 $(".it1").after("<li class='item'>Тест</li>");

 Мои попытки сделать что-нибудь дельное)

 function createArrayOfAnswers() {
 var questions = [];
 // $("#test-questions").find("input").each(function(index,element){
 //     questions.push($(element).val());
 // });
 // console.log(questions);
 // console.log(questions.length);

 //     var i=0;
 //     while (i<=3) {
 //         if (questions[i] == answers[i+1]) {
 //             console.log('Верно');
 //             $("#test-questions").find("input").each(function(index,element){
 //                 $(element).attr("id", "inputSuccess2");
 //
 //             })
 //         } else {
 //
 //             console.log('Неверно');
 //         }
 //         i++;
 //     }
 }
 */


var answersArray = [
    "\"10\"", -1, 1, 2, 6, "\"9px\"", "\"$45\"", 2, NaN, "\" -9\n5\"",
    -14, 2, 5, 5, 5, 1, "NaN", "false", "true"
];




function checkTest() {


    var right = "<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>";
    var wrong = "<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>";
    var testInputs = $('#test-questions').find('input');
    var numberOfRightAnswers = 0;

    function isRight(element) {
        return element.val() == answersArray[element.data('question') - 1];
    }


    testInputs.on('change', function () {                                 //Когда меняется конкретная форма:

        var $input = $(this),
            $parent = $(this).parent();


        if ($input.siblings().is('span') == true) {
            $input.siblings().remove();
            $parent.removeClass('has-success has-error')}

        if (isRight($(this))) {                                          //Если введен правильный ответ:

            $input.after(right);

            if ($parent.is('has-error') == true) {                       //Если у формы класс error, удаляем его
                $parent.removeClass('has-error has-feedback');
            }

            if ($parent.is('has-success') == false) {                    //Если у формы нет класса success, то добавляем его
                $parent.addClass("has-success has-feedback");
                numberOfRightAnswers++;
            }

        } else {                                                        //Если введен неправильный ответ:

            $input.after(wrong); //Добавляем значок wrong

            if ($parent.is('has-success') == true) {                       //Если у формы класс success, удаляем его
                $parent.removeClass('has-success has-feedback');
            }

            if ($parent.is('has-error') == false) {                    //Если у формы нет класса error, то добавляем его
                $parent.addClass("has-error has-feedback");
                numberOfRightAnswers--;
            }
        }

        if (numberOfRightAnswers < 0) {numberOfRightAnswers = 0};
        $('#count').html(numberOfRightAnswers);
    });
}

function clearTestBtn() {
    $('#test-questions').find('input').empty();
}



checkTest();
