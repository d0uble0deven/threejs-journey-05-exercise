import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);

// Time
// let time = Date.now();

// Clock
const clock = new THREE.Clock()

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, {duration: 1, delay: 2, x: 0})

// Animations
const tick = () => {
    console.log('tick')

    // Clock
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)

    // Time
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime
    // console.log(deltaTime)
    
    // Update objects
    // mesh.position.x += 0.01 / deltaTime;
    // mesh.position.y += 0.01 / deltaTime;
    // mesh.rotation.z += 0.01 / deltaTime;

    // mesh.position.x += 0.01 / elapsedTime;
    // mesh.position.y += 0.01 / elapsedTime;

    mesh.rotation.y = elapsedTime * Math.PI * 2;
    mesh.rotation.z = elapsedTime * Math.PI;
    
    mesh.position.x = Math.sin(elapsedTime) 
    mesh.position.y = Math.cos(elapsedTime)
    mesh.position.z = Math.tan(elapsedTime) / -10

    // camera.lookAt(mesh.position) // keeps box in the middle since camera follows it
    
    // Renderer
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick);
}
tick()