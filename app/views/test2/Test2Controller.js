angular.module('application.controllers')
    .controller('Test2Controller', ['$scope', 'LoggedUser', '$state',
        function ($scope, LoggedUser, $state) {

            $scope.loggedUserToken;

            $scope.test2variable = 'this is test2 view';
            $scope.loggedUserToken = LoggedUser.getToken();

            $scope.logOut = function() {
                LoggedUser.removeToken();
                $scope.loggedUserToken = LoggedUser.getToken();
                $state.go('test');
            };

        }
    ]);