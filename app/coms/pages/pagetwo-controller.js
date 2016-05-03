angular.module('twopages')
    .controller('PageTwoCon', function($scope, $interval){
    
  var ptc = this;
 
  var tick = function() {
    
    $scope.clock = Date.now();
    var d = new Date();

    var h = d.getHours();
    if(h < 5 || h > 21)   ptc.mes = "Good night, Idaho!";
    if(h > 5  && h < 12 ) ptc.mes = "Good morning, Idaho!";
    if(h > 12 && h < 17 ) ptc.mes = "Good afternoon, Idaho!";
    if(h > 17 && h < 21 ) ptc.mes = "Good evening, Idaho!";    
  }
  
   tick();
   $interval(tick, 1000);
});