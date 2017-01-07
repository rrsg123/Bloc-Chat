(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "Chat It Up!";
	
	this.rooms = Room.all;
 	console.log(Room.all);  
 }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
