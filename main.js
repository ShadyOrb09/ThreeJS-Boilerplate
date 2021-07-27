let scene, camera, renderer, cube;
let container;

function init() {

    // Get container for render
    container = document.getElementById('container');

    // Start by creating a scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xff7700 );

    // Then we need a camera
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        1, 
        1000
    );

    // Create a renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the body of HTML
    container.appendChild(renderer.domElement);

    // Create a Mesh
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    //const texture = new THREE.TextureLoader().load('textures/crate.jpeg');
    //const material = new THREE.MeshBasicMaterial( { map: texture } );
    cube = new THREE.Mesh( geometry, material );

    // Add it to the scene
    scene.add( cube );

    // Reposition camera so it doesn't clip inside cube
    camera.position.z = 5;
}

// Animation Function
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.001;

    renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// Call initializer
init();
// Call animation function
animate();