const $pelota = document.getElementById('pelota');

// element.animate(keyframes =[], option={})
const animation = $pelota.animate([
  // from
  {
    transform: "translateX(0)"
  },
  // to
  {
    transform: "translateX(500px)"
  }
],{
  duration: 1000,
  delay: 1000,
  direction: "normal",
  easing: "linear",
  iterations: Infinity,
  fill: "forwards",
  interationStart: .5,
})

const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');

$playButton.addEventListener("click", (event)=> {
  animation.play();
});
$pauseButton.addEventListener("click", (event)=> {
  animation.pause();
});
$stopButton.addEventListener("click", (event)=> {
  animation.cancel();
});
$reverseButton.addEventListener("click", (event)=> {
  animation.reverse();
});
// const $hideButton = document.getElementById('hide-modal');
//    const $modal = document.getElementById('modal');
//    const $overlay = document.getElementById('overlay');
//
//    $hideButton.addEventListener('click', (event) => {
//      // console.log(event);
//      $modal.style.animation = 'modalOut .8s forwards';
//      $overlay.classList.remove('active');
//    });
