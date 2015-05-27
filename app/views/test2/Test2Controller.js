angular.module('application.controllers')
    .controller('Test2Controller', ['$scope', 'LoggedUser', '$state',
        function ($scope, LoggedUser, $state) {

            $scope.isUserLoggedIn;

            $scope.test2variable = 'this is test2 view';
            $scope.isUserLoggedIn = LoggedUser.isLogged();

            $scope.logOut = function() {
                LoggedUser.removeToken();
                $scope.isUserLoggedIn = LoggedUser.isLogged();
                $state.go('test');
            };

        }
    ]);