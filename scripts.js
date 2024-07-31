(function() {

function _init() {
    _buildUi();
    _addEventListeners();
}

function _buildUi() {
    const empty = function(className) {
        const cell = document.createElement('td');
        cell.setAttribute('colspan', '2');
        cell.classList.add(className);
        return cell;
    };

    const table = document.querySelector('.table');

    const weaponNameHeaderRow = document.createElement('tr');
    weaponNameHeaderRow.classList.add('header');

    weaponNameHeaderRow.appendChild(empty('champion'));
    weaponNameHeaderRow.appendChild(empty('passive'));

    const weaponImageHeaderRow = document.createElement('tr');
    weaponImageHeaderRow.classList.add('header');

    const championHeaderCell = empty('champion');
    championHeaderCell.textContent = 'Champion';
    weaponImageHeaderRow.appendChild(championHeaderCell);

    const passiveHeaderCell = empty('passive');
    passiveHeaderCell.textContent = 'Passive';
    weaponImageHeaderRow.appendChild(passiveHeaderCell);

    for (const weapon of weapons) {
        const weaponNameCell = document.createElement('td');
        const weaponIconCell = document.createElement('td');

        weaponNameCell.classList.add('weapon', 'name', weapon.id, weapon.evolve);
        weaponIconCell.classList.add('weapon', 'icon', weapon.id, weapon.evolve);

        // for (const scale of weapon.scale) {
        //     weaponNameCell.classList.add('scale-' + scale);
        //     weaponIconCell.classList.add('scale-' + scale);
        // }

        if (weapon.signature) {
            weaponNameCell.classList.add('signature', weapon.signature);
            weaponIconCell.classList.add('signature', weapon.signature);
        }

        const weaponName = document.createElement('span');
        weaponName.textContent = weapon.baseName;
        weaponNameCell.appendChild(weaponName);
        weaponNameHeaderRow.appendChild(weaponNameCell);

        const weaponImage = document.createElement('img');
        weaponImage.src = 'assets/weapons/' + weapon.id + '.png';
        weaponImage.alt = weapon.baseName;
        weaponImage.title = weapon.baseName;
        weaponIconCell.appendChild(weaponImage);
        weaponImageHeaderRow.appendChild(weaponIconCell);
    }

    table.appendChild(weaponNameHeaderRow);
    table.appendChild(weaponImageHeaderRow);

    for (const passive of passives) {
        const passiveRow = document.createElement('tr');
        passiveRow.classList.add('passive', passive.id);

        const championNameCell = document.createElement('td');
        championNameCell.classList.add('champion', 'name');

        const championIconCell = document.createElement('td');
        championIconCell.classList.add('champion', 'icon');

        if (passive.championId) {
            passiveRow.setAttribute('data-champion', passive.championId);
            passiveRow.classList.add('champion', passive.championId);

            const champion = champions.find(c => c.id === passive.championId);
            championNameCell.textContent = champion.name;
            passiveRow.classList.add(champion.id);

            const championImage = document.createElement('img');
            championImage.src = 'assets/champions/' + champion.id + '.jpg';
            championImage.alt = champion.name;
            championImage.title = champion.name;
            championIconCell.appendChild(championImage);
        }
        passiveRow.appendChild(championNameCell);
        passiveRow.appendChild(championIconCell);

        const passiveIconCell = document.createElement('td');
        passiveIconCell.classList.add('passive', 'icon');
        const passiveImage = document.createElement('img');
        passiveImage.src = 'assets/passives/' + passive.id + '.png';
        passiveImage.alt = passive.name;
        passiveImage.title = passive.name;
        passiveIconCell.appendChild(passiveImage);
        passiveRow.appendChild(passiveIconCell);

        const passiveNameCell = document.createElement('td');
        passiveNameCell.classList.add('passive', 'name');
        passiveNameCell.textContent = passive.name;
        passiveRow.appendChild(passiveNameCell);
    
        for (const weapon of weapons) {
            const weaponCell = document.createElement('td');
            weaponCell.classList.add('weapon', weapon.id);
            if (weapon.signature !== false) {
                weaponCell.classList.add('signature', weapon.signature);
            }
            const evolve = weapon.evolve === passive.id;
            const scale = weapon.scale.includes(passive.id);
            if (evolve) {
                weaponCell.classList.add('evolve');
                const evolveImg = document.createElement('img');
                if (scale) {
                    evolveImg.src = 'assets/evolve/' + passive.id + '.png';
                } else {
                    evolveImg.src = 'assets/evolve-only/' + passive.id + '.png';
                }
                evolveImg.alt = passive.name;
                evolveImg.title = passive.name;
                weaponCell.appendChild(evolveImg);
            }
            if (scale) {
                weaponCell.classList.add('scale');
                if (!evolve) {
                    const scaleImg = document.createElement('img');
                    scaleImg.src = 'assets/scale/' + passive.id + '.png';
                    scaleImg.alt = passive.name;
                    scaleImg.title = passive.name;
                    weaponCell.appendChild(scaleImg);
                }
            }
            passiveRow.appendChild(weaponCell);
        }

        table.appendChild(passiveRow);
    }
}

function _addEventListeners() {
    const champions = document.querySelectorAll('.champion.name, .champion.icon');
    for (const champion of champions) {
        champion.addEventListener('click', toggleChampion);
    }
}

function toggleChampion(event) {
    document.querySelectorAll('.selected').forEach(e => {
        e.classList.remove('selected');
    });

    const tr = event.target.closest('tr');
    const championId = tr.getAttribute('data-champion');
    const table = document.querySelector('.table');
    if (table.getAttribute('data-champion') === championId) {
        table.removeAttribute('data-champion');
        console.log('remove');
    } else {
        table.setAttribute('data-champion', championId);
        tr.classList.add('selected');
    }
}

_init();

}).bind(null)();