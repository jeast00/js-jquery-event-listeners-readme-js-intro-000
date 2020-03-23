//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('.tasty').on('load', function() {
    $('img').css('border', 'red');
  });
}

function pressIt() {

}

function submitIt() {

}
$(document).ready(function(){

// call functions here
  getIt();
});
