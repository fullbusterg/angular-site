(function () {
'use strict';

/*angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});*/

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = [];

  $scope.myMessage = function () {
    var error = check($scope.name)
    $scope.display = error;
  };

  function check(string) {
    var stringTotal = 0;
    for (var i = 0; i < string.length; i++) {
       var comma = string.split(',');
       var len = comma.length;
       if (len <= 3) {
            if (string != "") {
              $scope.myMessage = "";
            }else{
              $scope.myMessage = "";
            }
          
       }elseif(len > 3){
          $scope.myMessage = "";
       }
    }
  }
}




})();
