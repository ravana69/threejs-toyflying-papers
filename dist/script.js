import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js'

const butterflies = butterfliesBackground({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 96,
  background: 0xffffff,
  material: 'phong',
  materialParams: { shininess: 20 },
  colors: [Math.random() * 0xffffff, Math.random() * 0xffffff],
  wingsScale: [1, 1, 1],
  wingsWidthSegments: 8,
  wingsHeightSegments: 8,
  wingsSpeed: 0.75,
  wingsDisplacementScale: 1.25,
  noiseCoordScale: 0.01,
  noiseTimeCoef: 0.0005,
  noiseIntensity: 0.0025,
  attractionRadius1: 100,
  attractionRadius2: 150,
  maxVelocity: 0.1
})

document.body.addEventListener('click', () => {
  butterflies.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff])
})