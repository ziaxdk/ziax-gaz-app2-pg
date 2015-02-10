angular.module('thegazapp', [
  'ionic'])

.run(['$ionicPlatform', function($ionicPlatform) {
  alert('ready');

  $ionicPlatform.ready(function() {
    alert('ready');
  });
});