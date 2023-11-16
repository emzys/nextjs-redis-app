const viewport = () => {
  let scene, light, camera, renderer, torus, box, octa, controls, plane;
  const width = 600;
  const height = 500;

  const init = () => {
    // set scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#ADD8E6");

    // set camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);

    camera.position.set(0, 2, 30);

    // set lighting
    const ambientLight = new THREE.AmbientLight(0x90909);
    scene.add(ambientLight);

    // rendering scene
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const planeGeometry = new THREE.PlaneGeometry(300, 300, 50, 50);
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      wireframe: true,
    });
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 0, -300);
    scene.add(plane);

    const canvas = document.getElementById("canvas");
    canvas.appendChild(renderer.domElement);

    update();
  };

  const update = () => {
    requestAnimationFrame(update);
    renderer.render(scene, camera);
    plane.rotation.x += 0.05;
    plane.rotation.y += 0.05;
  };

  init();
};

viewport();
