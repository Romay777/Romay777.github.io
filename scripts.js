// Telegram unit
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    try {
        tg.expand();
    } catch (error) {
        console.error("Ошибка при вызове tg.expand():", error);
    }
} else {
    console.warn("Telegram WebApp API не доступен.");
}

// Генерация фоновых сердечек
function createHearts() {
    const container = document.getElementById('backgroundHearts');
    const heartCount = 25;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = '❤️';

        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (10 + Math.random() * 20) + 'px';
        heart.style.animationDelay = Math.random() * 10 + 's';

        container.appendChild(heart);
    }
}

createHearts();


// Эффект полароида
function createPolaroid(imgUrl, caption) {
    return `
          <div class="polaroid">
            <img src="${imgUrl}" alt="${caption}" loading="lazy" />
            <p class="polaroid-caption montserrat-alternates-semibold">${caption}</p>
          </div>
        `;
}

// Создание событий
function addEvent(date, title, description, imgUrl) {
    const timeline = document.getElementById("timeline");
    const eventEl = document.createElement("div");
    eventEl.classList.add("event");

    // Создаем полароид с изображением
    const polaroidHtml = createPolaroid(imgUrl, title);

    eventEl.innerHTML = `
          <div class="date montserrat-alternates-bold">${date}</div>
          ${polaroidHtml}
          <div class="description montserrat-alternates-medium">${description}</div>
        `;

    timeline.appendChild(eventEl);
}

addEvent(
    "01.06.2024",
    "Всё началось с...",
    "Самого неожиданного знакомства",
    "pics/vk.png"
);
addEvent(
    "01.06.2024",
    "И продолжилось ещё интереснее!",
    "Это было необычно)",
    "pics/1.png"
);
addEvent(
    "02.06.2024",
    "Научила ставить лапу",
    "И тут началось...",
    "pics/13.png"
);
addEvent(
    "04.06.2024",
    "Первая встреча",
    "Тогда не обошлось без происшествий, хаха)",
    "pics/2.png"
);
addEvent(
    "11.06.2024",
    "Ты поделилась своими результатами ЕГЭ",
    "И мы вновь зажгли огонь!",
    "pics/3.png"
);
addEvent(
    "12.06.2024",
    "Наш любимый ТикТок",
    "Конец режиму сна через 3..2..1...",
    "pics/4.png"
);
addEvent(
    "12.06.2024",
    "Добавила в свой телеграм канальчик",
    "Любимый пост ✅",
    "pics/5.png"
);
addEvent(
    "16.06.2024 14:30",
    "Сделали наши балдежные печеньки",
    "И того самого человечка 🍪",
    "pics/6.png"
);
addEvent(
    "16.06.2024 23:00",
    "Первый поцелуй на той самой скамейке",
    "Самое незабываемое событие того лета",
    "pics/7.png"
);
addEvent(
    "20.06.2024",
    "Первое «люблю»",
    "И далеко не последнее)",
    "pics/8.png"
);
addEvent(
    "20.06.2024",
    "Полина в шоке",
    "Она очень догадливая",
    "pics/9.png"
);
addEvent(
    "22.06.2024",
    "Наш первый тестик",
    "Хахаха, почему такая тема...",
    "pics/11.png"
);
addEvent(
    "23.06.2024",
    "Первый закреп",
    "Без комментариев))",
    "pics/12.png"
);
addEvent(
    "11.08.2024",
    "Первые цветы",
    "Любимые кустовые розы",
    "pics/flow.png"
);
addEvent(
    "17.08.2024",
    "Первая совместная фотография",
    "Тот самый турнир 🏀",
    "pics/sovm.jpg"
);
addEvent(
    "31.08.2024",
    "Наш бабл-ти",
    "Лучше не вспоминать..",
    "pics/babl.jpg"
);
addEvent(
    "31.08.2024",
    "Создали виджет любви",
    "Который работает по сей день",
    "pics/widget.png"
);
addEvent(
    "27.09.2024",
    "Первая ментальная связь",
    "Жена х888!",
    "pics/mindal.png"
);
addEvent(
    "18.10.2024",
    "Первая ночёвка!",
    "И кое-что ещё)..",
    "pics/sleepy.jpg"
);
addEvent(
    "18.10.2024",
    "Первый совместный ТикТок",
    "Потом нас уже не остановить..",
    "pics/firsttt.png"
);
addEvent(
    "01.01.2025 🎄",
    "Наш первый Новый Год",
    "Вместе закончили, вместе и проведем!",
    "pics/newyear.jpg"
);
addEvent(
    "27.01.2025",
    "Наша фотосессия",
    "The most damn good",
    "pics/start.jpg"
);


