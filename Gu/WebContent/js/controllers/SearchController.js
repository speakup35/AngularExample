var SearchController = function ($scope, $http) {
	$scope.planID = "";
	
	$scope.searchPlan = function(planID) {
		console.log('Input Plan ID: ' + planID);
	};
	
	$scope.reset = function() {
		$scope.planID = "";
	};
};