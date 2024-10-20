const textElements = [
  { id: 'mouseShadow1', range: 8 },
  { id: 'mouseShadow2', range: 8 },
  { id: 'mouseShadow3', range: 8 },
  { id: 'mouseShadow4', range: 8 },
];

textElements.forEach((element) => {
  const text = document.getElementById(element.id);
  const range = element.range;

  function updateShadow(event) {
    const x = Math.round(event.clientX * range / window.innerWidth) - range / 2;
    const y = Math.round(event.clientY * range / window.innerHeight) - range / 2;
    gsap.to(text, {
      '--x': x,
      '--y': y,
    });
  }

  document.body.addEventListener('mousemove', updateShadow);
});