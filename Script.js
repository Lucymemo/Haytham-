// الحصول على عنصر div لعرض الرسوم المتحركة
const animationDiv = document.createElement('div');
animationDiv.classList.add('animation');
document.body.appendChild(animationDiv);

// وظيفة لإنشاء قلب متحرك
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    animationDiv.appendChild(heart);

    // إضافة حركة لل قلب
    heart.style.animation = 'heartbeat 1s infinite alternate ease-in-out';
}

// إنشاء قلب كل ثانيتين
setInterval(createHeart, 2000);

// إضافة أنماط CSS للرسوم المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes heartbeat {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .animation {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .heart {
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        animation-fill-mode: both;
    }
`;
document.head.appendChild(style);
