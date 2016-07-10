function function1() {
    console.log('Уруру!');
}

var buttonConsole = $('#button-console');
buttonConsole.on('click', function1);

var buttonDelete = $('#button-delete');
buttonDelete.on ('click', function () {
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

answers = {
    1: "\"10\"", 2: -1, 3: 1, 4: 2, 5: 6, 6: "\"9px\"", 7: "\"$45\"", 8: 2, 9: NaN, 10: "\" -9\n5\"",
    11: -14, 12: 2, 13: 5, 14: 5, 15: 5, 16: 1, 17: "NaN", 18: "false", 19: "true"
};

function checkTest() {

    right = "glyphicon-ok";
    wrong = "glyphicon-remove";
    testInputs = $("#test-questions input");
    span = $('#' + $(this).data('question') + ' span');
    divForm = $('#' + $(this).data('question') + '');

    testInputs.on('change', function () {                  //Когда меняется конкретная форма:

        console.log($(this).val());
        console.log(answers[$(this).data('question')]);
        console.log((span).is('span'));


        span.remove();


        if ($(this).val() == answers[$(this).data('question')]) {        //Если введен правильный ответ:


            $(this).after("<span class=\"glyphicon " + right + " form-control-feedback\"></span>"); //Добавляем значок ok

            if (divForm.is('has-error') == true) {                       //Если у формы класс error, удаляем его
                $('#' + $(this).data('question') + '').removeClass('has-error has-feedback');
            }

            if (divForm.is('has-success') == false) {                    //Если у формы нет класса success, то добавляем его
                $('#' + $(this).data('question') + '').addClass("has-success has-feedback");
            }


        } else {                                                        //Если введен неправильный ответ:


            $(this).after("<span class=\"glyphicon " + wrong + " form-control-feedback\"></span>"); //Добавляем значок wrong

            if (divForm.is('has-success') == true) {                       //Если у формы класс success, удаляем его
                $('#' + $(this).data('question') + '').removeClass('has-success has-feedback');
            }

            if (divForm.is('has-error') == false) {                    //Если у формы нет класса error, то добавляем его
                $('#' + $(this).data('question') + '').addClass("has-error has-feedback");
            }
        }
    });
}

checkTest();
