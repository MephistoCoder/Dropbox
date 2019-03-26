
var img = [...document.getElementsByClassName('main__gallery_img')];
var block = [...document.getElementsByClassName('block_hover_circle')]
img.forEach(function(item, i) {
  item.onclick = ()=> {
    togle(item);
    show(block[i]);
  }
});
  function togle(el) {
   el.style.opacity = (el.style.opacity == 1) ? 0.6 : 1;
}
function show(el) {
  el.style.opacity = (el.style.opacity == 0) ? 1 : 0;
}
