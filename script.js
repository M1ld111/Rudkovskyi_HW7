const age = +prompt('Enter Your age');
const city = prompt('What city do You live in?');
const sport = prompt('What is Your favourite sport?');
let resultAge;
let resultCity;
let resultSport;
    if (Boolean(age) == false) {
        resultAge = 'Шкода, що ви не ввели свій вік :(. '
    }
    else {
        resultAge = `Ваш вік ${age}! `
    };

    if (Boolean(city) == false) {
        resultCity = 'Шкода, що ви не вказали, в якому місті живете :(. '
    } else if (city == 'Київ') {
        resultCity = 'Ви живете у столиці України - Києві! '
    } else if (city == 'Лондон') {
        resultCity = 'Ви живете у столиці Сполученого королівства Великої Британії і Північної Ірландії - Лондоні! '
    } else if (city == 'Вашингтон') {
        resultCity = 'Ви живете у столиці Сполучених Штатів Америки - Вашингтоні! '
    } else {
        resultCity = `Ви живете у місті ${city}! `
    }

    if (Boolean(sport) == false) {
        resultSport = 'Прикро, що ви не займаєтесь спортом, або забули вказати його :(.'
    } else if (sport == 'Керлінг') {
        resultSport = 'Круто, ви займаєтесь найцікавішим у світі спортом - Керлінгом!'
    } else if (sport == 'Літрбол') {
        resultSport = 'Круто, ви займаєтесь одним з найважчих видів спорту - Літрболом! Так тримати!'
    } else if (sport == 'Сон') {
        resultSport = 'Ого, мало людей, які стають професіоналами зі Сну, це круто!'
    } else {
        resultSport = `Круто, ви займаєтесь спортом "${sport}"! `
    }

alert(resultAge + resultCity + resultSport);