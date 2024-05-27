document.addEventListener('DOMContentLoaded', function () {
    const tmdescriptions = document.querySelectorAll('.tm-description');
    if (tmdescriptions.length > 0) {
      tmdescriptions[tmdescriptions.length - 1].classList.add('last-tm-description');
    }
  });