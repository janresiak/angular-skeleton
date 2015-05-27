angular.module('application.services').
    service('TestService', ['$http', 'SERVER_NAME', function($http, SERVER_NAME){

        this.getSample = function(onSuccess, onError) {
            $http.get(SERVER_NAME + '/v2/553675cf57bdefaa16379a4d')
	            .success(function(data) {
	            	onSuccess(data)
	            }).error(function(data){
	            	onError(data)
	            });
        };
       
    }]);