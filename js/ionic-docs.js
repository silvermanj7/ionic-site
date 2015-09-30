/*!
 * Ionic IO
 * Copyright 115 Drifty Co. http://drifty.com/
 */
(function() {
var IonicDocsModule = angular.module('IonicDocs', ['ngAnimate'])
.controller('DocsNavCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.test = function() {
    console.log($scope)
  }
}])
.controller('ComponentsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.setPlatform = function(platform) {
    console.log('set plaform to ', platform)
  }



  var $scrollspy = $('body').scrollspy({target: '#components-index'});
  $scrollspy.on('activate.bs.scrollspy', onScrollSpyChange);
    var $iframe = document.getElementsByTagName('#demo-device iframe');



  function onScrollSpyChange(e) {
    if (e.target.id === 'components-index') {
      return;
    }
    var $hash, $node;
    $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
    $node = $('#' + $hash);
    if ($node.length) {
      $node.attr('id', '');
    }
    document.location.hash = $hash;
    // TODO: set demo src
    $iframe[0].contentWindow.postMessage($hash, '*');

    if ($node.length) {
      return $node.attr('id', $hash);
    }
  }

  // var indexList = $('#components-index');
  // var docsEnd = $('#docs-end');
  $(document).scroll(function() {
    //fixyCheck();
  });
  function fixyCheck() {
  //   if (indexList.offset().top + indexList.height() >=
  //       docsEnd.offset().top - 10) {
  //     indexList[0].classList.add('bottom');
  //   }
  //   if ($(document).scrollTop() + window.innerHeight <
  //       docsEnd.offset().top + 100) {
  //     indexList[0].classList.remove('bottom'); // restore when you scroll up
  //   }
  //
  }
}]);

IonicDocsModule



})();
