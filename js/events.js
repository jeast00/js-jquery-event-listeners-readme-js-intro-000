//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
  $('img').addClass('tasty').css('border', 'red solid 1px');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.keycode === 'g') {
      alert('G was pressed');
    }
  });
}

function submitIt() {

}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
