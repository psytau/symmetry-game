/*global $, create3Symmetry*/
'use strict';

$(function () {
  var S3;
  S3 = create3Symmetry();

  var setImg = function(s){
    $('#pizza_image').attr('src', s.getUrl());
  };

  $('#flip').click(function () {
    S3.flip();
    setImg(S3);
  });

  $('#rotate').click(function () {
    S3.rotate();
    setImg(S3);
  });

  S3.preloadImages();
});
