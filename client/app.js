angular.module('ScopeExampleApp', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('ScopeExampleApp').config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'partials/view.html'
            }).otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });

angular.module('ScopeExampleApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});
