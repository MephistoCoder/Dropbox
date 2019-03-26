var img = [...document.getElementsByClassName('main__gallery_img')];    // массив изображений с галереи
var block = [...document.getElementsByClassName('block_hover_circle')]  // массив галочек на изображениях
img.forEach(function(item, i) {
  item.onclick = ()=> {                                                 // обработка клика на изображение 
    toggle(item, 0.6, 1);
    toggle(block[i], 0, 1);
  }
});
  function toggle(el, max, min) {                                       // функция для изменения прозрачности элемента
   el.style.opacity = (el.style.opacity == max) ? min : max;
}
