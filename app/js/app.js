/*global $, create3Symmetry*/
'use strict';

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
});
