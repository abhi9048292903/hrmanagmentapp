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

  var employees = [{"id":1,"passportname":"Afsal Ibrahim","designation":"Director","department":"Information Technology","gender":"Male","dob":"12/4/1970","dojoin":"24/04/2013","nationality":"UAE","religion":"Islam","img":"afsal_ibrahim.jpg"},
                  {"id":2,"passportname":"Anoop Ravi","designation":"Manger","department":"Information Technology","gender":"Male","dob":"24/5/1979","dojoin":"21/06/2013","nationality":"India","religion":"Hindu","img":"anoop_ravi.jpg"},
                  {"id":3,"passportname":"Amy Jones","designation":"Junior Officer HR","department":"HR Managment","gender":"Female","dob":"12/4/1991","dojoin":"11/04/2014","nationality":"US","religion":"Cristian","img":"Amy_Jones.jpg"},
                  {"id":4,"passportname":"Lisa Wong","designation":"Director","department":"HR Managment","gender":"Female","dob":"12/4/1980","dojoin":"24/05/2013","nationality":"US","religion":"Cristian","img":"Lisa_Wong.jpg"},
                  {"id":5,"passportname":"Paula Gates","designation":"HR Assistant","department":"HR Managment","gender":"Female","dob":"12/4/1970","dojoin":"24/04/2012","nationality":"UAE","religion":"Cristian","img":"Paula_Gates.jpg"},
                  {"id":6,"passportname":"Steven Wells","designation":"President HR","department":"HR Managment","gender":"Male","dob":"09/4/1969","dojoin":"12/04/2012","nationality":"UK","religion":"Cristian","img":"Steven_Wells.jpg"},
                  {"id":7,"passportname":"Gary Donovan","designation":"Team Lead","department":"Information Technology","gender":"Male","dob":"12/4/1989","dojoin":"24/04/2014","nationality":"UAE","religion":"Islam","img":"Gary_Donovan.jpg"},
                  {"id":8,"passportname":"John Williams","designation":"Director","department":"Information Technology","gender":"Male","dob":"12/4/1987","dojoin":"02/06/2013","nationality":"UAE","religion":"Cristian","img":"John_Williams.jpg"},
                  {"id":9,"passportname":"Ray Moore","designation":"Project Manager","department":"Information Technology","gender":"Male","dob":"12/4/1970","dojoin":"05/08/2013","nationality":"UAE","religion":"Cristian","img":"Ray_Moore.jpg"},
                  {"id":10,"passportname":"Gary Donovan","designation":"Project Lead","department":"Information Technology","gender":"Male","dob":"12/4/1970","dojoin":"05/09/2013","nationality":"UAE","religion":"Cristian","img":"Gary_Donovan.jpg"},
                  {"id":11,"passportname":"Julie Taylor","designation":"Software Engineer","department":"Information Technology","gender":"Female","dob":"12/4/1990","dojoin":"02/11/2013","nationality":"UAE","religion":"Cristian","img":"Julie_Taylor.jpg"},
                  {"id":12,"passportname":"Kathleen Byrne","designation":"Software Trainee","department":"Information Technology","gender":"Female","dob":"12/4/1989","dojoin":"24/12/2013","nationality":"UAE","religion":"Islam","img":"Kathleen_Byrne.jpg"}];

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
