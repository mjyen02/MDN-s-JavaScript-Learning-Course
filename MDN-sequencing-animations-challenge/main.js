const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Callback Hell Version
/*
const result1 = alice1.animate(aliceTumbling, aliceTiming);
result1.finished.then(() => {
  const result2 = alice2.animate(aliceTumbling, aliceTiming);
  result2.finished.then(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  });
}); 
*/

// Promise Chain Version
/*
const result1 = alice1.animate(aliceTumbling, aliceTiming);
result1.finished
  .then(() => {
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  });
*/

// Async Function Version
async function animationChain()
{
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

animationChain();