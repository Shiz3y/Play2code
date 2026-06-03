const levelsData = {
    python: [
        {
            id: 1,
            title: "Python: Основы",
            description: "Изучи базовые команды Python",
            qna: [
                { q: "Вывод текста на экран?", a: "print" },
                { q: "Условие ЕСЛИ?", a: "if" },
                { q: "Условие ИНАЧЕ?", a: "else" },
                { q: "Цикл ДЛЯ?", a: "for" },
                { q: "Объявление функции?", a: "def" },
                { q: "Возврат из функции?", a: "return" },
                { q: "Тип данных список?", a: "list" },
                { q: "Тип данных строка?", a: "str" },
                { q: "Тип данных число?", a: "int" },
                { q: "Логический тип?", a: "bool" }
            ]
        },
        {
            id: 2,
            title: "Python: Продвинутый",
            description: "Более сложные концепции",
            qna: [
                { q: "Импорт модуля?", a: "import" },
                { q: "Прервать цикл?", a: "break" },
                { q: "Пропустить итерацию?", a: "continue" },
                { q: "Цикл ПОКА?", a: "while" },
                { q: "Пустое значение?", a: "none" },
                { q: "Исключение try?", a: "try" },
                { q: "Обработка ошибок?", a: "except" },
                { q: "Словарь данных?", a: "dict" },
                { q: "Кортеж данных?", a: "tuple" },
                { q: "Множество?", a: "set" }
            ]
        }
    ],
    html: [
        {
            id: 1,
            title: "HTML: Базовые теги",
            description: "Изучи основные теги HTML",
            qna: [
                { q: "Заголовок H1?", a: "h1" },
                { q: "Тег абзаца?", a: "p" },
                { q: "Тег ссылки?", a: "a" },
                { q: "Тег картинки?", a: "img" },
                { q: "Тег контейнера?", a: "div" },
                { q: "Тег списка UL?", a: "ul" },
                { q: "Тег списка OL?", a: "ol" },
                { q: "Элемент списка?", a: "li" },
                { q: "Перенос строки?", a: "br" },
                { q: "Горизонтальная линия?", a: "hr" }
            ]
        },
        {
            id: 2,
            title: "HTML: Формы и атрибуты",
            description: "Работа с формами",
            qna: [
                { q: "Тег формы?", a: "form" },
                { q: "Поле ввода?", a: "input" },
                { q: "Кнопка отправки?", a: "button" },
                { q: "Атрибут ссылки?", a: "href" },
                { q: "Атрибут картинки?", a: "src" },
                { q: "Атрибут класса?", a: "class" },
                { q: "Атрибут идентификатора?", a: "id" },
                { q: "Текстовое поле?", a: "textarea" },
                { q: "Выпадающий список?", a: "select" },
                { q: "Опция списка?", a: "option" }
            ]
        }
    ],
    java: [
        {
            id: 1,
            title: "Java: Синтаксис",
            description: "Основы языка Java",
            qna: [
                { q: "Ключевое слово класса?", a: "class" },
                { q: "Главный метод?", a: "main" },
                { q: "Публичный доступ?", a: "public" },
                { q: "Статический метод?", a: "static" },
                { q: "Нет возврата?", a: "void" },
                { q: "Вывод на консоль?", a: "println" },
                { q: "Системный класс?", a: "system" },
                { q: "Целое число?", a: "int" },
                { q: "Дробное число?", a: "double" },
                { q: "Символ?", a: "char" }
            ]
        },
        {
            id: 2,
            title: "Java: ООП",
            description: "Объектно-ориентированное программирование",
            qna: [
                { q: "Создать объект?", a: "new" },
                { q: "Логический тип?", a: "boolean" },
                { q: "Текстовый тип?", a: "string" },
                { q: "Частный доступ?", a: "private" },
                { q: "Защищенный доступ?", a: "protected" },
                { q: "Наследование?", a: "extends" },
                { q: "Интерфейс?", a: "interface" },
                { q: "Реализация?", a: "implements" },
                { q: "Этот объект?", a: "this" },
                { q: "Родительский класс?", a: "super" }
            ]
        }
    ]
};

