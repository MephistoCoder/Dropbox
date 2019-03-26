
var img = [...document.getElementsByClassName('main__gallery_img')];
console.log(img);
img.forEach(function(item) {
  item.onclick = ()=> toggle(item);
});
  function toggle(el) {
   el.style.opacity = (el.style.opacity == 1) ? 0.6 : 1;
}
