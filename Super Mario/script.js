// Model
const characters = {
    mario: { name: 'Mario', hp: 200 },
    luigi: { name: 'Luigi', hp: 140 },
    peach: { name: 'Peach', hp: 100 },
    yoshi: { name: 'Yoshi', hp: 80 },
    bowser: { name: 'Bowser', hp: 300 }
};


function attack(attackerName) {
    const attacker = characters[attackerName];
    let opponent;

    if (attackerName !== 'bowser') {
        opponent = characters.bowser;
    } else {
        const randomIndex = Math.floor(Math.random() * Object.keys(characters).length);
        const opponentName = Object.keys(characters)[randomIndex];
        opponent = characters[opponentName];
    }

    const damage = Math.floor(Math.random() * 20) + 1;
    opponent.hp -= damage;

    if (opponent.hp <= 0) {
        document.getElementById('resultMessage').innerText = `${opponent.name} er beseiret!`;
    } else {
        document.getElementById('resultMessage').innerText = `${attacker.name} angrep! ${opponent.name} har ${opponent.hp} HP igjen.`;
    }
}


function selectCharacter(characterName) {
    const character = characters[characterName];
    const battleArea = document.getElementById('battleArea');
    const bowser = characters.bowser;

    battleArea.innerHTML = `
        <div class="battle">
            <div class="character">
                <h2>${character.name}</h2>
                <img src="images/${characterName}.png" alt="${character.name}">
                <p>HP: ${character.hp}</p>
                <button onclick="attack('${characterName}')">Attack</button>
            </div>
            <div class="bowser">
                <h2>${bowser.name}</h2>
                <img src="images/bowser.png" alt="${bowser.name}">
                <p>HP: ${bowser.hp}</p>
            </div>
        </div>
    `;

    setTimeout(function() {
        attack('bowser');
    }, 1500);
}









