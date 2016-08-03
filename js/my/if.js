function detectBrowser() {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
    {
        alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        alert('Chrome'); //+ navigator.appVersion
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        alert('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
    {
        alert('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        alert('IE');
    }
    else
    {
        alert('unknown');
    }
}

function login() {
    var user = prompt('Ваше имя?','');
    if (user == ''){alert('Вы не ввели имя!');}
    else if (user.toLowerCase() == 'вова'||user.toLowerCase() == 'gururuby'||user.toLowerCase() == 'владимир')
    {alert('Привет, Котя!');}
    else {alert('Добро пожаловать, ' + user + '!');}
}

function age() {
    var age = prompt('Введите ваш возраст');
    if ((age >= 18) && (age <= 100)) {alert('Вы способны быть в ответе за свои поступки')}
    else if (age < 18) {alert('Ути-пути, кто здесь у нас такой!')}
    else {alert('Не верю')};
}

