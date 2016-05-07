angular.module('ScopeExampleApp')
    .controller('HeaderCtrl',function($scope){
      $scope.headerCtrl = {};
      $scope.headerCtrl.name = "HeaderCtrl";

      $scope.sayHello = function (name, age) {
        return 'Hi there, ' + name + ' age: ' + age;
      };

      $scope.sayGoodbye = function (name) {
        return 'Bye ' + name;
      };
  });
