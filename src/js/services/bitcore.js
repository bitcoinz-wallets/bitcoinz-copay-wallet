'use strict';
angular.module('copayApp.services')
  .factory('bitcoreBtcz', function bitcoreBtczFactory(bwcService) {
    var bitcoreBtcz = bwcService.getBitcoreBtcz();
    return bitcoreBtcz;
  });
