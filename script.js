var app = angular.module("formFill", []);

app.controller("info", function($scope){
	$scope.users = [
		{"name":"Peter", "Balance":"9832"},
		{"name":"Maina", "Balance":"982"},
		{"name":"Muturi", "Balance":"932"}
	];
	$scope.addNew = function(user){
		$scope.users.push(user);
		$scope.current = {};
	};
	$scope.edit = function(user){
		$scope.current = user;
	};
	$scope.save = function(user){
		$scope.current = {};
};
	$scope.current = {};
});