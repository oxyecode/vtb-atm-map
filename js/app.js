'use strict';

/* App Module */

angular.module('atm', ['atmFilters', 'atmServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/list', {templateUrl: 'partials/atm-list.html',   controller: AtmListCtrl}).
      when('/list/:atmId', {templateUrl: 'partials/atm-detail.html', controller: AtmDetailCtrl}).
      otherwise({redirectTo: '/list'});
}]);
