let img = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
img.onclick = function () {
  counter.textContent++;
  if (img.width == '200') {
    img.width = '150';
    img.height = '150';
  } else {
    img.width = '200';
    img.height = '200';
  }
};
