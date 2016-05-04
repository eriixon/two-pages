angular.module('twopages')
    .controller('HomeController', function ($scope, $interval) {
		
  var hc = this;
 
  var tick = function() {
    
    $scope.clock = Date.now();
    var d = new Date();

    var h = d.getHours();
    if(h < 5 || h > 21)   hc.mes = "Good night, Idaho!";
    if(h > 5  && h < 12 ) hc.mes = "Good morning, Idaho!";
    if(h > 12 && h < 17 ) hc.mes = "Good afternoon, Idaho!";
    if(h > 17 && h < 21 ) hc.mes = "Good evening, Idaho!";    
  }
  
   tick();
   $interval(tick, 1000);
});
