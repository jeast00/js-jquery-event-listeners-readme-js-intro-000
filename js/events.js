//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('.tasty').css('borderColor', 'red');
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
