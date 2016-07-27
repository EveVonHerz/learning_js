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