// var time = 0;
// var canvas2 = document.getElementById('can-ind-graph');
// var ctx2 = canvas2.getContext('2d');
//
// function draw() {
//     ctx2.fillStyle = "rgba(5,65,81,0.5)";
//     ctx2.clearRect(0, 0, 700, 400);
//
//     for (var i = 0; i < 700; i++) {
//         ctx2.fillRect(i, 0, 1, 400 * noise(time / 500 + i / 100, 0, 0))
//     }
// }
//
// var canvas = document.getElementById('yee');
// var ctx3 = canvas.getContext('2d');
//
// var x = -30,
//     memory = [x = -30, y = 0];
//
// function drawBall(x, y) {
//     ctx3.beginPath();
//     ctx3.arc(x, y, 4, 0, 2 * Math.PI);
//     ctx3.fillStyle = '#0da5ce';
//     ctx3.fill();
//     ctx3.closePath();
// }
//
// function drawLine(x, y, dx, dy) {
//     ctx3.beginPath();
//     ctx3.strokeStyle = '#0da5ce';
//     ctx3.lineWidth = 2;
//     ctx3.moveTo(x, y);
//     ctx3.lineTo(dx, dy);
//     ctx3.stroke();
// }
//
// var x;
//
// $('.side-menu__item').on('click', function () {
//     setInterval(function () {
//         ctx2.clearRect(0, 0, 700, 400);
//         x = x + 30;
//         var y = getRandomArbitrary(150, 300);
//
//         lastPoint = memory[memory.length - 1];
//
//         memory.push({
//             x: x,
//             y: y
//         });
//
//         drawBall(x, y);
//         drawLine(x, y, lastPoint.x, lastPoint.y);
//
//         function getRandomArbitrary(min, max) {
//             return parseInt(Math.random() * (max - min) + min);
//         }
//     }, 100);
// });
//
//
// function Render() {
//     draw();
//     time++;
//     window.requestAnimationFrame(Render);
// }
// Render();