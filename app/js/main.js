$(window).on('load', function () {
    $('body').show();
    $('.preloader').delay(100).fadeOut('slow');
});

$( function () {

    //tabs

    var $filterBtn = $('.side-btn1');
    var filterOut = function () {
        var $filterBtnActive = $('.side-btn1.active'),
            idToggle = $filterBtnActive.attr('data-toggle'),
            $filterCard = $('.field1'),
            $filterCardActive = $('.field1[data-id="' + idToggle + '"]');
        $filterCard.hide();
        $filterCardActive.fadeIn();
    };
    filterOut();
    $filterBtn.on('click', function (e) {
        e.preventDefault();
        $filterBtn.removeClass('active');
        $(this).addClass('active');
        filterOut();
    });

    var $filterBtn2 = $('.side-btn2');
    var filterOut2 = function () {
        var $filterBtnActive = $('.side-btn2.active'),
            idToggle = $filterBtnActive.attr('data-toggle'),
            $filterCard = $('.field2'),
            $filterCardActive = $('.field2[data-id="' + idToggle + '"]');
        $filterCard.hide();
        $filterCardActive.fadeIn();
    };
    filterOut2();
    $filterBtn2.on('click', function (e) {
        e.preventDefault();
        $filterBtn2.removeClass('active');
        $(this).addClass('active');
        filterOut2();
    });

    //eye

    $('#eye').on('click', function(){
       $(this).toggleClass('active');
        if($('#eye').hasClass('active')){
            $('#pass').attr('type', 'text');
        } else {
            $('#pass').attr('type', 'password');
        }
    });

    //scrollbar

    $('.this-scroll-content').scrollbar({
        "autoScrollSize": false,
        "scrolly": $('.custom-scrollbar')
    });

    // modal

    $('.js-popup-modal').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#modal'
            }
        });
    });

    $('.js-popup-success').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#success'
            }
        });
    });

    $('.js-popup-lang-modal').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#lang-modal'
            }
        });
    });

    // lang-pick

    $('.header__lang-block').on('click', function (e){
       $(this).toggleClass('active');
    });

    // headder

    $('.header__menu-btn').on('click', function (e){
        $('.header__hidden-list-block').addClass('active');
    });

    $('.header__close-btn').on('click', function (e){
        $('.header__hidden-list-block').removeClass('active');
    });

});
// function noise(x, y, z){
//     var p = new Array(512)
//     var permutation = [151, 160, 137, 91, 90, 15,
//         131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
//         190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
//         88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
//         77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
//         102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
//         135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
//         5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
//         223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
//         129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
//         251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
//         49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
//         138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
//     for (var i = 0; i < 256; i++)
//         p[256 + i] = p[i] = permutation[i];
//     var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
//     x -= Math.floor(x);
//     y -= Math.floor(y);
//     z -= Math.floor(z);
//     var u = fade(x), v = fade(y), w = fade(z);
//     var A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z,
//         B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
//     return scale(lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
//         grad(p[BA], x - 1, y, z)),
//         lerp(u, grad(p[AB], x, y - 1, z),
//             grad(p[BB], x - 1, y - 1, z))),
//         lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1),
//             grad(p[BA + 1], x - 1, y, z - 1)),
//             lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
//                 grad(p[BB + 1], x - 1, y - 1, z - 1)))));}
// function fade(t) {return t * t * t * (t * (t * 6 - 15) + 10);}
// function lerp(t, a, b) {return a + t * (b - a);}
// function grad(hash, x, y, z) {
//     var h = hash & 15;
//     var u = h < 8 ? x : y,
//         v = h < 4 ? y : h == 12 || h == 14 ? x : z;
//     return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);}
// function scale(n) {return (1 + n) / 2;};
//
// //gui
//
// var move = 0;
// var step = 0;
// var mountHeight = 0;
// var height = 0;
//
// var goForvard = function () {
//     step = step + tochki.vremyaPoleta;
// };
// var goBack = function () {
//     step = step - tochki.vremyaPoleta;
// };
//
// var guiMenu = function () {
//
//     this.SkorostKolebaniy = 16;
//     this.VisotaGor = 0;
//     this.skorostPoleta = 16;
//     this.vremyaPoleta = 18;
//     this.GoVpered = function () {
//         step = step + tochki.vremyaPoleta;
//     };
//     this.podnyatGori = function () {
//         height = height + tochki.visotaPodnyatiya;
//     };
//     this.opustitGori = function () {
//         height = 0;
//         mountHeight = 0;
//     };
//     this.skorostPodnyatiya = 1.05;
//     this.visotaPodnyatiya = 30;
// };
//
// var tochki = new guiMenu();
// var gui = new dat.GUI();
// gui.add(tochki, 'SkorostKolebaniy').min(0).max(200).step(1);
// gui.add(tochki, 'VisotaGor').min(1).max(1000).step(1);
// gui.add(tochki, 'GoVpered');
// gui.add(tochki, 'skorostPoleta').min(1).max(200).step(1);
// gui.add(tochki, 'vremyaPoleta').min(1).max(500).step(1);
// gui.add(tochki, 'podnyatGori');
// gui.add(tochki, 'opustitGori');
// gui.add(tochki, 'skorostPodnyatiya').min(1.001).max(1.2).step(0.01);
// gui.add(tochki, 'visotaPodnyatiya').min(10).max(200).step(10);
//
// //gui-end
//
// var camera, scene, renderer, geometry, geometry2;
//
// function init() {
//
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);
//
//     renderer = new THREE.WebGLRenderer();
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//
//     var container = document.getElementById('container');
//     container.appendChild(renderer.domElement);
//
//     camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 3000);
//     camera.position.z = 700;
//     camera.position.y = 500;
//     camera.position.x = 200;
//
//     //Scene-----------------
//
//     var texture = (new THREE.TextureLoader).load("img/num0.png");
//     var material = new THREE.PointsMaterial({
//         size: 10,
//         vertexColors: THREE.VertexColors,
//         map: texture,
//         alphaTest: 0.5
//     });
//     var texture2 = (new THREE.TextureLoader).load("img/numC.png");
//     var material2 = new THREE.PointsMaterial({
//         size: 10,
//         vertexColors: THREE.VertexColors,
//         map: texture2,
//         alphaTest: 0.5
//     });
//
//     geometry = new THREE.Geometry();
//     geometry2 = new THREE.Geometry();
//
//     for (var i = 0; i <= 10000; i++) {
//         geometry.vertices.push(new THREE.Vector3());
//         geometry.colors.push(new THREE.Color());}
//
//     for (var j = 0; j <= 10000; j++) {
//         var rand = Math.floor(Math.random() * 2),
//             randCol = ['#ffffff', "#000000"],
//             setColor = randCol[rand];
//         geometry2.vertices.push(new THREE.Vector3());
//         geometry2.colors.push(new THREE.Color(setColor));}
//
//     var points = new THREE.Points(geometry, material);
//     var points2 = new THREE.Points(geometry2, material2);
//
//     scene.add(points);
//     scene.add(points2);
//
//     //Scene-end--------------
//
//     window.addEventListener('resize', onWindowResize, false);
// }
//
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }
//
// var time = 0
//
// function animate() {
//
//     time++;
//     if(move<=step){move++};
//     if(move>step){move--};
//     if(mountHeight<=height){
//         mountHeight = (mountHeight + 1)*tochki.skorostPodnyatiya
//     }
//
//     requestAnimationFrame(animate);
//
//     geometry.vertices.forEach( function (particle, index) {
//         var x = Math.floor(index/150);
//         var y = index%150;
//         var dx = x/20,
//             dy = (move/1000)*tochki.skorostPoleta - y/20,
//             dz = (time/10000)*tochki.SkorostKolebaniy;
//         particle.x = x * 20 - 600;
//         particle.y = (mountHeight*10+tochki.VisotaGor)*noise(dx,dy,dz);
//         particle.z = y * 20 - 2200;});
//
//     geometry2.vertices.forEach(function (particle, index) {
//         var x = Math.floor(index / 150);
//         var y = index % 150;
//         var dx = x / 20,
//             dy = (move / 1000) * tochki.skorostPoleta - y/20,
//             dz = (time / 10000) * tochki.SkorostKolebaniy;
//         particle.x = x * 20 - 600;
//         particle.y = (mountHeight * 10 + tochki.VisotaGor) * noise(dx, dy, dz);
//         particle.z = y * 20 - 2200;
//     });
//
//     geometry.verticesNeedUpdate = true;
//     geometry2.verticesNeedUpdate = true;
//     render();
// }
//
// function render() {
//     renderer.render(scene, camera);
// }
// init();
// animate();
//
// var goForvard = function () {
//     step = step + 65;
// };
// var goBack = function () {
//     step = step - 65;
// };
//
// //-анимация-при-загрузке-
//
// var firstPerf = setTimeout(function() {
//     height = height + tochki.visotaPodnyatiya;
//     }, 500);
//
// //-----------------------
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
//

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
function onePageScroll(element) {

    var settings = {
            sectionContainer: "section",
            easing: "ease",
            animationTime: 500},
        el = document.querySelector(element),
        sections = document.querySelectorAll(settings.sectionContainer),
        topPos = 0,
        lastAnimation = 0,
        paginationList = "",
        body = document.querySelector("body");

    this.init = function() {

        _addClass(el, "onepage-wrapper")
        el.style.position = "relative";

        for( var i = 0; i < sections.length; i++){
            _addClass(sections[i], "ops-section")
            sections[i].dataset.index = i + 1;
            topPos = topPos + 100;
            paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>";
        }
        if (!$(element).hasClass('personal')) {
            _swipeEvents(el);
            document.addEventListener("swipeDown", function (event) {
                if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
                moveUp(el);
            });
            document.addEventListener("swipeUp", function (event) {
                if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
                moveDown(el);
            });
        }

        var pagination = document.createElement("ul");
        pagination.setAttribute("class", "onepage-pagination");

        body.appendChild(pagination)
        pagination.innerHTML = paginationList;
        var posTop = (document.querySelector(".onepage-pagination").offsetHeight / 2) * -1;
        document.querySelector(".onepage-pagination").style.marginTop = posTop;


        _addClass(document.querySelector(settings.sectionContainer + "[data-index='1']"), "active");
        _addClass(body, "one-page-scroll");
        _addClass(document.querySelector(".onepage-pagination li a[data-index='1']"), "active");

        _paginationHandler = function() {
            var page_index = this.dataset.index;
            moveTo(el, page_index);
            goBack();
        };

        var pagination_links = document.querySelectorAll(".onepage-pagination li a");

        for( var i = 0; i < pagination_links.length; i++){
            pagination_links[i].addEventListener('click', _paginationHandler);
        }


        if ($(element).hasClass('personal') && $( window ).width()<1560)  {
            console.log("sss");
        } else {
            _mouseWheelHandler = function(event) {
                event.preventDefault();
                var delta = event.wheelDelta || -event.detail;
                if (!_hasClass(body, "disabled-onepage-scroll")) _init_scroll(event, delta);
            };
        }



        document.addEventListener('mousewheel', _mouseWheelHandler);
        document.addEventListener('DOMMouseScroll', _mouseWheelHandler);

        _keydownHandler = function(e) {
            var tag = e.target.tagName.toLowerCase();

            if (!_hasClass(body, "disabled-onepage-scroll")) {
                switch(e.which) {
                    case 38:
                        if (tag != 'input' && tag != 'textarea') moveUp(el)
                        break;
                    case 40:
                        if (tag != 'input' && tag != 'textarea') moveDown(el)
                        break;
                    default: return;
                }
            }
            return false;
        };

        document.onkeydown = _keydownHandler;

        return false;
    };

    _swipeEvents = function(el){
        var startX,
            startY;

        document.addEventListener("touchstart", touchstart);

        function touchstart(event) {
            var touches = event.touches;
            if (touches && touches.length) {
                startX = touches[0].pageX;
                startY = touches[0].pageY;
                document.addEventListener("touchmove", touchmove);
            }
        }

        function touchmove(event) {
            var touches = event.touches;
            if (touches && touches.length) {
                event.preventDefault();
                var deltaX = startX - touches[0].pageX;
                var deltaY = startY - touches[0].pageY;

                if (deltaY >= 50) {
                    var event = new Event('swipeUp');
                    document.dispatchEvent(event);
                }
                if (deltaY <= -50) {
                    var event = new Event('swipeDown');
                    document.dispatchEvent(event);
                }
                if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                    document.removeEventListener('touchmove', touchmove);
                }
            }
        }
    };

    _trim = function(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };

    _hasClass = function(ele,cls) {
        if (ele.className) {
            return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
        } else {
            return ele.className = cls;
        }
    };

    _addClass = function(ele,cls) {
        if (!_hasClass(ele,cls)) ele.className += " "+cls;
        ele.className = _trim(ele.className)
    };

    _removeClass = function(ele,cls) {
        if (_hasClass(ele,cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className=ele.className.replace(reg,' ');
        }
        ele.className = _trim(ele.className)
    };

    _whichTransitionEvent = function(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'};
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }}};

    _scrollTo = function(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            _scrollTo(element, to, duration - 10);
        }, 10);
    };

    _transformPage = function(el2, settings, pos, index, next_el) {

        var transformCSS = "-webkit-transform: translate3d(0, " + pos + "%, 0); -webkit-transition: -webkit-transform " + settings.animationTime + "ms " + settings.easing + "; -moz-transform: translate3d(0, " + pos + "%, 0); -moz-transition: -moz-transform " + settings.animationTime + "ms " + settings.easing + "; -ms-transform: translate3d(0, " + pos + "%, 0); -ms-transition: -ms-transform " + settings.animationTime + "ms " + settings.easing + "; transform: translate3d(0, " + pos + "%, 0); transition: transform " + settings.animationTime + "ms " + settings.easing + ";";

        el2.style.cssText = transformCSS;

        var transitionEnd = _whichTransitionEvent();
        el2.addEventListener(transitionEnd, endAnimation, false);

        function endAnimation() {
            el2.removeEventListener(transitionEnd, endAnimation)
        }
    };

    _init_scroll = function(event, delta) {
        var deltaOfInterest = delta,
            timeNow = new Date().getTime();
        if(timeNow - lastAnimation < + settings.animationTime) {
            event.preventDefault();
            return;
        }
        if (deltaOfInterest < 0) {
            moveDown(el)
        } else {
            moveUp(el)
        }
        lastAnimation = timeNow;
    };

    this.moveDown = function(el3) {

        if (typeof el3 == "string") el3 = document.querySelector(el3);

        var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
            current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) + 1) + "']");

        if(!next) {
            return
        }else {
            pos = (index * 100) * -1;
        }
        var next_index = next.dataset.index;
        _removeClass(current, "active");
        _addClass(next, "active");

        _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
        _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");

        _transformPage(el3, settings, pos, next_index, next);
        goForvard();
    };

    this.moveUp = function(el4) {

        if (typeof el4 == "string") el4 = document.querySelector(el4);

        var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
            current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) - 1) + "']");

        if(!next) {
            return
        }else {
            pos = ((next.dataset.index - 1) * 100) * -1;
        }
        var next_index = next.dataset.index;
        _removeClass(current, "active")
        _addClass(next, "active")

        _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
        _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");

        _transformPage(el4, settings, pos, next_index, next);
        goBack();
    };

    this.moveTo = function(el5, page_index) {

        if (typeof el5 == "string") el5 = document.querySelector(el5);

        var current = document.querySelector(settings.sectionContainer + ".active"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (page_index) + "']");

        if(next) {
            var next_index = next.dataset.index;
            _removeClass(current, "active");
            _addClass(next, "active");
            _removeClass(document.querySelector(".onepage-pagination li a" + ".active"), "active");
            _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + (page_index) + "']"), "active");

            pos = ((page_index - 1) * 100) * -1;

            _transformPage(el5, settings, pos, page_index, next);
        }
    };

    $('.ancor').on('click', function () {
        moveTo(el, 3);
        goBack();
    });

    this.init();
}

