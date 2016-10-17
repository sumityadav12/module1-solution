(function(){
'use strict';

angular.module('module12', [])
.controller('module1Controller', module1Controller);

module1Controller.$inject= ['$scope'];

function module1Controller($scope){

$scope.name = "test";
$scope.test = "testscope";

}

})();
