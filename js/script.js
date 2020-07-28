window.onload = function () {
  let width = window.innerWidth;
  let height = window.innerHeight;

  let canvas = document.getElementById('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  let renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setClearColor(0x000000);

  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(45, width / height, 30, 5000);
  camera.position.set(100, 0, 1000);

  let light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  let geometry = new THREE.SphereGeometry(200, 12, 12);

  let material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  });
  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function addRotation() {
    requestAnimationFrame(addRotation);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  addRotation();

  function changeColorOnAnimation() {
    mesh.material.color.set(0xccd723);
  }

  setTimeout(changeColorOnAnimation, 2000);

  renderer.render(scene, camera);
};
