// الحصول على عنصر div لعرض الرسوم المتحركة
// ... باقي الكود

// إنشاء قلب كل ثانيتين
setInterval(createHeart, 2000);

// إنشاء نص "I love you" المتحرك
function createLoveMessage() {
    const loveMessage = document.createElement('div');
    loveMessage.classList.add('love-message');
    animationDiv.appendChild(loveMessage);
}

createLoveMessage();
