(function () {
    'use strict';
    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.order = "";
        $scope.checkMenu = function () {
            if ($scope.order === "") {
                $scope.responseMessage = "Please enter data first";
            }
            else {
                var receivedOrder = $scope.order;
                $scope.responseMessage = receivedOrder;
                var menuItems = receivedOrder.split(',');
                if (menuItems.length <= 3) {
                    $scope.responseMessage = "Enjoy!"
                }
                else {
                    $scope.responseMessage = "Too much!!"
                }
            }

        };
    }
})();
