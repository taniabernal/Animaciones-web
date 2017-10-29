const $hideButton = document.getElementById('hide-modal');
   const $modal = document.getElementById('modal');
   const $overlay = document.getElementById('overlay');

   $hideButton.addEventListener('click', (event) => {
     // console.log(event);
     $modal.style.animation = 'modalOut .8s forwards';
     $overlay.classList.remove('active');
   });
