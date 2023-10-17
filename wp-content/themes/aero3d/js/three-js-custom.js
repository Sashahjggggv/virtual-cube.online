import {
    OrbitControls
} from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js'


let scene;
let camera;
let renderer;
let modelSrc;
let gModel;
let container;

function init() { 
    //Scene
    container = document.querySelector('.scene');
    scene = new THREE.Scene();
    modelSrc = container.getAttribute('data-src');



    //Camera
    const fov = 40;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 15000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 10500;
    camera.position.y = 0;
    camera.position.x = 50;


    //render
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    })
    renderer.setSize(container.clientWidth, container.clientWidth);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement)


    //Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    controls.enableDamping = true;
    controls.minDistance = 100;
    controls.enableZoom = false;


    //light
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient)

    let light = new THREE.PointLight(0xc4c4c4, 1);
    light.position.set(0, 30000, 50000);
    scene.add(light)

    let light2 = new THREE.PointLight(0xc4c4c4, 1);
    light2.position.set(50000, 30000, 50000);
    scene.add(light2)

    let light3 = new THREE.PointLight(0xc4c4c4, 1);
    light3.position.set(0, 30000, -50000);
    scene.add(light3)

    let light4 = new THREE.PointLight(0xc4c4c4, 1);
    light4.position.set(-50000, 30000, 50000);
    scene.add(light4)



    //model
    const loader = new THREE.GLTFLoader();
    // loader.load('./model/ipone/scene.gltf', gltf => {
    loader.load(modelSrc, gltf => {
            scene.add(gltf.scene);
            gModel = gltf.scene.children[0];
            document.querySelector('.scene').classList.remove('loaded')
            animate()
        },function ( xhr ) {
            document.querySelector('.scene').classList.add('loaded')
        },
        function (error) {
            console.log('Error: ' + error)
        }
    );



    // animate
    function animate() {
        requestAnimationFrame(animate)
        gModel.rotation.z += 0.002;
        controls.update();
        renderer.render(scene, camera)
    }


    //Resize
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onWindowResize)



}
init()