angular.module('ScopeExampleApp', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('ScopeExampleApp').config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template : '<posts />'
            }).when('/page-example', {
                template : '<h1>A New Page Example <a ng-href="/">Go Home</a></h1>'
            }).when('/404', {
                template : '<h1>404. This page doesn\'t exist. <a ng-href="/">Go Home</a></h1>'
            }).otherwise({
                redirectTo: '/404'
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

// TODO
// ng-view
// transclude
// & and @
