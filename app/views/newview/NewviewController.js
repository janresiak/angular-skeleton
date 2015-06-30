angular.module('application.controllers')
    .controller('NewviewController', ['$scope',
        function ($scope) {

            var init = function() {
                $scope.newviewVariable = "This is a new view!";
            };

            init()

        }
    ]);