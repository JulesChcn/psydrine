var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$("body").mousemove(function(e) {
 if(!isMobile) {
  $("#disapp").css( "opacity", "0.8");
  setTimeout(function(e){
    $("#disapp").css( "opacity", "0");
  }, 1000);
}
});

// var disapp = document.getElementById('disapp');

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// function disappear() {
//   disapp.style.opacity = "0.8";
//   setTimeout(function() {
//     disapp.style.opacity = "0";
//   }, 2000)
// }

// document.addEventListener('mousemove', debounce(disappear));
