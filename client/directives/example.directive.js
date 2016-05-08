angular.module('ScopeExampleApp')

  .directive('seNoIsolate', function(){

    return {
      templateUrl: 'templates/example-1.tmpl.html'
    }

  })

  .directive('seIsolate', function(){

    return {
      scope: {},
      templateUrl: 'templates/example-2.tmpl.html'
    }

  })

  .directive('seIsolateTwoWay', function(){

    return {
      scope: {
        getCtrlScope: '=' //get-ctrl-scope
      },
      templateUrl: 'templates/example-3.tmpl.html'
    }

  })

  .directive('seIsolateFunction', function($log){

    return {
      scope: {
        hiFunc: '&',
        byeFunc: '&sayBye'
      },
      templateUrl: 'templates/example-4.tmpl.html',
      link: function(scope, attrs, elems, fn) {
        // $log.log('seIsolateFunction: Link');
        scope.vm = scope.vm || {};
        scope.vm.hi = scope.hiFunc({name: 'Fabio', age: 28});
        scope.vm.bye = scope.byeFunc({name: 'Fabio'});
      },
      controller: function($scope, $log) {
        // $log.log('seIsolateFunction: Controller');
        $scope.vm = {};
        $scope.vm.hi = 'Link function will override this.';
        $scope.vm.newVar = 'Link function will NOT override this.';

        $scope.other = {};
        $scope.other.hi = 'Link function will NOT override this.'
      }
    }

  })

  .directive('seIsolateAttr', function(){

    return {
      scope: {
        sayHi: '@'
      },
      templateUrl: 'templates/example-5.tmpl.html'
    }

  })

  .directive('seIsolateAttrBindCtrl', function(){

    return {
      bindToController: true,
      replace: true,
      controller: function () {
      },
      controllerAs: 'iabcd',
      scope: {
        sayHi: '@'
      },
      templateUrl: 'templates/example-6.tmpl.html'
    }

  })

  .directive('seIsolateTransclude', function(){

    return {
      transclude: true,
      scope: {
        props: '=',
        name: '@',
        newName: '@attrRenamedName'
      },
      templateUrl: 'templates/example-7.tmpl.html'
    }

  })

  .directive('seNgView', function(){

    return {
      scope: {},
      transclude: true,
      templateUrl: 'templates/example-8.tmpl.html',
      link: function (scope, el, attrs, fn) {
      },
      controller: function ($scope) {
        $scope.parents = {};

        // don't do this, just for illustration
        function parentObject (scope, name) {
          var path = name, depth = 1;
          while ( !_.has(scope, path) ) {
            path = _.repeat('$parent.', depth++) + name;
          }
          return _.first( _.at(scope, path) );
        }

        this.injectScope = function (scope) {
          // custom deep object key locator (don't do this)
          var myMainCtrl = parentObject(scope, 'mainCtrl');
          $scope.parents.mainCtrl = myMainCtrl;

          // built-in angular parent inheritance
          // $scope.parents.mainCtrl = scope.mainCtrl;
        }

      }
    }

  })
  .directive('seNgViewChild', function(){

    return {
      require: '^^seNgView',
      link: function (scope, el, attrs, fn) {
        fn.injectScope(scope);
      }
    }

  })
