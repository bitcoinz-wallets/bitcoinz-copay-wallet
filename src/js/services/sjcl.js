
'use strict';
angular.module('copayApp.services')
  .factory('sjcl', function bitcoreBtczFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
