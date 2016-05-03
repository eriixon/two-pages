angular.module('twopages')
    .controller('PageOneCon', function(ImageService){
   
   var poc = this;
    
    ImageService.getImage().then(function(imageData){
    poc.imageData = imageData;

    }) 
})