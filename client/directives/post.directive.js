angular.module('ScopeExampleApp')
  .directive('sePostNoIsolate', function(){

    return {
      templateUrl: 'directives/post.tmpl.html'
    }

  }).directive('sePostIsolate', function(){

    return {
      scope: {},
      templateUrl: 'directives/post.tmpl.html'
    }

  }).directive('sePostIsolateBindScope', function(){

    return {
      scope: {
        getCtrlScope: '=' //get-ctrl-scope
      },
      templateUrl: 'directives/post.tmpl.html'
    }

  }).directive('sePostIsolateBindScopeFn', function(){

    return {
      scope: {
        hiFunc: '&',
        byeFunc: '&sayBye'
      },
      templateUrl: 'templates/scope-fn.tmpl.html',
      link: function(scope, attrs, elems, fn) {
        scope.vm = {};
        scope.vm.hi = scope.hiFunc({name: 'Fabio', age: 28});
        scope.vm.bye = scope.byeFunc({name: 'Fabio'});
      }
    }

  }).directive('scopeLocalProp', function(){

    return {
      scope: {
        sayHi: '@'
      },
      templateUrl: 'templates/scope-bind.tmpl.html',
      link: function(scope, attrs, elems, fn) {
        scope.vm = {};
        scope.vm.hi = scope.sayHi;
      }
    }

  })
