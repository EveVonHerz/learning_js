var jsSkillsTesting = {

    answers: [
        "\"10\"", -1, 1, 2, 6, "\"9px\"", "\"$45\"", 2, NaN, "\" -9\n5\"",
        -14, 2, 5, 5, 5, 1, "NaN", "false", "true"
    ],
    rightAnswers: [],
    rightSpanTemplate: "<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>",
    wrongSpanTemplate: "<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>",
    testInputs: $('#test-questions').find('input'),

    run: function () {
        $('#clear-button').on('click', jsSkillsTesting.clearTest);

        jsSkillsTesting.testInputs.on('change', function () {                                 //Когда меняется конкретная форма:
            var $input = $(this),
                $parent = $(this).parent();

            jsSkillsTesting.clearInput(this);

            if (jsSkillsTesting.isRightAnswer($(this))) {                                          //Если введен правильный ответ:

                $input.after(jsSkillsTesting.rightSpanTemplate);

                if ($parent.is('has-error') == true) {                       //Если у формы класс error, удаляем его
                    $parent.removeClass('has-error has-feedback');
                }

                if ($parent.is('has-success') == false) {                    //Если у формы нет класса success, то добавляем его
                    $parent.addClass("has-success has-feedback");
                }

            } else {                                                        //Если введен неправильный ответ:

                $input.after(jsSkillsTesting.wrongSpanTemplate);                                         //Добавляем значок wrong

                if ($parent.is('has-success') == true) {                       //Если у формы класс success, удаляем его
                    $parent.removeClass('has-success has-feedback');
                }

                if ($parent.is('has-error') == false) {                    //Если у формы нет класса error, то добавляем его
                    $parent.addClass("has-error has-feedback");
                }
            }
            var rightAnswersCount = jsSkillsTesting.rightAnswers.filter(function (x) {
                return x == true
            }).length;

            $('#count').html(rightAnswersCount);

        });
    },
    isRightAnswer: function (answer) {
        var answerNumber = answer.data('answer') - 1;
        var result = answer.val();
        if (result == jsSkillsTesting.answers[answerNumber]) {
            jsSkillsTesting.rightAnswers[answerNumber] = true;
        }
        else {
            jsSkillsTesting.rightAnswers[answerNumber] = false;
        }
        return jsSkillsTesting.rightAnswers[answerNumber];
    },


    clearTest: function () {
        var allInputs = $('#test-questions').find('input');
        allInputs.val(undefined);
        jsSkillsTesting.clearInputs(allInputs);
    },

    clearInput: function (input) {
        var $input = $(input);
        if ($input.siblings().is('span') == true) {
            $input.siblings().remove();
            $input.parent().removeClass('has-success has-error');
        }
    },

    clearInputs: function (inputs) {
        inputs.each(function (index, element) {
            $(element).trigger('change');
            jsSkillsTesting.clearInput(element);
        });
    }

};

jsSkillsTesting.run();