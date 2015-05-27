angular.module('application.services').
    service('CookiesService', ['$cookieStore', function($cookieStore){

        this.getCookie = function(cookieName){
            return $cookieStore.get(cookieName);
        };

        this.setCookie = function(cookieName, cookieValue){
            $cookieStore.put(cookieName, cookieValue);
        };

        this.removeCookie = function(cookieName){
            $cookieStore.remove(cookieName);
        };

    }]);