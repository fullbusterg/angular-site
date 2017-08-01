(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "ibrahim";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "ibrahim likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
