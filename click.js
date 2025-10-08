document.addEventListener('click', function (event) {
    const circle = document.createElement('div');
    circle.className = 'circle';

    const size = Math.random() * 10 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;

    document.body.appendChild(circle);

    circle.addEventListener('animationend', () => {
        circle.remove();
    });
});

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}