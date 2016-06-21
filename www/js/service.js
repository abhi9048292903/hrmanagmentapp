angular.module('hrapp.services',[])

.factory('LoginService',function($q){
  return{
    loginUser: function(username, passwd){
      var deferred = $q.defer();
      var promise = deferred.promise;
      if(username == 'admin' && passwd == 'admin'){
        deferred.resolve('Welcome '+username);
      }
      else {
        deferred.reject('Wrong credentials...');
      }
      promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
      promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
      }
      return promise;
    }
  }

})

.factory('EmployeeService', function($q){

  var employees = [{"id":1,"passportname":"Afsal Ibrahim","designation":"Director","department":"Information Technology","gender":"Male","dob":"12/4/1970","dojoin":"24/04/2013","nationality":"UAE","religion":"Islam","img":"James_King.jpg"},
                  {"id":2,"passportname":"Afsal Ibrahim","designation":"Director","department":"Information Technology","gender":"Male","dob":"12/4/1970","dojoin":"24/04/2013","nationality":"UAE","religion":"Islam","img":"James_King.jpg"}];

  return{
    getAll:function(){
      var deferred = $q.defer();
      deferred.resolve(employees);
      return deferred.promise;
    },
    getemployeeById: function(employeeId){
      var deferred = $q.defer();
      var employee = employees[employeeId - 1];
      deferred.resolve(employee);
      return deferred.promise;
    }
  }
});
