let timer = document.getElementById('timer');
let interval = setInterval(() => {
  if (timer.textContent > 0) {
    timer.textContent--;
  } else {
    clearTimeout(interval);
    alert('Вы победили в конкурсе');
  }
}, 1000);
