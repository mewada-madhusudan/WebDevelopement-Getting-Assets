var app = angular.module('contactMgr',['ngRoute']);
app.config(function($routeProvider, $locationProvider){
   
    $routeProvider.when('/', {
        controller: 'AppCtl',
        templateUrl: 'assets/index.html'
    })
    .when('/add-contact',{
        controller:'addCtl',
        templateUrl: 'assets/partials/add.html'
    })
    .when('contact/:id', {
        controller: 'contactCtl',
        templateUrl: 'assets/partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

//Controller Further Ahead
app.controller('AppCtl',
    function($scope){
      /*  $scope.clickHandler = function(){
          $scope.isHidden= !$scope.isHidden;
        };*/
        
        $scope.contacts = [
         { name: 'Madhusudan Mewada'  ,
          phone: '8966070213',
          email: 'madhusudan.145@gmail.com'
        },
        {
            name: 'Anita Mewada',
            phone: '9806027229',
            email: 'vikjayesh@gmail.com'
        },
        {
            name: 'Vikesh Mewada',
            phone: '9806027229',
            email: 'vikjayesh@gmail.com'
        }];
     
        
        $scope.styleDemo = function(){
            if(!$scope.styler){
                return;
            }
            return {
                background: 'red',
                fontWeight: 'bold'
            };
        };
        
    });
app.controller('addCtl',function($scope){

});

app.controller('contactCtl', function($scope, $routeParams){
    
});

//Filter Further Ahead
app.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'...' : input ;
    };
});

    
    