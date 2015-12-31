
'use strict';

angular.module('App')
  .config(function routes($stateProvider) {
    $stateProvider
        .state('sales.mark_price', {
            url: '',
            templateUrl: 'sales/markupPrice/mark_up_price.html',
        })

        .state('sales.charge',{
          url:'',
          templateUrl:  'sales/decorCharge/charge.html',
        })
        .state('sales.art_fees',{
          url:'',
          templateUrl:  'sales/artFee/art_fees.html',
        })
    
  });