/*global $, create3Symmetry*/
'use strict';

function randomTransform(S3){
  var i, command;
  var flips = [null, 'N', 'SE', 'SW'];
  var rotations = [null, 'R', 'L'];
  var howManyFlips = Math.floor(Math.random() * 10);
  var howManyRotations = Math.floor(Math.random() * 10);
  for(i=0; i<howManyFlips; i++){
    command = flips[Math.floor(Math.random()*flips.length)];
    S3.flip(command);
  }
  for(i=0; i<howManyRotations; i++){
    command = rotations[Math.floor(Math.random()*rotations.length)];
    S3.rotate(command);
  }
}

// sort see: 
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#25984542
function fy(a,b,c,d){//array,placeholder,placeholder,placeholder
 c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
}
function randomPizzaOrder(){
  var pizzas = ['cheese', 'ham', 'olives'];
  fy(pizzas);
  return pizzas;
}
function pizzaText(){
  var pizzas = randomPizzaOrder();
  var text = "   Owl wants: "   + pizzas[0] +
             " | Birdy wants: " + pizzas[1] +
             " | Fish wants: "  + pizzas[2];
  return text;
}


$(function () {
  var S3;
  S3 = create3Symmetry();

  var setImg = function(s){
    $('#pizza_image').attr('src', s.getUrl());
    logToTable(S3);
  };

  $('#flip-north').click(function () {
    S3.flip('N');
    setImg(S3);
  });

  $('#flip-south-east').click(function () {
    S3.flip('SE');
    setImg(S3);
  });
  
  $('#flip-south-west').click(function () {
    S3.flip('SW');
    setImg(S3);
  });

  $('#rotate-right').click(function () {
    S3.rotate('R');
    setImg(S3);
  });

  $('#rotate-left').click(function () {
    S3.rotate('L');
    setImg(S3);
  });

  var logToTable = function (S) {
    var table = $('#log-table');
    var lastMove = S.lastMove();
    console.log(lastMove);
    // table.append('<tr><td>' + lastMove.prettyPrinted + '</td></tr>');
    table.prepend('<tr><td>' + lastMove.prettyPrinted + '</td></tr>');
    // table.append('<li>' + lastMove + '</li>');
  }

  S3.preloadImages();

  // set up random game
  randomTransform(S3);
  $('#pizza_image').attr('src', S3.getUrl());
  $('.message-text').text(pizzaText());
});
