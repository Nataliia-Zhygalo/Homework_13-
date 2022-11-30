
/*Рисуем колоду карт, которая состоит из:
карт номиналом 2-10 всех мастей
карт jack, queen, king всех мастей
карт тузов всех мастей

В макете используется:
Шрифт https://fonts.google.com/specimen/Nerko+One
Зеленый цвет доски #55aa55
Черный цвет текста #353c4d
Иконки 4-x мастей и jack, queen, king в архиве images.zip

Все теги рендерим с помощью js.
Внешний вид задания НЕ важен, важен только JS-код))*/


cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
cardPersons = ['J', 'Q', 'K'];
imgPersons = ['jack', 'queen', 'king'];
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
deck = [];

for(i = 0; i < cardNumbers.length; i++) {
    for(j = 0; j < suits.length; j++) {
        deck.push(`
            <div class="card">
            <div class="card__info">
            ${cardNumbers[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
            </div>
            <div class="card__info">
            ${cardNumbers[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
            </div>
            </div>
            `);
    }
}
for(i = 0; i < cardPersons.length; i++) {
    for(j = 0; j < suits.length; j++) {
        deck.push(`
            <div class="card card--person">
            <div class="card__info">
            ${cardPersons[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
            </div>
            <img class="person" src="images/${imgPersons[i]}.svg" alt="${suits[j]}">
            <div class="card__info">
            ${cardPersons[i]}
            <img src="images/${suits[j]}.svg" alt="${suits[j]}">
            </div>
            </div>
            `);
    }
}

for(i = 0; i < suits.length; i++) {
        deck.push(`
            <div class="card card--person">
            <div class="card__info">
            T
            <img src="images/${suits[i]}.svg" alt="${suits[i]}">
            </div>
            <img class="person" src="images/${suits[i]}.svg" alt="${suits[i]}">
            <div class="card__info">
            T
            <img src="images/${suits[i]}.svg" alt="${suits[i]}">
            </div>
            </div>
            `);
    }
    document.write(`
        <div class="wrapper">
        ${deck.join('')}
        </div>
        `);

