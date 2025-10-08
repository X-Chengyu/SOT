document.addEventListener('click', function (event) {
    const circle = document.createElement('div');
    circle.className = 'circle';

    const size = Math.random() * 10 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomPrideColor(); 
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;

    document.body.appendChild(circle);

    circle.addEventListener('animationend', () => {
        circle.remove();
    });
});
function getRandomPrideColor() {
    const prideColors = [
        '#FF0000', // 红色
        '#FF7F00', // 橙色
        '#FFFF00', // 黄色
        '#00FF00', // 绿色
        '#0000FF', // 蓝色
        '#4B0082'  // 靛蓝色
    ];


    const randomIndex = Math.floor(Math.random() * prideColors.length);
    return prideColors[randomIndex];
}
