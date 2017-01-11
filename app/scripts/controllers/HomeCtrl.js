(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "Chat It Up!";
	
 }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
