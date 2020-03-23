//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    return $('img').addClass('tasty').css('border', 'red solid 1px');
  });
}

function pressIt() {

}

function submitIt() {
  $()
}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
