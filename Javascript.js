const canvas = document.getElementById('butterflyCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let angle = 0;

function drawButterfly() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);

    let a = 2; // Ajusta estos valores para ver diferentes formas de la mariposa
    let b = 6;
    let A = 1;
    let B = 4;
    let c = 12;

    ctx.beginPath();
    for (let theta = 0; theta < 360; theta += 0.5) {
        let t = theta * Math.PI / 180;
        let r = Math.exp(Math.cos(a * t + angle)) - A * Math.cos(b * t + angle) + Math.sin(B * (t + angle) / c);
        let x = r * Math.cos(t);
        let y = r * Math.sin(t);

        let hue = (Math.sin(angle + t) + 1) / 2 * 360; // Cambiar color dinámicamente
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        if (theta === 0) {
            ctx.moveTo(x * 100, y * 100);
        } else {
            ctx.lineTo(x * 100, y * 100);
        }
    }
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
}

function animate() {
    angle += 0.01; // Incrementar el ángulo para la animación
    drawButterfly();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
