// Встановлюємо дату, до якої будемо відлічувати
const targetDate = new Date('2024-11-14T14:54:00').getTime();

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