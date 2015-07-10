// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
   
    .state('login', {
      url: '/login',
      templateUrl: 'login.html'
    })
    
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

});

app.controller('Login', function($scope) {
    $scope.login = function(name) {
        window.localStorage.setItem("name", name);
       window.localStorage.setItem("URL", "http://thesourcepresentsfinearts.com/events/?action=tribe_list&tribe_paged=1&tribe_event_display=list&tribe-bar-search=" + name);


    };
  $scope.loadData = function(v) {
    $scope.URL = window.localStorage.getItem("URL");
  }

});

angular.module('filters-module', [])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])