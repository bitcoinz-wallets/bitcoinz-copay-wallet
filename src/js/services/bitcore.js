'use strict';
angular.module('copayApp.services')
  .factory('bitcoreXsg', function bitcoreXsgFactory(bwcService) {
    var bitcoreXsg = bwcService.getBitcoreXsg();
    return bitcoreXsg;
  });
