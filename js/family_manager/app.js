var app = angular.module('FamilyManager', 
                    [
					'ngRoute'
					//,'ngMessages'
					//,'FamilyManager.Home'
					//,'FamilyManager.Accounts'
					]);
					 
app.config(function($routeProvider) {
	$routeProvider
	  .when('/', {})
	  .when('/accounts', {
		templateUrl: 'js/family_manager/accounts/tpl/accounts.html',
		controller: 'AccountsCtrl',
		controllerAs: 'accounts'
	  })
	  .when('/health', {
		templateUrl: 'js/family_manager/health_expences/tpl/health.html',
		controller: 'HealthCtrl',
		controllerAs: 'health'
	  })
	  .otherwise({redirectTo: '/'});
});

app.controller('AccountsCtrl', function(){ 
});

app.controller('HealthCtrl', function(){ 
});

app.controller('HealthHomeCtrl', function(){ 
});