// Массив фраз о любви
const lovePhrases = [
    "Ты - мое самое большое счастье ❤️",
    "Люблю тебя больше всего на свете 💖",
    "Ты делаешь мой мир прекрасней ✨",
    "Ты - моя любимая принцесса 👑",
    "С тобой каждый день особенный 🌟",
    "Твоя улыбка освещает мой мир ☀️",
    "Ты - мое самое дорогое сокровище 💝",
    "Бесконечно счастлив быть с тобой 💑",
    "Ты - любовь всей моей жизни 💕",
    "Каждый миг с тобой бесценен ⭐"
];

// Найдем элемент сердца
const heart = document.querySelector('.heart');
// Создадим элемент для отображения фразы
const phraseElement = document.createElement('div');
phraseElement.classList.add('love-phrase');
document.querySelector('.heart-container').appendChild(phraseElement);

// Переменная для отслеживания состояния блокировки
let isLocked = false;

// Обновленный обработчик клика
heart.addEventListener('click', () => {
    if (isLocked) return; // Если заблокировано, прерываем выполнение

    // Блокируем сердце
    isLocked = true;
    heart.classList.add('disabled');

    // Выбираем случайную фразу и обновляем текст
    phraseElement.textContent = lovePhrases[Math.floor(Math.random() * lovePhrases.length)];

    // Добавляем класс для анимации
    phraseElement.classList.remove('show');
    void phraseElement.offsetWidth; // Форсируем перерисовку
    phraseElement.classList.add('show');

    // Удаляем класс и разблокируем через 3 секунды
    setTimeout(() => {
        phraseElement.classList.remove('show');
        heart.classList.remove('disabled');
        isLocked = false;
    }, 3000);
});


// Наблюдатель за появлением элементов
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

// Находим все события и добавляем их в наблюдатель
document.querySelectorAll('.event, .fade-in-animation').forEach((event) => {
    observer.observe(event);
});


// Создание карусели лучших фото
document.addEventListener('DOMContentLoaded', () => {
    // Функция для загрузки списка фотографий из директории
    async function loadPhotos() {
        return [
            'best-photos/1.jpg',
            'best-photos/15.jpg',
            'best-photos/2.jpg',
            'best-photos/15.jpg',
            'best-photos/5.jpg',
            'best-photos/16.jpg',
            'best-photos/6.jpg',
            'best-photos/17.jpg',
            'best-photos/7.jpg',
            'best-photos/18.jpg',
            'best-photos/8.jpg',
            'best-photos/19.jpg',
            'best-photos/9.jpg',
            'best-photos/20.jpg',
            'best-photos/10.jpg',
            'best-photos/21.jpg',
            'best-photos/11.jpg',
            'best-photos/22.jpg',
            'best-photos/12.jpg',
            'best-photos/23.jpg',
            'best-photos/13.jpg',
            'best-photos/24.jpg',
            'best-photos/14.jpg',
            'best-photos/25.jpg',
        ];
    }

    const carousel = document.getElementById('photoCarousel');
    // const indicators = document.getElementById('carouselIndicators');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentSlide = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    // let prevTranslate = 0;

    // Инициализация карусели
    async function initCarousel() {
        const photos = await loadPhotos();

        // Создаем слайды
        photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${photo}" alt="Фото ${index + 1}" loading="lazy">`;
            carousel.appendChild(slide);

            // Создаем индикаторы
            // const indicator = document.createElement('div');
            // indicator.className = 'indicator' + (index === 0 ? ' active' : '');
            // indicator.addEventListener('click', () => goToSlide(index));
            // indicators.appendChild(indicator);
        });

        // Обработчики для свайпов
        carousel.addEventListener('touchstart', touchStart);
        carousel.addEventListener('touchmove', touchMove);
        carousel.addEventListener('touchend', touchEnd);

        // Обработчики для кнопок
        prevButton.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => goToSlide(currentSlide + 1));

        // Запускаем автоматическое листание
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 2000); // Каждые 2 секунды
    }

    function goToSlide(index) {
        const slides = carousel.children;
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentSlide = index;
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Обновляем индикаторы
        // document.querySelectorAll('.indicator').forEach((indicator, i) => {
        //     indicator.classList.toggle('active', i === index);
        // });
    }

    function touchStart(event) {
        isDragging = true;
        startPos = event.touches[0].clientX;
        carousel.style.transition = 'none';
    }

    function touchMove(event) {
        if (!isDragging) return;

        const currentPosition = event.touches[0].clientX;
        const diff = currentPosition - startPos;
        const move = (diff / carousel.offsetWidth) * 100;
        const slideOffset = -currentSlide * 100;

        currentTranslate = slideOffset + move;
        carousel.style.transform = `translateX(${currentTranslate}%)`;
    }

    function touchEnd() {
        isDragging = false;
        carousel.style.transition = 'transform 0.5s ease-in-out';

        const movedBy = currentTranslate - (-currentSlide * 100);

        if (Math.abs(movedBy) > 20) {
            if (movedBy > 0) {
                goToSlide(currentSlide - 1);
            } else {
                goToSlide(currentSlide + 1);
            }
        } else {
            goToSlide(currentSlide);
        }
    }

    // Запускаем инициализацию
    initCarousel();
});

