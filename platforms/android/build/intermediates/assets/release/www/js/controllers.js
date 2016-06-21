angular.module('hrapp.controllers', [])

.controller('AppCtrl', function($scope,LoginService, $ionicPopup, $state) {

  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    LoginService.loginUser($scope.loginData.username,$scope.loginData.password).success(function(data){
      $state.go('employees');
    }).error(function(data){
      var alertPopup = $ionicPopup.alert({
        title : "Login failed",
        template: "Please check your credentials."
      });
    });


  };
})

.controller('EmployeelistsCtrl', function($scope,EmployeeService, $ionicPlatform) {
  var getAllEmployees = function() {
          EmployeeService.getAll().then(function (employees) {
              $scope.employees = employees;
          });
      }

      getAllEmployees();

      $ionicPlatform.onHardwareBackButton(function(){
        e.stopPropagation();
      })
})

.controller('EmployeeDetailsCtrl', function($scope, $stateParams,EmployeeService) {
  EmployeeService.getemployeeById($stateParams.employeeId).then(function(employee){
    $scope.employee = employee;
  });
});
