// Встановлюємо дату, до якої будемо відлічувати
const targetDate = new Date('2025-11-14T14:54:00').getTime();

// Запускаємо таймер активності користувача
let startTime = Date.now(); // Час входу на сайт
const MAX_TIME = 5 * 60 * 1000; // 5 хвилин у мілісекундах

// Перевірка, чи користувач перебуває на сайті більше 5 хвилин
setInterval(() => {
    let elapsedTime = Date.now() - startTime;

    if (elapsedTime > MAX_TIME) {
        console.warn("🚨 Користувач знаходиться на сайті більше 5 хвилин.");
        alert("⏳ Ви перебуваєте на сайті вже понад 5 хвилин!");
    }
}, 1000); // Перевірка кожну секунду

// Функція оновлення зворотного відліку
function updateCountdown() {
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Якщо відлік закінчився, виводимо повідомлення
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "The event has started!";
    }
}

// Встановлюємо інтервал для оновлення зворотного відліку щосекунди
const interval = setInterval(updateCountdown, 1000);
