'use strict';

// Declare app level module which depends on views, and components
angular.module('App', [
  'ui.router',
  'ngMaterial',
  'md.data.table'
]) 
.config(function($stateProvider, $urlRouterProvider) {
    
     $urlRouterProvider.otherwise('/home');
    
     $stateProvider
        
        // HOME STATES ========================================
         .state('home', {
             url: '/home',
             templateUrl: 'home/home.html'
         })
        
         // config PAGE AND MULTIPLE NAMED VIEWS =================================
         .state('sales', {
             // we'll get to this in a bit       
             url:'/sales',
             templateUrl:'sales/sales.html'
         })

        
 })



.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('indigo');
})

.controller('AppCtrl', function($scope, $mdSidenav, $mdToast) {
  $scope.toggleSidenav = function(menu) {
    $mdSidenav(menu).toggle();
  }
  $scope.toast = function(message) {
    var toast = $mdToast.simple().content('You clicked ' + message).position('bottom right');
    $mdToast.show(toast);
  };
  $scope.toastList = function(message) {
    var toast = $mdToast.simple().content('You clicked ' + message + ' having selected ' + $scope.selected.length + ' item(s)').position('bottom right');
    $mdToast.show(toast);
  };
  $scope.selected = [];
  $scope.toggle = function(item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) list.splice(idx, 1);
    else list.push(item);
  };
});