// script.js
function showInitialMessage() {
    const selector = document.getElementById('selector').value;
    const messageElement = document.getElementById('message');
    const countdownElement = document.getElementById('countdown');

    let initialMessage = '';
    switch (selector) {
        case 'mom':
            initialMessage = '엄마는...???';
            break;
        case 'dad':
            initialMessage = '아빠는...???';
            break;
        case 'hoyeon':
            initialMessage = '호연은...???';
            break;
        default:
            messageElement.innerText = '선택하지 않았습니다.';
            countdownElement.innerText = '';
            return;
    }

    messageElement.innerText = initialMessage;
    startCountdown(5, selector);
}

function startCountdown(seconds, selector) {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `남은 시간: ${seconds}초`;

    const interval = setInterval(() => {
        seconds--;
        countdownElement.innerText = `남은 시간: ${seconds}초`;

        if (seconds <= 0) {
            clearInterval(interval);
            showRandomMessage(selector);
        }
    }, 1000);
}

function showRandomMessage(selector) {
    const messageElement = document.getElementById('message');
    const countdownElement = document.getElementById('countdown');
    let messages = [];

    switch (selector) {
        case 'mom':
            messages = ['똥글이', '채방구', '바보'];
            break;
        case 'dad':
            messages = ['최고', '너무 좋아', '네모네모'];
            break;
        case 'hoyeon':
            messages = ['응애', '귀염둥이', '호떡이', 'OO병', '징O이'];
            break;
        default:
            messages = ['오류 발생'];
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.innerText = randomMessage;
    countdownElement.innerText = '';
}
