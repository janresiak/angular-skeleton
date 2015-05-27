angular.module('application.controllers')
    .controller('TestController', ['$scope', 'TestService', '_', 'LoggedUser',
        function ($scope, TestService, _, LoggedUser) {

            $scope.variable;
            $scope.result;
            $scope.mappedData;
            $scope.loggedUserToken;

            var onSuccess = function(data) {
                console.log('success', data);
                $scope.result = data.key;
            };

            var onError = function(data) {
                console.log('error', data);
                $scope.result = 'error';
            };

            var init = function() {
                $scope.variable = 'test string';
                $scope.result = 'please wait...';
                $scope.mappedData = _.map([1, 2, 3, 4, 5], function(el) {return 'mapped ' + el});
                $scope.loggedUserToken = LoggedUser.getToken();
                TestService.getSample(onSuccess, onError);
            };

            init()

            $scope.logIn = function() {
                LoggedUser.setToken("user123");
                $scope.loggedUserToken = LoggedUser.getToken();
            };

        }
    ]);