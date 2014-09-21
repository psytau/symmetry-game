'use strict';

var create3Symmetry = function () {
  var P = ['1', '2', '3'];
  var log = [];
  var flip = function (axis) {
    var a, b;
    axis = axis || 'N';
    if (axis === 'N') {
      a = P[1]; b = P[2];
      P[1] = b; P[2]= a;
    } else if (axis === 'SE') {
      a = P[0]; b = P[2];
      P[0] = b; P[2] = a;
    } else if (axis === 'SW') {
      a = P[0]; b = P[1];
      P[0] = b; P[1] = a;
    }
    if (axis === 'N' || axis === 'SE' || axis === 'SW') {
      recordMove('F', axis);
    }
  }
  var rotate = function (direction) {
    if(direction === 'R') {
      P.unshift(P.pop());
      recordMove('R', 'R');
    }
    else if (direction === 'L') {
      P.push(P.shift());
      recordMove('R', 'L');
    }
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

  var recordMove = function(moveType, moveDirection) {
    log.push([moveType, moveDirection]);
  }
  var lastMove = function() {
    var moveCode = log[log.length-1][0] + log[log.length-1][1];
    var prettyNames = {
      'RL': 'Rotate Left',
      'RR': 'Rotate Right',
      'FN': 'Flip Across North',
      'FSW': 'Flip Across SW',
      'FSE': 'Flip Across SE'
    };
    return {
      prettyPrinted: '#' + log.length + ' ' +  prettyNames[moveCode],
      code: moveCode
    };
  };
  return {
    flip: flip,
    rotate: rotate,
    getUrl: getUrl,
    preloadImages: preloadImages,
    log: log,
    lastMove: lastMove
    // , permutation: P
  };
};
