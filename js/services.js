'use strict';

/* Services */

angular.module('atmServices', ['ngResource']).
    factory('Atm', function ($resource) {
        return $resource('atm/:atmId.json', {}, {
            query: {method: 'GET', params: {atmId: 'atm'}, isArray: true}
        });
    })