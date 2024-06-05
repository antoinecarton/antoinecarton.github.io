document.addEventListener('DOMContentLoaded', function () {
  const tmdescriptions = document.querySelectorAll('.tm-description');
  if (tmdescriptions.length > 0) {
    tmdescriptions[tmdescriptions.length - 1].classList.add('last-tm-description');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    '/assets/images/sunday-ai.png',
    '/assets/images/sunday-ai2.png',
    '/assets/images/sunday-ai3.png',
    '/assets/images/sunday-ai4.png'
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];


  const imgElement = document.getElementById('random-sunday-image');
  imgElement.src = randomImage;
  imgElement.alt = 'Sunday image';
  imgElement.style.opacity = '0.45';

  imgElement.addEventListener('mouseover', function () {
    imgElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
    imgElement.style.transform = 'scale(7)';
    imgElement.style.opacity = '1';
  });

  imgElement.addEventListener('mouseleave', function () {
    imgElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
    imgElement.style.transform = 'scale(1)';
    imgElement.style.opacity = '0.45';
  });
});