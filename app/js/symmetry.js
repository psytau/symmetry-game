'use strict';

var create3Symmetry = function () {
  var P = ['1', '2', '3'];
  var flip = function () {
    var a, b;
    a = P[1];
    b = P[2];
    P[1] = b;
    P[2]= a;
  }
  var rotate = function () {
    var end;
    end = P.pop();
    P.unshift(end);
  };
  var getUrl = function () {
    return 'img/3-symmetry/Pizza-' + P[0] + P[1] + P[2] + '.jpg';
  };
  var preloadImages = function () {
    var perms = [['1', '2', '3'],
                 ['1', '3', '2'],
                 ['2', '3', '1'],
                 ['2', '1', '3'],
                 ['3', '1', '2'],
                 ['3', '2', '1']
                ];
     $.each(perms, function (index, p) {
      var i = new Image(256, 256);
      i.src = 'img/3-symmetry/Pizza-' + p[0] + p[1] + p[2] + '.jpg';
    });
  };
  return {
    flip: flip,
    rotate: rotate,
    getUrl: getUrl,
    preloadImages: preloadImages
    // , permutation: P
  };
};
