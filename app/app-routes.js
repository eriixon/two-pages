angular.module('twopages')
.config(function($stateProvider){
    
    $stateProvider
    .state('homepage', {
        url:'',
        templateUrl: 'app/coms/home.html'
    })
    .state('pageone',{
        url:'/pageone',
        templateUrl:'app/coms/pages/pageone.html',
        controller: 'PageOneCon',
        controllerAs: 'poc'
    })
    .state('pagetwo',{
        url:'/pagetwo',
        templateUrl: 'app/coms/pages/pagetwo.html',
        controller: 'PageTwoCon',
        controllerAs: 'ptc'
    })
})