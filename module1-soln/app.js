(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController' , LunchCheckController);

        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope)
        {
            debugger;
        $scope.lunchItems = "";
            $scope.checkIfTooMuch = function()
            {
                debugger;
                var items= $scope.lunchItems.split(",");
                if(items.length === 0) {
                    $scope.message= "Please enter data first";
                    return;
                }
                else if(items.length <= 3)
                {
                    $scope.message= "Enjoy!";
                    return;
                }
                else(items.length > 3)
                {
                    $scope.message= "Too much!";
                    return;
                }
            }
        }
})();