let gameState = {
    active: false,
    score: 0,
    hp: 100,
    maxHp: 100,
    level: null,
    lang: null,
    levelIndex: 0,
    enemies: [],
    spawnRate: 2500,
    lastSpawn: 0,
    combo: 0,
    maxCombo: 0
};

const dom = {
    menu: document.getElementById('main-menu'),
    stage: document.getElementById('game-stage'),
    input: document.getElementById('code-input'),
    score: document.getElementById('score-display'),
    hpFill: document.getElementById('hp-fill'),
    base: document.getElementById('player-base'),
    combo: document.getElementById('combo-display')
};

function startGame(lang, levelIndex) {
    const levels = levelsData[lang];
    if (!levels || !levels[levelIndex]) {
        alert("Уровень ещё не доступен!");
        return;
    }

    gameState.active = true;
    gameState.score = 0;
    gameState.hp = 100;
    gameState.level = levels[levelIndex];
    gameState.lang = lang;
    gameState.levelIndex = levelIndex;
    gameState.enemies = [];
    gameState.spawnRate = 2500;
    gameState.lastSpawn = 0;
    gameState.combo = 0;
    gameState.maxCombo = 0;

    if (dom.menu) dom.menu.style.display = 'none';
    if (dom.stage) dom.stage.style.display = 'block';
    if (dom.input) {
        dom.input.value = '';
        dom.input.focus();
    }

    updateHUD();
    requestAnimationFrame(gameLoop);
}

function exitGame() {
    gameState.active = false;
    if (dom.stage) dom.stage.style.display = 'none';
    if (dom.menu) dom.menu.style.display = 'block';
    document.querySelectorAll('.enemy-drop').forEach(el => el.remove());
    location.reload();
}

function gameLoop(timestamp) {
    if (!gameState.active) return;

    if (!gameState.lastSpawn) gameState.lastSpawn = timestamp;
    
    if (timestamp - gameState.lastSpawn > gameState.spawnRate) {
        spawnEnemy();
        gameState.lastSpawn = timestamp;
        if (gameState.spawnRate > 1000) {
            gameState.spawnRate -= 30;
        }
    }

    const stageHeight = window.innerHeight;
    const inputVal = dom.input ? dom.input.value.trim().toLowerCase() : '';

    gameState.enemies.forEach((enemy, index) => {
        enemy.y += enemy.speed;
        enemy.element.style.top = enemy.y + 'px';

        if (enemy.answer.startsWith(inputVal) && inputVal.length > 0) {
            enemy.element.classList.add('matched');
        } else {
            enemy.element.classList.remove('matched');
        }

        if (enemy.y > stageHeight - 200) {
            takeDamage(20);
            destroyEnemy(index, false);
        }
    });

    requestAnimationFrame(gameLoop);
}

function spawnEnemy() {
    if (!gameState.level || !gameState.level.qna) return;

    const qna = gameState.level.qna[Math.floor(Math.random() * gameState.level.qna.length)];
    
    const el = document.createElement('div');
    el.classList.add('enemy-drop');
    el.innerHTML = `<div class="question">${qna.q}</div>`;
    
    const leftPos = Math.floor(Math.random() * 60) + 15;
    el.style.left = leftPos + '%';
    el.style.top = '-100px';
    
    document.body.appendChild(el);
    
    gameState.enemies.push({
        element: el,
        answer: qna.a.toLowerCase(),
        question: qna.q,
        y: -100,
        speed: 0.8 + (gameState.score / 300)
    });
}

