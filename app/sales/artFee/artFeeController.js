angular.module('App')
.controller('artFeeController', ['$scope','$mdDialog', '$mdMedia', function ($scope, $mdDialog, $mdMedia) {
  'use strict';

  $scope.locations = [
        {location:'Kathmandu',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'},
        {location:'hello',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'},
        {location:'Ratnapark',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'},
        {location:'Dhobighat',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'},
        {location:'Nepal',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'},
        {location:'Baneshwor',colorOne:'123123',colorTwo:'34234',colorThree:'324234',colorFour:'34567'}
        
    ];


  $scope.selected = [];

  $scope.query = {
    order: 'location',
    limit: 5,
    page: 1
  };


  $scope.onPaginate = function (page, limit) {
    console.log($scope.locations);
    $scope.locations(angular.extend({}, $scope.query, {page: page, limit: limit}));
  };

  $scope.onReorder = function (order) {
    console.log($scope.locations);
    $scope.locations(angular.extend({}, $scope.query, {order: order}));
  };


  //modal
$scope.showAddForm = function(ev) {
    $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'sales/artFee/addform.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

}]);
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

