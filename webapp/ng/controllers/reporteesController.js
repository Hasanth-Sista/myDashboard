﻿(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope, srvEmployee) {
        $scope.phrase = "";
        $scope.reportees = [];
        srvEmployee.getAll().then(function (data) {
            $scope.reportees = data;
        })
    })
})();