// Функция для начала просмотра
function startExperience() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const musicToggle = document.getElementById('musicToggle');
    const music = document.getElementById('backgroundMusic');
    const mainContent = document.getElementById('mainContent');

    // Запускаем анимацию исчезновения
    welcomeScreen.classList.add('hide');

    // После завершения анимации полностью скрываем элемент
    welcomeScreen.addEventListener('transitionend', () => {
        welcomeScreen.style.display = 'none';
    });

    // Показываем основной контент с небольшой задержкой
    setTimeout(() => {
        mainContent.style.display = 'block';
        mainContent.classList.add('visible');
    }, 300); // Задержка должна совпадать с длительностью анимации

    // Остальной код оставляем без изменений...
    musicToggle.style.display = 'flex';
    music.volume = 0.3;
    music.play().then(() => {
        window.isMusicPlaying = true;
        musicToggle.textContent = '🔊';
        musicToggle.classList.remove('muted');
    }).catch(function(error) {
        console.log("Воспроизведение не удалось:", error);
        window.isMusicPlaying = false;
        musicToggle.textContent = '🔈';
        musicToggle.classList.add('muted');
    });
}

// Управление музыкой
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');

    // Инициализируем глобальное состояние
    window.isMusicPlaying = false;

    function toggleMusic() {
        if (window.isMusicPlaying) {
            music.pause();
            musicToggle.textContent = '🔈';
            musicToggle.classList.add('muted');
            window.isMusicPlaying = false;
        } else {
            music.play().then(() => {
                musicToggle.textContent = '🔊';
                musicToggle.classList.remove('muted');
                window.isMusicPlaying = true;
            }).catch(function(error) {
                console.log("Воспроизведение не удалось:", error);
            });
        }
    }

    musicToggle.addEventListener('click', toggleMusic);
});

// Загрузка прелоадера
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progress-bar');
    const textItems = document.querySelectorAll('.text-item');
    const texts = [
        "Инициализирую сердечки...",
        "Любуюсь твоими фотографиями 💖",
        "Готовлю кое-что интересное ✨",
        "Настраиваю атмосферу любви 🎶",
        "Загружаю наши воспоминания 📸"
    ];

    let currentText = 0;
    const totalSteps = 100;
    let currentStep = 0;

    const updateProgress = () => {
        if (currentStep >= totalSteps) {
            // Ждём 1 секунду перед началом исчезновения preloader
            setTimeout(() => {
                preloader.style.opacity = '0';
                // После плавного исчезновения (0.5 сек) удаляем элемент
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 700);
            return;
        }

        progressBar.style.width = currentStep + '%';
        currentStep++;

        // Смена текста каждые 20%
        if(currentStep % (totalSteps/(texts.length)) === 0) {
            textItems.forEach(item => item.classList.remove('active'));
            textItems[currentText].classList.add('active');
            currentText = (currentText + 1) % texts.length;
        }

        setTimeout(updateProgress, 45);
    };

    // Задержка перед началом анимации
    setTimeout(updateProgress, 500);
});

