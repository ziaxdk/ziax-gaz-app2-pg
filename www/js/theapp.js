angular.module('thegazapp', ['ionic'])

.run(['$ionicPlatform', function($ionicPlatform) {
  alert('run');

  $ionicPlatform.ready(function() {
    alert('ready');
  });
});