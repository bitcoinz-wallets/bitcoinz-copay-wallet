
'use strict';
angular.module('copayApp.services')
  .factory('sjcl', function bitcoreXsgFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