// Конфетти с эффектом разлета
function addConfetti(event) {
    const colors = [
        "#ff6b6b", "#e74c3c", "#ff9ff3", "#f368e0",
        "#ffd700", "#ff69b4", "#87ceeb", "#98fb98"
    ];
    const shapes = ['❤️', '✨', '💖', '✨'];

    // Создаем контейнер для конфетти если его еще нет
    let confettiContainer = document.querySelector('.confetti-container');
    if (!confettiContainer) {
        confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        confettiContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999999;
        `;
        document.body.appendChild(confettiContainer);
    }

    // Получаем координаты клика или центр элемента
    const rect = event.target.getBoundingClientRect();
    const startX = event.clientX || rect.left + rect.width / 2;
    const startY = event.clientY || rect.top + rect.height / 2;

    // Создаем больше конфетти для более насыщенного эффекта
    for (let i = 0; i < 75; i++) {
        const confetti = document.createElement('div');
        const isEmoji = Math.random() > 0.7; // 30% шанс появления эмодзи

        if (isEmoji) {
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.fontSize = `${12 + Math.random() * 8}px`;
        } else {
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }

        const size = isEmoji ? 20 : 8 + Math.random() * 6;
        // Случайный угол в радианах
        const angle = (Math.random() * Math.PI * 2);
        // Случайная скорость
        // const velocity = 15 + Math.random() * 25;
        // Случайное расстояние
        const distance = 100 + Math.random() * 200;

        // Вычисляем конечные координаты на основе угла и расстояния
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        // Начальное и конечное вращение
        const startRotation = Math.random() * 360;
        const endRotation = startRotation + Math.random() * 720 - 360;

        confetti.style.cssText += `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${startX}px;
            top: ${startY}px;
            border-radius: ${isEmoji ? '0' : '2px'};
            transform: rotate(${startRotation}deg);
            opacity: 1;
        `;

        // Создаем уникальную анимацию для каждого конфетти
        const animationName = `confetti-${Date.now()}-${i}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% {
                    transform: translate(0, 0) rotate(${startRotation}deg);
                    opacity: 1;
                }
                85% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${endX}px, ${endY}px) rotate(${endRotation}deg);
                    opacity: 0;
                }
            }
        `;

        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);

        confetti.style.animation = `${animationName} ${1 + Math.random() * 2}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;

        confettiContainer.appendChild(confetti);

        // Удаляем конфетти и стили после анимации
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, 3000);
    }
}

heart.addEventListener('click', (event) => {
    event.preventDefault();
    addConfetti(event);
});

// Добавляем немного конфетти при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const heartElement = document.querySelector('.heart');
    if (heartElement) {
        const rect = heartElement.getBoundingClientRect();
        const fakeEvent = {
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2,
            target: heartElement
        };
        setTimeout(() => addConfetti(fakeEvent), 1000);
    }
});

// Счетчик времени отношений
// Функция для правильных окончаний слов
function getCorrectWordForm(number, forms) {
    const cases = [2, 0, 1, 1, 1, 2];
    return forms[
        (number % 100 > 4 && number % 100 < 20) ? 2 :
            cases[(number % 10 < 5) ? number % 10 : 5]
        ];
}

function updateCounter() {
    const startDate = new Date('2024-06-16T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    // Расчёт базовых величин
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    // Расчёт месяцев и дней
    let months = 0;
    let days = 0;

    const yearDiff = now.getFullYear() - startDate.getFullYear();
    let monthDiff = now.getMonth() - startDate.getMonth() + (yearDiff * 12);

    // Создаём дату для проверки дней
    const checkDate = new Date(startDate);
    checkDate.setMonth(checkDate.getMonth() + monthDiff);

    // Если текущий день меньше начального, уменьшаем месяцы на 1
    if (now.getDate() < startDate.getDate()) {
        monthDiff--;
        // Определяем последний день предыдущего месяца
        checkDate.setMonth(checkDate.getMonth() - 1);
    }

    months = monthDiff;

    // Расчёт оставшихся дней
    const lastDayOfMonth = new Date(checkDate.getFullYear(), checkDate.getMonth() + 1, 0).getDate();
    if (now.getDate() >= startDate.getDate()) {
        days = now.getDate() - startDate.getDate();
    } else {
        // Если перешли на следующий месяц
        const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days = daysInLastMonth - startDate.getDate() + now.getDate();
    }

    // Обновление чисел на странице
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('total-days').textContent = totalDays;

    // Обновление окончаний
    document.getElementById('months-label').textContent =
        getCorrectWordForm(months, ['месяц', 'месяца', 'месяцев']);
    document.getElementById('days-label').textContent =
        getCorrectWordForm(days, ['день', 'дня', 'дней']);
    document.getElementById('total-days-label').textContent =
        getCorrectWordForm(totalDays, ['день', 'дня', 'дней']);
}

// Запуск счётчика
updateCounter();
setInterval(updateCounter, 1000);