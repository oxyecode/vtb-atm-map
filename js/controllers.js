'use strict';

/* Controllers */

function AtmListCtrl($scope, $parse, Atm) {
    $scope.list = Atm.query(function () {
        var map_xy = [];
        for (var i in $scope.list) {
            map_xy.push([
                $scope.list[i].x,
                $scope.list[i].y,
                $scope.list[i].id,
                $scope.list[i].status
            ]);
        }
        var url = '/map/';
        for (var i = 0; i < map_xy.length; i++) {
            url += map_xy[i][0] + ',' + map_xy[i][1] + ',' + map_xy[i][2] + ',' + map_xy[i][3];
            if (i < map_xy.length-1) {
                url += ',';
            }
        }
        $scope.mapUrl = url;
    });
}
AtmListCtrl.$inject = ['$scope', '$parse', 'Atm'];

function AtmDetailCtrl($scope, $routeParams, $parse, Atm) {
    $scope.atm = Atm.get({atmId: $routeParams.atmId}, function (atm) {
        $scope.mainImageUrl = atm.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

AtmDetailCtrl.$inject = ['$scope', '$routeParams', '$parse', 'Atm'];
