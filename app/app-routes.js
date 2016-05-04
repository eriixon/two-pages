angular.module('twopages')
.config(function($stateProvider){
    
    $stateProvider
    .state('homepage', {
        url:'',
        templateUrl: 'app/coms/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
    })
    .state('pageone',{
        url:'/pageone',
        templateUrl:'app/coms/pages/pageone.html',
        controller: 'PageOneCon',
        controllerAs: 'po'
    })
    .state('pagetwo',{
        url:'/pagetwo',
        templateUrl: 'app/coms/pages/pagetwo.html',
        controller: 'PageTwoCon',
        controllerAs: 'pt'
    })
})