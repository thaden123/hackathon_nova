var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello from controller");
	
	$http.get('/contactlist');/////in progress
	
	person1 = {
		name: 'Tim',
		email: 'blah@blah.com',
		number: 'blah-blah-blah'
	};
	
	person2 = {
		name: 'Jim',
		email: 'Jim@blah.com',
		number: 'Jim-blah-blah'
	};
	
	person3 = {
		name: 'Kim',
		email: 'Kim@blah.com',
		number: 'Kim-blah-blah'
	};
	
	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;
	
}]);