var IapController = function ($scope, $http) {
	$scope.rs = {};
	$scope.iapCompleted = false;
	$scope.message = "";
	
	$scope.runIAP = function(rs) {
		var parameters = 'Client ID: ' + rs.clientID + ', ' + 'Bill Group ID: ' + rs.billgroupID;
		console.log(parameters);
		$scope.message = 'Invoice Approval Processing completed';
		$scope.iapCompleted = true;
	};	
	
	$scope.reset = function() {
		$scope.rs = {};		
		$scope.iapCompleted = false;
		$scope.message = "";		
	};
};