// var uiValue = 25;
// function handler(id) {
//     uiValue = id;}
//
// var black = $('.calc-graph__img');
//
// $(function () {
//
//     //111111111111111
//
//     var index1 = $('#slider1'),
//         input1 = $('input[name="inp1"]');
//     index1.slider({
//         value: 0.0625,
//         min: 0.01,
//         max: 0.1,
//         step: 0.0001,
//         slide: function (event, ui) {
//             input1.val(ui.value);
//         }
//     });
//     input1.val(index1.slider('value'));
//     index1.draggable();
//     input1.on('change keyup', function () {
//         var boardInput = $(this) ,
//             value = boardInput.val(),
//             maxVal = 0.1,
//             minVal = 0.01;
//         if(value.length > 8) {
//             value = parseFloat(value).toFixed(6);
//             boardInput.val(value);
//         }
//         index1.slider('value', value);
//          if (+value > maxVal) {
//              boardInput.val(maxVal);
//          } else if (+value < minVal) {
//              setTimeout ( function () {
//                  if(boardInput.val()<minVal) {
//                      boardInput.val(minVal);
//                  }
//              }, 3000);
//          }
//     });
//
//     //2222222222222222
//
//     var index2 = $('#slider2'),
//         input2 = $('input[name="inp2"]');
//     index2.slider({
//         value: 25,
//         min: -50,
//         max: 50,
//         step: 1,
//         slide: function (event, ui) {
//             input2.val(ui.value);
//             handler(ui.value);
//         }
//     });
//     input2.val(index2.slider('value'));
//     index2.draggable();
//     input2.on('change keyup', function () {
//         var boardInput = $(this),
//             value = boardInput.val(),
//             maxVal = 50,
//             minVal = -50;
//         handler(value);
//         index2.slider('value', value);
//         if (+value > maxVal) {
//             uiValue = maxVal;
//             boardInput.val(maxVal);
//         } else if (+value < minVal) {
//             uiValue = minVal;
//             boardInput.val(minVal);
//         } else if (value == '-') {
//             uiValue = 0;
//             setTimeout ( function () {
//                 if(boardInput.val() == '-') {
//                     boardInput.val(-1);
//                     uiValue = -1;
//                 }
//             }, 1500);
//         } else if (value == '') {
//             setTimeout ( function () {
//                 if(boardInput.val() == '') {
//                     boardInput.val(25);
//                     uiValue = 25;
//                 }
//             }, 1500);
//         }
//     });
//
//     var canvas = document.getElementById('can-graph');
//     var ctx = canvas.getContext('2d');
//     var step = 250;
//
//     function drawBall(x, y) {
//         ctx.beginPath();
//         ctx.arc(x, y, 6, 0, 2 * Math.PI);
//         ctx.fillStyle = '#0da5ce';
//         ctx.fill();
//         ctx.closePath();
//     }
//
//     function drawLine(x, y, dx, dy) {
//         ctx.beginPath();
//         ctx.strokeStyle = '#0da5ce';
//         ctx.lineWidth = 2;
//         ctx.moveTo(x, y);
//         ctx.lineTo(dx, dy);
//         ctx.stroke();
//     }
//
//     function Render() {
//         window.requestAnimationFrame(Render);
//         ctx.clearRect(0, 0, 600, 600);
//         drawBall(50, step + 2 * uiValue / 1);
//         drawLine(50, step + 2 * uiValue / 1, 100, step + 2 * uiValue / 2);
//         drawBall(100, step + 2 * uiValue / 2);
//         drawLine(100, step + 2 * uiValue / 2, 150, step + 2 * uiValue / 3);
//         drawBall(150, step + 2 * uiValue / 3);
//         drawLine(150, step + 2 * uiValue / 3, 200, step + 2 * uiValue / 2);
//         drawBall(200, step + 2 * uiValue / 2);
//         drawLine(200, step + 2 * uiValue / 2, 250, step + 2 * uiValue / 8);
//         drawBall(250, step + 2 * uiValue / 8);
//         drawLine(250, step + 2 * uiValue / 8, 300, step + 2 * uiValue / 20);
//         drawBall(300, step + 2 * uiValue / 20);
//         drawLine(300, step + 2 * uiValue / 20, 350, step - 2 * uiValue / 10);
//         drawBall(350, step - 2 * uiValue / 10);
//         drawLine(350, step - 2 * uiValue / 10, 400, step - 2 * uiValue / 1.5);
//         drawBall(400, step - 2 * uiValue / 1.5);
//         drawLine(400, step - 2 * uiValue / 1.5, 450, step - 2 * uiValue / 4);
//         drawBall(450, step - 2 * uiValue / 4);
//         drawLine(450, step - 2 * uiValue / 4, 500, step - 2 * uiValue);
//         drawBall(500, step - 2 * uiValue);
//         drawLine(500, step - 2 * uiValue, 550, step - 2 * uiValue * 2);
//         drawBall(550, step - 2 * uiValue * 2);
//
//         if(uiValue < 0){
//             black.addClass('active');
//         }else{
//             black.removeClass('active');
//         }
//     }
//     Render();
//
//     //333333333333333
//
//     var index3 = $('#slider3'),
//         input3 = $('input[name="inp3"]');
//     index3.slider({
//         value: 12,
//         min: 3,
//         max: 23,
//         step: 1,
//         slide: function (event, ui) {
//             input3.val(ui.value);
//         }
//     });
//
//     input3.val(index3.slider('value'));
//     index3.draggable();
//     input3.on('change keyup', function () {
//         var boardInput = $(this),
//             value = boardInput.val(),
//             maxVal = 23,
//             minVal = 3;
//         index3.slider('value', value);
//         if (+value > maxVal) {
//             boardInput.val(maxVal);
//         } else if (+value < minVal) {
//             setTimeout ( function () {
//                 if(boardInput.val()<minVal) {
//                     boardInput.val(minVal);
//                 }
//             }, 1500);
//         }
//     });
//
//     $(document).on('keyup', '.calc-form__input-num', function() {
//             var v = $(this).val(),
//                 r = v.replace(/[^\[a-zA-Z0-9]*/giu, '');
//             $(this).val(r);
//     });
//
//     $(document).on('keyup', '.calc-form__input_1st', function() {
//         var v = $(this).val(),
//             g = v.replace(',', '.'),
//             r = g.replace(/[^\[0-9.]*/giu, '');
//         $(this).val(r);
//     });
//
//     $(document).on('keyup', '.calc-form__input_2nd', function() {
//         var v = $(this).val(),
//             g = v.replace(',', '.'),
//             r = g.replace(/[^\[0-9-]*/giu, '');
//         $(this).val(r);
//     });
//     $(document).on('keyup', '.calc-form__input_3rd', function() {
//         var v = $(this).val(),
//             g = v.replace(',', '.'),
//             r = g.replace(/[^\[0-9]*/giu, '');
//         $(this).val(r);
//     });
//
//
//
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
