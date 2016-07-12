var App = {

    // answers: [
    //     "\"10\"", -1, 1, 2, 6, "\"9px\"", "\"$45\"", 2, NaN, "\" -9\n5\"",
    //     -14, 2, 5, 5, 5, 1, "NaN", "false", "true"
    // ],
    answers: {
        1: ['10'],
        2: [-1],
        3: [1, '1'],
        4: [2],
        5: [6],
        6: ['"9px"', "'9px'"],
        7: ["\"$45\""],
        8: [2],
        9: [NaN],
        10: ["\" -9\n5\""],
        11: [-14],
        12: [2],
        13: [5],
        14: [5],
        15: [5],
        16: [1],
        17: ["NaN"],
        18: ["false"],
        19: ["true"]
    },
    rightAnswers: [],
    rightSpanTemplate: "<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>",
    wrongSpanTemplate: "<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>",
    testInputs: $('#test-questions').find('input'),

    init: function (){
      App.runTest();
    },

    runTest: function () {
        App.clearTest();

        App.testInputs.on('change', function () {
            App.clearInput(this);
            if (App.isRightAnswer($(this))) {
                App.applyRight($(this));
            } else {
                App.applyWrong($(this));
            }
            App.updateRightAnswerCounter();
        });
    },

    isRightAnswer: function (answer) {
        var answerNumber = answer.data('answer');
        var result = $.trim(answer.val());
        if (App.answers[answerNumber].indexOf(result) != -1) {
            App.rightAnswers[answerNumber] = true;
        }
        else {
            App.rightAnswers[answerNumber] = false;
        }
        return App.rightAnswers[answerNumber];
    },

    clearTest: function () {
        $('#clear-button').on('click', function(){
            var allInputs = $('#test-questions').find('input');
            allInputs.val(undefined);
            App.clearInputs(allInputs);
        });
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
            App.clearInput(element);
        });
    },

    applyRight: function (currentInput) {
        var $parent = currentInput.parent();

        currentInput.after(App.rightSpanTemplate);
        if ($parent.is('has-error')) {
            $parent.removeClass('has-error has-feedback');
        }
        if (!$parent.is('has-success')) {
            $parent.addClass("has-success has-feedback");
        }
    },

    applyWrong: function (currentInput) {
        var $parent = currentInput.parent();
        currentInput.after(App.wrongSpanTemplate);
        if ($parent.is('has-success')) {
            $parent.removeClass('has-success has-feedback');
        }
        if (!$parent.is('has-error')) {
            $parent.addClass("has-error has-feedback");
        }
    },

    updateRightAnswerCounter: function () {
        var rightAnswersCount = App.rightAnswers.filter(function (x) {
            return x == true
        }).length;
        $('#count').html(rightAnswersCount);
    }
};

App.init();