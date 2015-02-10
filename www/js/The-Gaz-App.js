angular.module('TheGazApp', [
  'ionic'])

.run(['$ionicPlatform', function($ionicPlatform) {
  alert('ready');

  $ionicPlatform.ready(function() {
    alert('ready');
  });
});