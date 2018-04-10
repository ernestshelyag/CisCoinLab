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
