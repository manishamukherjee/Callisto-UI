/*'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);*/

/*// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/

var obj;

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost:8000/underlay.php")
    .then(function (response) {$scope.names = response.data.nodes;obj=response;});
});

function addToOverlay() {
	
	var values = new Array();

	$.each($("input[name='case[]']:checked").closest("td").siblings("td"),
	       function () {
	            values.push($(this).text());
	       });
	   var str=values;
	   var objAraay=new JSON.parse(obj);
	   console.log(objArray);
	   
	 
	   
	   obj.id = str[0] ;
	   obj.name = str[1] ;
	   obj.status = str[2] ;
	   obj.IP = str[3] ;
	   obj.x=0;
	   obj.y=0;
	  
}