if (dom.input) {
    dom.input.addEventListener('input', (e) => {
        const val = e.target.value.trim().toLowerCase();
        
        const matchIndex = gameState.enemies.findIndex(en => en.answer === val);

        if (matchIndex !== -1) {
            destroyEnemy(matchIndex, true);
            e.target.value = '';
            
            gameState.combo++;
            if (gameState.combo > gameState.maxCombo) {
                gameState.maxCombo = gameState.combo;
            }
            
            const points = 10 + (gameState.combo * 2);
            gameState.score += points;
            
            createParticles(window.innerWidth / 2, window.innerHeight - 200);
            
            if (gameState.score >= 100) {
                winGame();
            }
            
            updateHUD();
        }
    });

    dom.input.addEventListener('blur', () => {
        if (gameState.active) {
            setTimeout(() => dom.input.focus(), 10);
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameState.active) {
        exitGame();
    }
});

function destroyEnemy(index, isSolved) {
    const enemy = gameState.enemies[index];
    if (!enemy || !enemy.element) return;

    if (isSolved) {
        enemy.element.classList.add('matched');
        enemy.element.classList.add('explode');
        createParticles(
            parseFloat(enemy.element.style.left) * window.innerWidth / 100,
            enemy.y
        );
    } else {
        enemy.element.classList.add('hit');
        gameState.combo = 0;
    }

    setTimeout(() => {
        if (enemy.element && enemy.element.parentNode) {
            enemy.element.remove();
        }
    }, 300);

    gameState.enemies.splice(index, 1);
    updateHUD();
}

function takeDamage(amount) {
    gameState.hp -= amount;
    gameState.combo = 0;
    
    if (dom.stage) {
        dom.stage.classList.add('shake');
        setTimeout(() => dom.stage.classList.remove('shake'), 400);
    }

    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(255, 0, 60, 0.3);
        pointer-events: none;
        z-index: 999;
    `;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 200);

    updateHUD();

    if (gameState.hp <= 0) {
        gameOver();
    }
}

function updateHUD() {
    if (dom.score) dom.score.innerText = gameState.score;
    if (dom.hpFill) {
        const hpPercent = (gameState.hp / gameState.maxHp) * 100;
        dom.hpFill.style.width = hpPercent + '%';
        
        if (hpPercent > 60) {
            dom.hpFill.style.background = 'linear-gradient(90deg, #0aff0a, #00f3ff)';
        } else if (hpPercent > 30) {
            dom.hpFill.style.background = 'linear-gradient(90deg, #f89820, #ff003c)';
        } else {
            dom.hpFill.style.background = 'linear-gradient(90deg, #ff003c, #bc13fe)';
        }
    }
    if (dom.combo && gameState.combo > 1) {
        dom.combo.innerText = `COMBO x${gameState.combo}`;
        dom.combo.style.display = 'block';
    } else if (dom.combo) {
        dom.combo.style.display = 'none';
    }
}

function createParticles(x, y) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 300;
        particle.style.transform = `translate(${tx}px, ${ty}px)`;
        particle.style.background = Math.random() > 0.5 ? '#00f3ff' : '#bc13fe';
        
        document.body.appendChild(particle);
        
        particle.animate([
            { opacity: 1, transform: 'translate(0, 0) scale(1)' },
            { opacity: 0, transform: `translate(${tx}px, ${ty}px) scale(0)` }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

function winGame() {
    gameState.active = false;
    saveProgress();
    showModal('win', 'МИССИЯ ВЫПОЛНЕНА!', `Очки: ${gameState.score} | Комбо: x${gameState.maxCombo}`);
}

function gameOver() {
    gameState.active = false;
    showModal('lose', 'СИСТЕМА УНИЧТОЖЕНА', `Попробуй ещё раз!`);
}

function showModal(type, title, message) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content ${type}">
            <h2>${title}</h2>
            <p>${message}</p>
            <button class="btn btn-primary" onclick="closeModalAndReload()">ПРОДОЛЖИТЬ</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function closeModalAndReload() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
    
    if (dom.stage) dom.stage.style.display = 'none';
    if (dom.menu) dom.menu.style.display = 'block';
    
    document.querySelectorAll('.enemy-drop').forEach(el => el.remove());
    
    location.reload();
}

async function saveProgress() {
    try {
        const response = await fetch('php/save_progress.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: gameState.lang,
                level: gameState.level.id,
                xp: 50 + (gameState.maxCombo * 5)
            })
        });
        const result = await response.json();
        console.log('Progress saved:', result);
    } catch (error) {
        console.error('Save error:', error);
    }
}

window.startGame = startGame;
window.exitGame = exitGame;
window.closeModalAndReload = closeModalAndReload;