var obj;
var ovrJson;



var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost:8000/underlay.php")
    .then(function (response) {$scope.names = response.data.nodes;obj=response;});
    $http.get("http://localhost:8000/overlay.php")
    .then(function (response) {ovrJson=response;});
})

app.controller('customersCtrl2', function($scope,$http) {

$scope.addToOverlay= function() {
	
	var values = new Array();

	$.each($("input[name='case[]']:checked").closest("td").siblings("td"),
	       function () {
	            values.push($(this).text());
	       });
	   var str=values;
	   
	   console.log(ovrJson.data.nodes[1]);
	   
	   var nodeTBA={  
	   id : str[0] ,
	   name : str[1] ,
	   status : str[3] ,
	   IP : str[2] ,
	   x:0,
	   y:0 }
	   
	   ovrJson.data.nodes[2]=nodeTBA;

	   console.log(ovrJson.data.nodes[2]);
	   var sendStruct=ovrJson.data.nodes;
	   var sendStruct1=obj.data.nodes;
	   console.log( 'Data sent: '+ JSON.stringify(sendStruct));
	   console.log( 'Data Total: '+ JSON.stringify(sendStruct1));
	  //$http.post('http://localhost:8000/overlay.php',JSON.stringify(sendStruct) );
	   
	   
	  
	   
       var config = {
           headers : {
        	   
               'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
               
            	   
           }
       }

       $http.post('http://localhost:8000/overlay.php', JSON.stringify(sendStruct), config)
       
   }});
//}})
	   
	   
		
	
	   
	  
	   
	   
	  
