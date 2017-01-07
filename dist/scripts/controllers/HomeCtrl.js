(function() {
    function HomeCtrl() {
        this.heroTitle = "Chat It Up!";
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
