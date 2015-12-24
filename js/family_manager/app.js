var app = angular.module('FamilyManager', 
                    [
					'ngRoute'
					,'ui.bootstrap'
					,'ui.grid'
					,'FamilyManager.Health'
					//,'ngMessages'
					//,'FamilyManager.Home'
					//,'FamilyManager.Accounts'
					]);
					 
app.config(function($routeProvider, $httpProvider) {
	$routeProvider
	  .when('/', {})
	  .when('/accounts', {
		templateUrl: 'js/family_manager/accounts/tpl/accounts.html',
		controller: 'AccountsCtrl',
		controllerAs: 'accounts'
	  })
	  .when('/health', {
		templateUrl: 'js/family_manager/health_expenses/tpl/health.html',
		controller: 'HealthCtrl',
		controllerAs: 'health'
	  })
	  .otherwise({redirectTo: '/'});
	  
	  $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('AccountsCtrl', function(){ 
});

app.controller('HealthCtrl', function(){ 
});

app.controller('HealthHomeCtrl', function($scope, $http, $location){ 
  var baseUrl = $location.protocol() + "://" + $location.host()
    + ":8080";
  $http.get(baseUrl + "/health_not_paid.php3").then(function(response) {
	 $scope.myData = response.data;/*[{"invoiceDate": response.data.invoiceDate, 
	                   "description": response.data.description,
					   "dueDate": response.data.dueDate}]*/; 
  }, function(error) {
	 $scope.myData = [{"firstName": "Coxa", "lastName": "Carney"}];   	  
  });
  
});
